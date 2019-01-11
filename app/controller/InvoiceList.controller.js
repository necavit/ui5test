sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
  return Controller.extend("app.controller.InvoiceList", {
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