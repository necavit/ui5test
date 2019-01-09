sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
  return Controller.extend("app.controller.App", {
    onInit : function () {
      var data = {
         recipient : {
            name : "World"
         }
      };
      this.getView().setModel(new JSONModel(data));
      var i18nModel = new ResourceModel({
        bundleName: "app.i18n.i18n"
      });
      this.getView().setModel(i18nModel, "i18n");
    },
    onSayHi : function() {
      var bundle = this.getView().getModel("i18n").getResourceBundle();
      var recipient = this.getView().getModel().getProperty("/recipient/name");
      var message = bundle.getText("inputDescriptionHelloRecipient", [recipient])
      MessageToast.show(message);
    }
  });
});