if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.PaymentRunExportRowTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.PaymentRunExportRowTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.PaymentRunExportRowTypeEnum.prototype.constructor = SAPB1.PaymentRunExportRowTypeEnum;
SAPB1.PaymentRunExportRowTypeEnum.prtGeneral = new SAPB1.PaymentRunExportRowTypeEnum('prtGeneral', 'prtGeneral');
SAPB1.PaymentRunExportRowTypeEnum.prtPayOnAccount = new SAPB1.PaymentRunExportRowTypeEnum('prtPayOnAccount', 'prtPayOnAccount');
SAPB1.PaymentRunExportRowTypeEnum.prtPayToAccount = new SAPB1.PaymentRunExportRowTypeEnum('prtPayToAccount', 'prtPayToAccount');

module.exports = SAPB1.PaymentRunExportRowTypeEnum;
