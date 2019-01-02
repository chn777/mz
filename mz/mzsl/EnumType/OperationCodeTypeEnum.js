if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.OperationCodeTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.OperationCodeTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.OperationCodeTypeEnum.prototype.constructor = SAPB1.OperationCodeTypeEnum;
SAPB1.OperationCodeTypeEnum.octInvoicewithSeveralVATRates = new SAPB1.OperationCodeTypeEnum('octInvoicewithSeveralVATRates', 'octInvoicewithSeveralVATRates');
SAPB1.OperationCodeTypeEnum.octServiceInvoicingbyTravelAgenciesonBehalfofThirdParties = new SAPB1.OperationCodeTypeEnum('octServiceInvoicingbyTravelAgenciesonBehalfofThirdParties', 'octServiceInvoicingbyTravelAgenciesonBehalfofThirdParties');
SAPB1.OperationCodeTypeEnum.octSubsidies = new SAPB1.OperationCodeTypeEnum('octSubsidies', 'octSubsidies');
SAPB1.OperationCodeTypeEnum.octIncomingPaymentsforIndustrialandIntellectualPropertyRights = new SAPB1.OperationCodeTypeEnum('octIncomingPaymentsforIndustrialandIntellectualPropertyRights', 'octIncomingPaymentsforIndustrialandIntellectualPropertyRights');
SAPB1.OperationCodeTypeEnum.octPurchasesfromTravelAgencies = new SAPB1.OperationCodeTypeEnum('octPurchasesfromTravelAgencies', 'octPurchasesfromTravelAgencies');
SAPB1.OperationCodeTypeEnum.octSummaryReceiptsEntry = new SAPB1.OperationCodeTypeEnum('octSummaryReceiptsEntry', 'octSummaryReceiptsEntry');
SAPB1.OperationCodeTypeEnum.octSummaryInvoicesEntry = new SAPB1.OperationCodeTypeEnum('octSummaryInvoicesEntry', 'octSummaryInvoicesEntry');
SAPB1.OperationCodeTypeEnum.octIdentificationofErrorTransactions = new SAPB1.OperationCodeTypeEnum('octIdentificationofErrorTransactions', 'octIdentificationofErrorTransactions');
SAPB1.OperationCodeTypeEnum.octSpecialRegulationforVATGroup = new SAPB1.OperationCodeTypeEnum('octSpecialRegulationforVATGroup', 'octSpecialRegulationforVATGroup');
SAPB1.OperationCodeTypeEnum.octBusinessOfficeRental = new SAPB1.OperationCodeTypeEnum('octBusinessOfficeRental', 'octBusinessOfficeRental');
SAPB1.OperationCodeTypeEnum.octInsuranceTransactions = new SAPB1.OperationCodeTypeEnum('octInsuranceTransactions', 'octInsuranceTransactions');
SAPB1.OperationCodeTypeEnum.octExpensesIncurredbyTravelAgentforCustomers = new SAPB1.OperationCodeTypeEnum('octExpensesIncurredbyTravelAgentforCustomers', 'octExpensesIncurredbyTravelAgentforCustomers');
SAPB1.OperationCodeTypeEnum.octUnsummarizedReceipts = new SAPB1.OperationCodeTypeEnum('octUnsummarizedReceipts', 'octUnsummarizedReceipts');
SAPB1.OperationCodeTypeEnum.octCorrectionInvoice = new SAPB1.OperationCodeTypeEnum('octCorrectionInvoice', 'octCorrectionInvoice');
SAPB1.OperationCodeTypeEnum.octSpecialRegulationforGoldInvestment = new SAPB1.OperationCodeTypeEnum('octSpecialRegulationforGoldInvestment', 'octSpecialRegulationforGoldInvestment');
SAPB1.OperationCodeTypeEnum.octTransactionswithEntrepreneursIssuingReceiptsforAgriculturalCompensation = new SAPB1.OperationCodeTypeEnum('octTransactionswithEntrepreneursIssuingReceiptsforAgriculturalCompensation', 'octTransactionswithEntrepreneursIssuingReceiptsforAgriculturalCompensation');
SAPB1.OperationCodeTypeEnum.octTransactionsSubjecttoProductionServiceandImportTaxesinCeutaandMelilla = new SAPB1.OperationCodeTypeEnum('octTransactionsSubjecttoProductionServiceandImportTaxesinCeutaandMelilla', 'octTransactionsSubjecttoProductionServiceandImportTaxesinCeutaandMelilla');
SAPB1.OperationCodeTypeEnum.octReverseChargeProcedure = new SAPB1.OperationCodeTypeEnum('octReverseChargeProcedure', 'octReverseChargeProcedure');
SAPB1.OperationCodeTypeEnum.octDueVATPendingInvoiceIssuance = new SAPB1.OperationCodeTypeEnum('octDueVATPendingInvoiceIssuance', 'octDueVATPendingInvoiceIssuance');

module.exports = SAPB1.OperationCodeTypeEnum;
