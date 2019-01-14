sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "app/model/InvoiceFormatter",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function(Controller, JSONModel, InvoiceFormatter, Filter, FilterOperator) {
  return Controller.extend("app.controller.InvoiceList", {
    
    invoiceFormatter : InvoiceFormatter,

    onInit : function() {
      var dataModel = new JSONModel("data/invoices.json");
      var viewModel = new JSONModel({
        currency : "EUR"
      });
      this.getView().setModel(dataModel);
      this.getView().setModel(viewModel, "viewModel");
    },

    filterInvoices : function(event) {
      var filtersList = [];
      var searchQuery = event.getParameter("query");
      if (searchQuery) {
        filtersList.push(new Filter("productName", FilterOperator.Contains, searchQuery));
      }
      var listView = this.byId("invoiceList");
      var itemsListBinding = listView.getBinding("items");
      itemsListBinding.filter(filtersList);
    }
  });
});