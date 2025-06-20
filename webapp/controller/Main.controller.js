sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("abap.fiori.controller.Main", {
      onInit: function () {
        const oModel = new JSONModel();
        oModel.loadData("model/products.json");
        this.getView().setModel(oModel);
      },
    });
  }
);
