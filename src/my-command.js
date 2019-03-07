/* eslint-disable no-undef */
// eslint-disable-next-line import/no-unresolved
const sketch = require('sketch');

const colors = {};
// eslint-disable-next-line no-undef
const app = NSApp.delegate();
const doc = context.document;
const documentData = doc.documentData();
const assets = documentData.assets();
const layers = context.selection;

const getColorHex = layer => `#${layer
    .style()
    .fills()
    .firstObject()
    .color()
    .immutableModelObject()
    .hexValue()
    .toString()}`;

const getColorRgba = layer => {
  const layerColor = layer.style().fills().firstObject().color().immutableModelObject();
  const red = Math.round(layerColor.red() * 255);
  const green = Math.round(layerColor.green() * 255);
  const blue = Math.round(layerColor.blue() * 255);

  return `rgba(${red},${green},${blue},${layerColor.alpha()})`;
};

const getColorName = colorName => colorName.split("/")[0];

const getColorVariation = colorName => colorName.split("/")[1].split("-")[1];

const addColor = (code, name, variation) => {
  if (colors[name] === undefined) colors[name] = {};
  colors[name][variation] = { value: code };
};



export default () => {
  if (layers.length > 0) {
    const colorsDoc = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < layers.length; i++) {

      const colorCode = MSColor.colorWithRed_green_blue_alpha(
        layers[i].style().fills().firstObject().color().red(),
        layers[i].style().fills().firstObject().color().green(),
        layers[i].style().fills().firstObject().color().blue(),
        layers[i].style().fills().firstObject().color().alpha()
      );
      const colorName = getColorName(layers[i].name());
      const colorVariation = getColorVariation(layers[i].name());
      const newColor = MSColorAsset.alloc().initWithAsset_name(colorCode, colorName + colorVariation);
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

export function addJSON() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < layers.length; i++) {
    let colorCode = getColorHex(layers[i]);
    if (colorCode === "#FFFFFF") {
      colorCode = getColorRgba(layers[i]);
    };
    const colorName = getColorName(layers[i].name());
    const colorVariation = getColorVariation(layers[i].name());
    addColor(colorCode, colorName, colorVariation);
  };
  // log JSON file
  const save = NSSavePanel.savePanel();
  save.setNameFieldStringValue("palette.json");
  save.setAllowedFileTypes(["json"]);
  save.setAllowsOtherFileTypes(false);
  save.setExtensionHidden(false);
  if (save.runModal()) {
    const filePath = save.URL().path();
    const file = NSString.stringWithString(JSON.stringify(colors));

    file.writeToFile_atomically_encoding_error(filePath, true, NSUTF8StringEncoding, null);
  };

};

export function resetPalette() {
  assets.setColorAssets([]);
  doc.inspectorController().closeAnyColorPopover();
  app.refreshCurrentDocument();
  sketch.UI.message("Document Colors were Emptied!");
}
