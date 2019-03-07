var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addJSON = addJSON;
exports.resetPalette = resetPalette;
/* eslint-disable no-undef */
// eslint-disable-next-line import/no-unresolved
var sketch = __webpack_require__(1);

var colors = {};
// eslint-disable-next-line no-undef
var app = NSApp.delegate();
var doc = context.document;
var documentData = doc.documentData();
var assets = documentData.assets();
var layers = context.selection;

var getColorHex = function getColorHex(layer) {
  return "#" + String(layer.style().fills().firstObject().color().immutableModelObject().hexValue().toString());
};

var getColorRgba = function getColorRgba(layer) {
  var layerColor = layer.style().fills().firstObject().color().immutableModelObject();
  var red = Math.round(layerColor.red() * 255);
  var green = Math.round(layerColor.green() * 255);
  var blue = Math.round(layerColor.blue() * 255);

  return "rgba(" + String(red) + "," + String(green) + "," + String(blue) + "," + String(layerColor.alpha()) + ")";
};

var getColorName = function getColorName(colorName) {
  return colorName.split("/")[0];
};

var getColorVariation = function getColorVariation(colorName) {
  return colorName.split("/")[1].split("-")[1];
};

var addColor = function addColor(code, name, variation) {
  if (colors[name] === undefined) colors[name] = {};
  colors[name][variation] = { value: code };
};

exports["default"] = function () {
  if (layers.length > 0) {
    var colorsDoc = [];
    // eslint-disable-next-line no-plusplus
    for (var i = 0; i < layers.length; i++) {

      var colorCode = MSColor.colorWithRed_green_blue_alpha(layers[i].style().fills().firstObject().color().red(), layers[i].style().fills().firstObject().color().green(), layers[i].style().fills().firstObject().color().blue(), layers[i].style().fills().firstObject().color().alpha());
      var colorName = getColorName(layers[i].name());
      var colorVariation = getColorVariation(layers[i].name());
      var newColor = MSColorAsset.alloc().initWithAsset_name(colorCode, colorName + colorVariation);
      colorsDoc.push(newColor);
    }
    assets.addColorAssets(colorsDoc);
    doc.inspectorController().closeAnyColorPopover();
    doc.reloadInspector();
    app.refreshCurrentDocument();

    sketch.UI.message("Selected Colors added to Document Palette");
  } else {
    sketch.UI.message("Select at least one Layer");
  }
};

function addJSON() {
  // eslint-disable-next-line no-plusplus
  for (var i = 0; i < layers.length; i++) {
    var colorCode = getColorHex(layers[i]);
    if (colorCode === "#FFFFFF") {
      colorCode = getColorRgba(layers[i]);
    };
    var colorName = getColorName(layers[i].name());
    var colorVariation = getColorVariation(layers[i].name());
    addColor(colorCode, colorName, colorVariation);
  };
  // log JSON file
  var save = NSSavePanel.savePanel();
  save.setNameFieldStringValue("palette.json");
  save.setAllowedFileTypes(["json"]);
  save.setAllowsOtherFileTypes(false);
  save.setExtensionHidden(false);
  if (save.runModal()) {
    var filePath = save.URL().path();
    var file = NSString.stringWithString(JSON.stringify(colors));

    file.writeToFile_atomically_encoding_error(filePath, true, NSUTF8StringEncoding, null);
  };
};

function resetPalette() {
  assets.setColorAssets([]);
  doc.inspectorController().closeAnyColorPopover();
  app.refreshCurrentDocument();
  sketch.UI.message("Document Colors were Emptied!");
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })
/******/ ]);
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default');
that['addJSON'] = __skpm_run.bind(this, 'addJSON');
that['resetPalette'] = __skpm_run.bind(this, 'resetPalette')
