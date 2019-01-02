if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoDeductionTaxGroupCodeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoDeductionTaxGroupCodeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoDeductionTaxGroupCodeEnum.prototype.constructor = SAPB1.BoDeductionTaxGroupCodeEnum;
SAPB1.BoDeductionTaxGroupCodeEnum.dtgcPaidServices = new SAPB1.BoDeductionTaxGroupCodeEnum('dtgcPaidServices', 'dtgcPaidServices');
SAPB1.BoDeductionTaxGroupCodeEnum.dtgcInterestReceivers = new SAPB1.BoDeductionTaxGroupCodeEnum('dtgcInterestReceivers', 'dtgcInterestReceivers');
SAPB1.BoDeductionTaxGroupCodeEnum.dtgcRentalPayments = new SAPB1.BoDeductionTaxGroupCodeEnum('dtgcRentalPayments', 'dtgcRentalPayments');
SAPB1.BoDeductionTaxGroupCodeEnum.dtgcPaymentsToForeignCitizens = new SAPB1.BoDeductionTaxGroupCodeEnum('dtgcPaymentsToForeignCitizens', 'dtgcPaymentsToForeignCitizens');
SAPB1.BoDeductionTaxGroupCodeEnum.dtgcPaymentsForCitizensInForeignCountries = new SAPB1.BoDeductionTaxGroupCodeEnum('dtgcPaymentsForCitizensInForeignCountries', 'dtgcPaymentsForCitizensInForeignCountries');
SAPB1.BoDeductionTaxGroupCodeEnum.dtgcPaymentsFromStudyFund = new SAPB1.BoDeductionTaxGroupCodeEnum('dtgcPaymentsFromStudyFund', 'dtgcPaymentsFromStudyFund');
SAPB1.BoDeductionTaxGroupCodeEnum.dtgcDividendPayments = new SAPB1.BoDeductionTaxGroupCodeEnum('dtgcDividendPayments', 'dtgcDividendPayments');
SAPB1.BoDeductionTaxGroupCodeEnum.dtgcWritersPrice = new SAPB1.BoDeductionTaxGroupCodeEnum('dtgcWritersPrice', 'dtgcWritersPrice');
SAPB1.BoDeductionTaxGroupCodeEnum.dtgcRepaymentToEmployerFromCompensationFund = new SAPB1.BoDeductionTaxGroupCodeEnum('dtgcRepaymentToEmployerFromCompensationFund', 'dtgcRepaymentToEmployerFromCompensationFund');
SAPB1.BoDeductionTaxGroupCodeEnum.dtgcInvalidPaymentFromCompensationFund = new SAPB1.BoDeductionTaxGroupCodeEnum('dtgcInvalidPaymentFromCompensationFund', 'dtgcInvalidPaymentFromCompensationFund');
SAPB1.BoDeductionTaxGroupCodeEnum.dtgcEmployeeReceivingCommission = new SAPB1.BoDeductionTaxGroupCodeEnum('dtgcEmployeeReceivingCommission', 'dtgcEmployeeReceivingCommission');

module.exports = SAPB1.BoDeductionTaxGroupCodeEnum;
