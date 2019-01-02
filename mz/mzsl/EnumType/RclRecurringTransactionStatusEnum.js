if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.RclRecurringTransactionStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.RclRecurringTransactionStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.RclRecurringTransactionStatusEnum.prototype.constructor = SAPB1.RclRecurringTransactionStatusEnum;
SAPB1.RclRecurringTransactionStatusEnum.rtsRemoved = new SAPB1.RclRecurringTransactionStatusEnum('rtsRemoved', 'rtsRemoved');
SAPB1.RclRecurringTransactionStatusEnum.rtsNotExecuted = new SAPB1.RclRecurringTransactionStatusEnum('rtsNotExecuted', 'rtsNotExecuted');
SAPB1.RclRecurringTransactionStatusEnum.rtsExecuted = new SAPB1.RclRecurringTransactionStatusEnum('rtsExecuted', 'rtsExecuted');

module.exports = SAPB1.RclRecurringTransactionStatusEnum;
