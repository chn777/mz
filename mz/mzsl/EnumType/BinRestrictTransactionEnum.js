if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BinRestrictTransactionEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BinRestrictTransactionEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BinRestrictTransactionEnum.prototype.constructor = SAPB1.BinRestrictTransactionEnum;
SAPB1.BinRestrictTransactionEnum.brtOutboundTrans = new SAPB1.BinRestrictTransactionEnum('brtOutboundTrans', 'brtOutboundTrans');
SAPB1.BinRestrictTransactionEnum.brtNoRestrictions = new SAPB1.BinRestrictTransactionEnum('brtNoRestrictions', 'brtNoRestrictions');
SAPB1.BinRestrictTransactionEnum.brtAllTrans = new SAPB1.BinRestrictTransactionEnum('brtAllTrans', 'brtAllTrans');
SAPB1.BinRestrictTransactionEnum.brtInboundTrans = new SAPB1.BinRestrictTransactionEnum('brtInboundTrans', 'brtInboundTrans');
SAPB1.BinRestrictTransactionEnum.brtAllExceptInventoryTrans = new SAPB1.BinRestrictTransactionEnum('brtAllExceptInventoryTrans', 'brtAllExceptInventoryTrans');

module.exports = SAPB1.BinRestrictTransactionEnum;
