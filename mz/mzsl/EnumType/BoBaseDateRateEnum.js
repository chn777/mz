if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoBaseDateRateEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoBaseDateRateEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoBaseDateRateEnum.prototype.constructor = SAPB1.BoBaseDateRateEnum;
SAPB1.BoBaseDateRateEnum.bdr_TaxDate = new SAPB1.BoBaseDateRateEnum('bdr_TaxDate', 'bdr_TaxDate');
SAPB1.BoBaseDateRateEnum.bdr_PostingDate = new SAPB1.BoBaseDateRateEnum('bdr_PostingDate', 'bdr_PostingDate');

module.exports = SAPB1.BoBaseDateRateEnum;
