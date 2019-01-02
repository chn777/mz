if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.DownPaymentTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.DownPaymentTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.DownPaymentTypeEnum.prototype.constructor = SAPB1.DownPaymentTypeEnum;
SAPB1.DownPaymentTypeEnum.dptInvoice = new SAPB1.DownPaymentTypeEnum('dptInvoice', 'dptInvoice');
SAPB1.DownPaymentTypeEnum.dptRequest = new SAPB1.DownPaymentTypeEnum('dptRequest', 'dptRequest');

module.exports = SAPB1.DownPaymentTypeEnum;
