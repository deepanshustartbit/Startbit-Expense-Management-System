sap.ui.define([
    "sap/ui/core/mvc/Controller",
      "sap/m/MessageBox",
    "sap/base/Log"
], function (Controller, MessageBox, Log) {
    "use strict";

    return Controller.extend("sbtuiapp.controller.MainView", {
            onInit: function () {
                var that = this;  
                var aExpenses;
                var oModel1 = this.getOwnerComponent().getModel();
                sap.m.MessageToast.show(oModel1);
                oModel1.bindContext("/FetchExpenseData()").requestObject()
                .then(function (aData) {
                aExpenses = aData.value;
                //Calculation Monthly ammount
                var monthlyAmmount = 0;
                aExpenses.forEach(function(ma){
                    const date = new Date();
                    var currentmonth = date.getMonth();
                    var expenseMonth = new Date(ma.expenseDate);
                    var currentyear = date.getFullYear();
                    if(expenseMonth.getMonth() === currentmonth && expenseMonth.getFullYear() === currentyear){
                        monthlyAmmount += Number(ma.amount);
                        sap.m.MessageToast.show("Current Date : " + expenseMonth);
                    }
                });
                //Calculation Current Year Ammount
                var yearlyAmmount = 0;
                aExpenses.forEach(function (ma){
                    const date = new Date();
                    var currentyear = date.getFullYear();
                    var expenseDate = new Date(ma.expenseDate);
                    if(expenseDate.getFullYear() === currentyear){
                        yearlyAmmount += Number(ma.amount);
                    }
                });
                //Calculation Total overall ammount
                var totalAmount = 0;
                aExpenses.forEach(function (expense) {
                    totalAmount += Number(expense.amount);
                });

                var kpiModel = new sap.ui.model.json.JSONModel({
                    expenseMonthly: monthlyAmmount,
                    expenseYearly: yearlyAmmount,
                    expenseTotal: totalAmount,
                    incomeMonthly: 85000,
                    incomeYearly: 920000,
                    incomeTotal: 1800000,
                    profitMonthly: 85000 - 12500
                    });
                that.getView().setModel(kpiModel, "kpi");
            })
            .catch(function (e) {
                MessageBox.error("Failed to load expenses");
            });
        
            },
            onAddExpense: function () {
                if (!this._oExpenseDialog) {
                    this._oExpenseDialog = sap.ui.xmlfragment(
                        "sbtuiapp.view.fragments.AddExpense",
                        this
                    );
                    this.getView().addDependent(this._oExpenseDialog);
                }

                // Local preview data (NOT sent to backend)
                var oPreviewModel = new sap.ui.model.json.JSONModel({
                    title: "",
                    amount: "",
                    currency: "INR",
                    expenseDate: "",
                    notes: ""
                });

                this._oExpenseDialog.setModel(oPreviewModel, "expense");
                this._oExpenseDialog.open();
            },
            onCloseExpenseDialog: function () {  // Cancel local create
                this._oExpenseDialog.close();
            }
            ,
            onMyExpenses: function () {
                this.getOwnerComponent().getRouter().navTo("expenseList");
            },
            onReports: function () {
                this.getOwnerComponent().getRouter().navTo("reports");
            },
            onApprovals: function () {
                this.getOwnerComponent().getRouter().navTo("approvals");
            },
            onSaveExpense: function () {
                var oData = this._oExpenseDialog.getModel("expense").getData();
                var oModel = this.getView().getModel();

                var oListBinding = oModel.bindList("/Expenses");

                oListBinding.create(oData).created().then(function () {
                    sap.m.MessageToast.show("Expense saved");
                }).catch(function (e) {
                    sap.m.MessageBox.error("Save failed");
                });

                this._oExpenseDialog.close();
            }
        });
});
