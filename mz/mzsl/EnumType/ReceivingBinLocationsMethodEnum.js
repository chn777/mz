if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ReceivingBinLocationsMethodEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ReceivingBinLocationsMethodEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ReceivingBinLocationsMethodEnum.prototype.constructor = SAPB1.ReceivingBinLocationsMethodEnum;
SAPB1.ReceivingBinLocationsMethodEnum.rblmAlternativeSortCodeOrder = new SAPB1.ReceivingBinLocationsMethodEnum('rblmAlternativeSortCodeOrder', 'rblmAlternativeSortCodeOrder');
SAPB1.ReceivingBinLocationsMethodEnum.rblmBinLocationCodeOrder = new SAPB1.ReceivingBinLocationsMethodEnum('rblmBinLocationCodeOrder', 'rblmBinLocationCodeOrder');

module.exports = SAPB1.ReceivingBinLocationsMethodEnum;
