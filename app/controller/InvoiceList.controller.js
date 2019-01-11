sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
  return Controller.extend("app.controller.InvoiceList", {
    onInit : function() {
      var model = new JSONModel({
        currency : "EUR"
      });
      this.getView().setModel(model, "view");
    }
  });
});