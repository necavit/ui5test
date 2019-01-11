sap.ui.define([
  "sap/ui/base/ManagedObject",
  "sap/ui/core/Fragment"
], function(ManagedObject, Fragment) {
  return ManagedObject.extend("app.controller.HelloDialog", {
    constructor : function(view, dialogId) {
      this._view = view;
      if (dialogId) {
        this._dialogId = dialogId;
      } else {
        this._dialogId = "helloDialogFallback";
      }
    },

    exit : function() {
      delete this._view;
      if (this._dialogId) {
        delete this._dialogId;
      }
    },

    open : function() {
      var view = this._view;
      var dialog = view.byId(this._dialogId);
      if (!dialog) {
        var fragmentController = {
          onCloseDialog : function() {
            dialog.close();
          }
        };
        Fragment.load({
          name : "app.fragment.DialogHello",
          controller : fragmentController,
          id : this._dialogId
        }).then(function(resolvedDialog) {
          dialog = resolvedDialog;
          view.addDependent(dialog);
          dialog.open();
        });
      } else {
        dialog.open();
      }
    }
  });  
});