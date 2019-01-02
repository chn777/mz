if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.TaxRateDeterminationEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.TaxRateDeterminationEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.TaxRateDeterminationEnum.prototype.constructor = SAPB1.TaxRateDeterminationEnum;
SAPB1.TaxRateDeterminationEnum.trd_DocumentDate = new SAPB1.TaxRateDeterminationEnum('trd_DocumentDate', 'trd_DocumentDate');
SAPB1.TaxRateDeterminationEnum.trd_PostingDate = new SAPB1.TaxRateDeterminationEnum('trd_PostingDate', 'trd_PostingDate');

module.exports = SAPB1.TaxRateDeterminationEnum;
