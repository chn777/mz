if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDocumentTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDocumentTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDocumentTypes.prototype.constructor = SAPB1.BoDocumentTypes;
SAPB1.BoDocumentTypes.dDocument_Items = new SAPB1.BoDocumentTypes('dDocument_Items', 'dDocument_Items');
SAPB1.BoDocumentTypes.dDocument_Service = new SAPB1.BoDocumentTypes('dDocument_Service', 'dDocument_Service');

module.exports = SAPB1.BoDocumentTypes;
