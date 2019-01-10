sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
  return Controller.extend("app.controller.HelloPanel", {
    onSayHi : function() {
      var bundle = this.getView().getModel("i18n").getResourceBundle();
      var recipient = this.getView().getModel().getProperty("/recipient/name");
      var message = bundle.getText("inputDescriptionHelloRecipient", [recipient])
      MessageToast.show(message);
    },

    onShowDialog : function() {
      var view = this.getView();
      var dialogId = "helloDialog"
      var dialog = view.byId(dialogId)
      if (!dialog) {
        Fragment.load({
          name : "app.fragment.DialogHello",
          id : view.getId()
        }).then(function(resolvedDialog) {
          dialog = resolvedDialog;
          view.addDependent(dialog);
          dialog.open();
        });
      }
      dialog.open();
    }
  });
});