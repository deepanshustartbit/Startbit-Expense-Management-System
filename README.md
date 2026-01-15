# Expense Management System

## 📌 Overview
Expense Management System is a full-stack enterprise application built using **SAP CAP (Node.js)** and **SAPUI5**.  
It helps users **track expenses and income**, analyze spending, and view **monthly, yearly, and overall financial summaries**, including **profit and loss**.

---

## 🚀 Features

### ✅ Expense Management
- Add expenses manually using a form
- Upload expenses in bulk using Excel file
- View all expenses in a list
- Expenses stored securely in SAP HANA DB

### ✅ Income Management
- Add income details
- Track income from different sources (e.g. client billing)
- View total income (monthly / yearly / overall)

### ✅ Financial Dashboard
- Monthly expense total
- Yearly expense total
- Overall expense total
- Monthly income total
- Yearly income total
- Overall income total
- **Profit / Loss calculation**
  - Profit shown in green
  - Loss shown in red

### ✅ Analytics
- Automatic calculation based on expense date
- Real-time KPI updates
- Clean and responsive UI (mobile, tablet, desktop)

---

## 🏗️ Architecture

```text
STARTBITEXPMANAGER
└── sbtexp
    ├── app
    │   └── sbtuiapp
    │       ├── dist
    │       ├── webapp
    │       │   ├── controller
    │       │   ├── view
    │       │   │   ├── fragments
    │       │   │   ├── App.view.xml
    │       │   │   ├── MainView.view.xml
    │       │   │   ├── ExpenseList.view.xml
    │       │   │   └── ManageCatagory.view.xml
    │       │   ├── model
    │       │   ├── css
    │       │   ├── i18n
    │       │   ├── Component.js
    │       │   ├── manifest.json
    │       │   └── index.html
    │       ├── package.json
    │       └── ui5.yaml
    │
    ├── db
    │   └── schema.cds
    │
    ├── srv
    │   ├── ExpenseService.cds
    │   ├── ExpensesService.js
    │   ├── CategoryService.cds
    │   └── admin_Service.cds
    │
    ├── gen
    ├── package.json
    └── README.md
