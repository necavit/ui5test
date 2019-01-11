sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "app/controller/HelloDialog"
], function(UIComponent, JSONModel, HelloDialog) {
  return UIComponent.extend("app.Component", {
    metadata : {
      manifest: "json"
    },

    init : function() {
      UIComponent.prototype.init.apply(this, arguments);
      
      var data = {
        recipient : {
           name : "World"
        }
      };
      this.setModel(new JSONModel(data));

      this._helloDialog = new HelloDialog(this.getRootControl(), "id-helloDialog");
    },

    exit : function() {
      this._helloDialog.destroy();
      delete this._helloDialog;
    },

    openHelloDialog : function() {
      this._helloDialog.open();
    }
  });
});