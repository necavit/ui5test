sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  return Controller.extend("app.controller.HelloPanel", {
    onSayHi : function() {
      var bundle = this.getView().getModel("i18n").getResourceBundle();
      var recipient = this.getView().getModel().getProperty("/recipient/name");
      var message = bundle.getText("inputDescriptionHelloRecipient", [recipient])
      MessageToast.show(message);
    },

    onShowDialog : function() {
      this.getOwnerComponent().openHelloDialog();
    }
  });
});