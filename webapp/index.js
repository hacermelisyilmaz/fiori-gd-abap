sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
  "use strict";

  XMLView.create({
    viewName: "abap.fiori.view.Main",
  }).then(function (oView) {
    oView.placeAt("content");
  });
});
