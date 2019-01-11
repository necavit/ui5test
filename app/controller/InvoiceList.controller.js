sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "app/model/InvoiceFormatter"
], function(Controller, JSONModel, InvoiceFormatter) {
  return Controller.extend("app.controller.InvoiceList", {
    
    invoiceFormatter : InvoiceFormatter,

    onInit : function() {
      var dataModel = new JSONModel("data/invoices.json");
      var viewModel = new JSONModel({
        currency : "EUR"
      });
      this.getView().setModel(dataModel);
      this.getView().setModel(viewModel, "viewModel");
    }
  });
});