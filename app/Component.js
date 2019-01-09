sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel) {
  return UIComponent.extend("app.Component", {
    metadata : {
      manifest: "json"
    },

    init : function () {
      UIComponent.prototype.init.apply(this, arguments);
      
      var data = {
        recipient : {
           name : "World"
        }
      };
      this.setModel(new JSONModel(data));
    }
  });
});