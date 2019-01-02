if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoBusinessAreaEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoBusinessAreaEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoBusinessAreaEnum.prototype.constructor = SAPB1.BoBusinessAreaEnum;
SAPB1.BoBusinessAreaEnum.baSales = new SAPB1.BoBusinessAreaEnum('baSales', 'baSales');
SAPB1.BoBusinessAreaEnum.baSalesAndPurchase = new SAPB1.BoBusinessAreaEnum('baSalesAndPurchase', 'baSalesAndPurchase');
SAPB1.BoBusinessAreaEnum.baPurchase = new SAPB1.BoBusinessAreaEnum('baPurchase', 'baPurchase');

module.exports = SAPB1.BoBusinessAreaEnum;
