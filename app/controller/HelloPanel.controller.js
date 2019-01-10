sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
  return Controller.extend("app.controller.HelloPanel", {

    DIALOG_ID : "helloDialog",

    onSayHi : function() {
      var bundle = this.getView().getModel("i18n").getResourceBundle();
      var recipient = this.getView().getModel().getProperty("/recipient/name");
      var message = bundle.getText("inputDescriptionHelloRecipient", [recipient])
      MessageToast.show(message);
    },

    onShowDialog : function() {
      var view = this.getView();
      var dialog = view.byId(this.DIALOG_ID)
      if (!dialog) {
        Fragment.load({
          name : "app.fragment.DialogHello",
          id : view.getId(),
          controller : this
        }).then(function(resolvedDialog) {
          dialog = resolvedDialog;
          view.addDependent(dialog);
          dialog.open();
        });
      }
      dialog.open();
    },

    onCloseDialog : function() {
      this.getView().byId(this.DIALOG_ID).close();
    }
  });
});