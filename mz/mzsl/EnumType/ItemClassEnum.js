if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ItemClassEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ItemClassEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ItemClassEnum.prototype.constructor = SAPB1.ItemClassEnum;
SAPB1.ItemClassEnum.itcMaterial = new SAPB1.ItemClassEnum('itcMaterial', 'itcMaterial');
SAPB1.ItemClassEnum.itcService = new SAPB1.ItemClassEnum('itcService', 'itcService');

module.exports = SAPB1.ItemClassEnum;
