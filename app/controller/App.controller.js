sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  return Controller.extend("app.controller.App", {
    onSayHi : function() {
      MessageToast.show("Hi, toast!");
    }
  });
});