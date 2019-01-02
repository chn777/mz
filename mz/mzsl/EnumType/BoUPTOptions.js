if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoUPTOptions = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoUPTOptions.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoUPTOptions.prototype.constructor = SAPB1.BoUPTOptions;
SAPB1.BoUPTOptions.bou_FullNone = new SAPB1.BoUPTOptions('bou_FullNone', 'bou_FullNone');
SAPB1.BoUPTOptions.bou_FullReadNone = new SAPB1.BoUPTOptions('bou_FullReadNone', 'bou_FullReadNone');

module.exports = SAPB1.BoUPTOptions;
