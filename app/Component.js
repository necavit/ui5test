sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"
], function(UIComponent, JSONModel, ResourceModel) {
  return UIComponent.extend("", {
    metadata : {
      rootView: {
         "viewName": "app.view.App",
         "type": "XML",
         "async": true,
         "id": "app"
      }
    },

    init : function () {
      UIComponent.prototype.init.apply(this, arguments);
      
      var data = {
        recipient : {
           name : "World"
        }
      };
      this.setModel(new JSONModel(data));

      var i18nModel = new ResourceModel({
        bundleName: "app.i18n.i18n"
      });
      this.setModel(i18nModel, "i18n");
    }
  });
});