if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDueDateEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDueDateEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDueDateEnum.prototype.constructor = SAPB1.BoDueDateEnum;
SAPB1.BoDueDateEnum.boddDateOfPaymentRun = new SAPB1.BoDueDateEnum('boddDateOfPaymentRun', 'boddDateOfPaymentRun');
SAPB1.BoDueDateEnum.boddPaymentTerms = new SAPB1.BoDueDateEnum('boddPaymentTerms', 'boddPaymentTerms');
SAPB1.BoDueDateEnum.boddDueDateOfInvoice = new SAPB1.BoDueDateEnum('boddDueDateOfInvoice', 'boddDueDateOfInvoice');

module.exports = SAPB1.BoDueDateEnum;
