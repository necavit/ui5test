sap.ui.define([
  //
], function() {
  return {
    statusText : function(statusCodeString) {
      var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
      switch (statusCodeString) {
        case "A": return resourceBundle.getText("invoiceStatusA");
        case "B": return resourceBundle.getText("invoiceStatusB");
        case "C": return resourceBundle.getText("invoiceStatusC");
        default:  return statusCodeString;
      }
    }
  }
});