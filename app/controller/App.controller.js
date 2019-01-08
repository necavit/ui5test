sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
  return Controller.extend("app.controller.App", {
    onInit : function () {
      var data = {
         recipient : {
            name : "World"
         }
      };
      this.getView().setModel(new JSONModel(data));
    },
    onSayHi : function() {
      MessageToast.show("Hi, toast!");
    }
  });
});