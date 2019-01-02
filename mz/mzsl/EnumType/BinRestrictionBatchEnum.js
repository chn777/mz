if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BinRestrictionBatchEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BinRestrictionBatchEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BinRestrictionBatchEnum.prototype.constructor = SAPB1.BinRestrictionBatchEnum;
SAPB1.BinRestrictionBatchEnum.brbSingleBatch = new SAPB1.BinRestrictionBatchEnum('brbSingleBatch', 'brbSingleBatch');
SAPB1.BinRestrictionBatchEnum.brbNoRestrictions = new SAPB1.BinRestrictionBatchEnum('brbNoRestrictions', 'brbNoRestrictions');

module.exports = SAPB1.BinRestrictionBatchEnum;
