var that=this;function __skpm_run(e,t){that.context=t;var r=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.addJSON=function(){for(var e=0;e<u.length;e++){var t=c(u[e]);"#FFFFFF"===t&&(t=f(u[e]));var r=d(u[e].name()),n=p(u[e].name());h(t,r,n)}var o=NSSavePanel.savePanel();if(o.setNameFieldStringValue("palette.json"),o.setAllowedFileTypes(["json"]),o.setAllowsOtherFileTypes(!1),o.setExtensionHidden(!1),o.runModal()){var l=o.URL().path(),s=NSString.stringWithString(JSON.stringify([]));s.writeToFile_atomically_encoding_error(l,!0,NSUTF8StringEncoding,null)}},r.resetPalette=function(){a.setColorAssets([]),i.inspectorController().closeAnyColorPopover(),s.refreshCurrentDocument(),o.UI.message("Document Colors were Emptied!")};var o=n(1),l={},s=NSApp.delegate(),i=t.document,a=i.documentData().assets(),u=t.selection,c=function(e){return"#"+String(e.style().fills().firstObject().color().immutableModelObject().hexValue().toString())},f=function(e){var t=e.style().fills().firstObject().color().immutableModelObject(),r=Math.round(255*t.red()),n=Math.round(255*t.green()),o=Math.round(255*t.blue());return"rgba("+String(r)+","+String(n)+","+String(o)+","+String(t.alpha())+")"},d=function(e){return e.split("/")[0]},p=function(e){return e.split("/")[1].split("-")[1]},h=function(e,t,r){void 0===l[t]&&(l[t]={}),l[t][r]={value:e}};r.default=function(e){if(u.length>0){for(var t=[],r=0;r<u.length;r++){var n=MSColor.colorWithRed_green_blue_alpha(u[r].style().fills().firstObject().color().red(),u[r].style().fills().firstObject().color().green(),u[r].style().fills().firstObject().color().blue(),u[r].style().fills().firstObject().color().alpha()),l=d(u[r].name()),c=p(u[r].name()),f=MSColorAsset.alloc().initWithAsset_name(n,l+c);t.push(f)}a.addColorAssets(t),i.inspectorController().closeAnyColorPopover(),i.reloadInspector(),s.refreshCurrentDocument(),o.UI.message("Selected Colors added to Document Palette")}else o.UI.message("Select at least one Layer")}},function(e,t){e.exports=require("sketch")}]);"default"===e&&"function"==typeof r?r(t):r[e](t)}that.onRun=__skpm_run.bind(this,"default"),that.addJSON=__skpm_run.bind(this,"addJSON"),that.resetPalette=__skpm_run.bind(this,"resetPalette");