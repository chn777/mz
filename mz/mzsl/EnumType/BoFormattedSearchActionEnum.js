if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoFormattedSearchActionEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoFormattedSearchActionEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoFormattedSearchActionEnum.prototype.constructor = SAPB1.BoFormattedSearchActionEnum;
SAPB1.BoFormattedSearchActionEnum.bofsaQuery = new SAPB1.BoFormattedSearchActionEnum('bofsaQuery', 'bofsaQuery');
SAPB1.BoFormattedSearchActionEnum.bofsaNone = new SAPB1.BoFormattedSearchActionEnum('bofsaNone', 'bofsaNone');
SAPB1.BoFormattedSearchActionEnum.bofsaValidValues = new SAPB1.BoFormattedSearchActionEnum('bofsaValidValues', 'bofsaValidValues');

module.exports = SAPB1.BoFormattedSearchActionEnum;
