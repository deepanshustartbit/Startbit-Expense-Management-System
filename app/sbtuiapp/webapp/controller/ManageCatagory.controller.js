sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("sbtuiapp.controller.ManageCatagory", {
        onInit: function () {
            // CAP OData model already connected
        },
        onAddCategory : function () {
             if (!this._oExpenseDialog) {
                    this._oExpenseDialog = sap.ui.xmlfragment(
                        "sbtuiapp.view.fragments.AddCatagory",
                        this
                    );
                    this.getView().addDependent(this._oExpenseDialog);
                }
            // Initialize blank model
            var oPreviewModel = new sap.ui.model.json.JSONModel({
                    name: "",
                    description: ""
                });
             this._oExpenseDialog.setModel(oPreviewModel, "catagory");
                this._oExpenseDialog.open();
        },
        onSaveCatagory : function(){
              var oData = this._oExpenseDialog.getModel("catagory").getData();
                 var oModel = this.getOwnerComponent().getModel("categoryModel");

                var oListBinding = oModel.bindList("/Catagories");

                oListBinding.create(oData).created().then(function () {
                    sap.m.MessageToast.show("Catagory saved");
                }).catch(function (e) {
                    sap.m.MessageBox.error("Save failed");
                });

                this._oExpenseDialog.close();
        }
    });
});
