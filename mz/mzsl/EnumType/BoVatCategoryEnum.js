if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoVatCategoryEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoVatCategoryEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoVatCategoryEnum.prototype.constructor = SAPB1.BoVatCategoryEnum;
SAPB1.BoVatCategoryEnum.bovcOutputTax = new SAPB1.BoVatCategoryEnum('bovcOutputTax', 'bovcOutputTax');
SAPB1.BoVatCategoryEnum.bovcInputTax = new SAPB1.BoVatCategoryEnum('bovcInputTax', 'bovcInputTax');

module.exports = SAPB1.BoVatCategoryEnum;
