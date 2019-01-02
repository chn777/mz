if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.AutomaticPostingEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.AutomaticPostingEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.AutomaticPostingEnum.prototype.constructor = SAPB1.AutomaticPostingEnum;
SAPB1.AutomaticPostingEnum.apInterestOnly = new SAPB1.AutomaticPostingEnum('apInterestOnly', 'apInterestOnly');
SAPB1.AutomaticPostingEnum.apInterestAndFee = new SAPB1.AutomaticPostingEnum('apInterestAndFee', 'apInterestAndFee');
SAPB1.AutomaticPostingEnum.apFeeOnly = new SAPB1.AutomaticPostingEnum('apFeeOnly', 'apFeeOnly');
SAPB1.AutomaticPostingEnum.apNo = new SAPB1.AutomaticPostingEnum('apNo', 'apNo');

module.exports = SAPB1.AutomaticPostingEnum;
