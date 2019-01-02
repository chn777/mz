if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.PaymentInvoiceTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.PaymentInvoiceTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.PaymentInvoiceTypeEnum.prototype.constructor = SAPB1.PaymentInvoiceTypeEnum;
SAPB1.PaymentInvoiceTypeEnum.itARDownPaymentInvoice = new SAPB1.PaymentInvoiceTypeEnum('itARDownPaymentInvoice', 'itARDownPaymentInvoice');
SAPB1.PaymentInvoiceTypeEnum.itARInvoice = new SAPB1.PaymentInvoiceTypeEnum('itARInvoice', 'itARInvoice');

module.exports = SAPB1.PaymentInvoiceTypeEnum;
