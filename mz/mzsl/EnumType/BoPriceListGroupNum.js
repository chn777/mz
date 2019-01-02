if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoPriceListGroupNum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoPriceListGroupNum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoPriceListGroupNum.prototype.constructor = SAPB1.BoPriceListGroupNum;
SAPB1.BoPriceListGroupNum.boplgn_Group4 = new SAPB1.BoPriceListGroupNum('boplgn_Group4', 'boplgn_Group4');
SAPB1.BoPriceListGroupNum.boplgn_Group1 = new SAPB1.BoPriceListGroupNum('boplgn_Group1', 'boplgn_Group1');
SAPB1.BoPriceListGroupNum.boplgn_Group3 = new SAPB1.BoPriceListGroupNum('boplgn_Group3', 'boplgn_Group3');
SAPB1.BoPriceListGroupNum.boplgn_Group2 = new SAPB1.BoPriceListGroupNum('boplgn_Group2', 'boplgn_Group2');

module.exports = SAPB1.BoPriceListGroupNum;
