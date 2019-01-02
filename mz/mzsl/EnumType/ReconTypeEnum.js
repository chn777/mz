if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.ReconTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.ReconTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.ReconTypeEnum.prototype.constructor = SAPB1.ReconTypeEnum;
SAPB1.ReconTypeEnum.rtManual = new SAPB1.ReconTypeEnum('rtManual', 'rtManual');
SAPB1.ReconTypeEnum.rtWIP = new SAPB1.ReconTypeEnum('rtWIP', 'rtWIP');
SAPB1.ReconTypeEnum.rtInventoryOrExpenseAllocation = new SAPB1.ReconTypeEnum('rtInventoryOrExpenseAllocation', 'rtInventoryOrExpenseAllocation');
SAPB1.ReconTypeEnum.rtSemiAutomatic = new SAPB1.ReconTypeEnum('rtSemiAutomatic', 'rtSemiAutomatic');
SAPB1.ReconTypeEnum.rtCorrectionInvoice = new SAPB1.ReconTypeEnum('rtCorrectionInvoice', 'rtCorrectionInvoice');
SAPB1.ReconTypeEnum.rtBankStatementProcess = new SAPB1.ReconTypeEnum('rtBankStatementProcess', 'rtBankStatementProcess');
SAPB1.ReconTypeEnum.rtPeriodClosing = new SAPB1.ReconTypeEnum('rtPeriodClosing', 'rtPeriodClosing');
SAPB1.ReconTypeEnum.rtBoE = new SAPB1.ReconTypeEnum('rtBoE', 'rtBoE');
SAPB1.ReconTypeEnum.rtPayment = new SAPB1.ReconTypeEnum('rtPayment', 'rtPayment');
SAPB1.ReconTypeEnum.rtDeferredTaxInterimAccount = new SAPB1.ReconTypeEnum('rtDeferredTaxInterimAccount', 'rtDeferredTaxInterimAccount');
SAPB1.ReconTypeEnum.rtInterimDocument = new SAPB1.ReconTypeEnum('rtInterimDocument', 'rtInterimDocument');
SAPB1.ReconTypeEnum.rtZeroValue = new SAPB1.ReconTypeEnum('rtZeroValue', 'rtZeroValue');
SAPB1.ReconTypeEnum.rtAutomatic = new SAPB1.ReconTypeEnum('rtAutomatic', 'rtAutomatic');
SAPB1.ReconTypeEnum.rtDownPaymentAllocation = new SAPB1.ReconTypeEnum('rtDownPaymentAllocation', 'rtDownPaymentAllocation');
SAPB1.ReconTypeEnum.rtCancellation = new SAPB1.ReconTypeEnum('rtCancellation', 'rtCancellation');
SAPB1.ReconTypeEnum.rtAutoConversionDifference = new SAPB1.ReconTypeEnum('rtAutoConversionDifference', 'rtAutoConversionDifference');
SAPB1.ReconTypeEnum.rtCreditMemo = new SAPB1.ReconTypeEnum('rtCreditMemo', 'rtCreditMemo');
SAPB1.ReconTypeEnum.rtReversal = new SAPB1.ReconTypeEnum('rtReversal', 'rtReversal');
SAPB1.ReconTypeEnum.rtDeposit = new SAPB1.ReconTypeEnum('rtDeposit', 'rtDeposit');

module.exports = SAPB1.ReconTypeEnum;
