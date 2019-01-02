if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.RclRecurringExecutionHandlingEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.RclRecurringExecutionHandlingEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.RclRecurringExecutionHandlingEnum.prototype.constructor = SAPB1.RclRecurringExecutionHandlingEnum;
SAPB1.RclRecurringExecutionHandlingEnum.rehStopOnError = new SAPB1.RclRecurringExecutionHandlingEnum('rehStopOnError', 'rehStopOnError');
SAPB1.RclRecurringExecutionHandlingEnum.rehSkipTransaction = new SAPB1.RclRecurringExecutionHandlingEnum('rehSkipTransaction', 'rehSkipTransaction');

module.exports = SAPB1.RclRecurringExecutionHandlingEnum;
