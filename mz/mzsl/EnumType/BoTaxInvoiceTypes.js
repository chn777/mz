if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoTaxInvoiceTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoTaxInvoiceTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoTaxInvoiceTypes.prototype.constructor = SAPB1.BoTaxInvoiceTypes;
SAPB1.BoTaxInvoiceTypes.botit_Invoice = new SAPB1.BoTaxInvoiceTypes('botit_Invoice', 'botit_Invoice');
SAPB1.BoTaxInvoiceTypes.botit_JournalEntry = new SAPB1.BoTaxInvoiceTypes('botit_JournalEntry', 'botit_JournalEntry');
SAPB1.BoTaxInvoiceTypes.botit_AlterationCorrectionInvoice = new SAPB1.BoTaxInvoiceTypes('botit_AlterationCorrectionInvoice', 'botit_AlterationCorrectionInvoice');
SAPB1.BoTaxInvoiceTypes.botit_CorrectionInvoice = new SAPB1.BoTaxInvoiceTypes('botit_CorrectionInvoice', 'botit_CorrectionInvoice');
SAPB1.BoTaxInvoiceTypes.botit_AlterationInvoice = new SAPB1.BoTaxInvoiceTypes('botit_AlterationInvoice', 'botit_AlterationInvoice');
SAPB1.BoTaxInvoiceTypes.botit_Payment = new SAPB1.BoTaxInvoiceTypes('botit_Payment', 'botit_Payment');

module.exports = SAPB1.BoTaxInvoiceTypes;
