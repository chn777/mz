if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.InstallmentPaymentsPossiblityEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.InstallmentPaymentsPossiblityEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.InstallmentPaymentsPossiblityEnum.prototype.constructor = SAPB1.InstallmentPaymentsPossiblityEnum;
SAPB1.InstallmentPaymentsPossiblityEnum.ippCr = new SAPB1.InstallmentPaymentsPossiblityEnum('ippCr', 'ippCr');
SAPB1.InstallmentPaymentsPossiblityEnum.ippYes = new SAPB1.InstallmentPaymentsPossiblityEnum('ippYes', 'ippYes');
SAPB1.InstallmentPaymentsPossiblityEnum.ippNo = new SAPB1.InstallmentPaymentsPossiblityEnum('ippNo', 'ippNo');
SAPB1.InstallmentPaymentsPossiblityEnum.ippRd = new SAPB1.InstallmentPaymentsPossiblityEnum('ippRd', 'ippRd');

module.exports = SAPB1.InstallmentPaymentsPossiblityEnum;
