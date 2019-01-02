if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BoBpAccountTypes = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BoBpAccountTypes.prototype = SAPB1.EnumBase.prototype;
SAPB1.BoBpAccountTypes.prototype.constructor = SAPB1.BoBpAccountTypes;
SAPB1.BoBpAccountTypes.bpat_Payable = new SAPB1.BoBpAccountTypes('bpat_Payable', 'bpat_Payable');
SAPB1.BoBpAccountTypes.bpat_DownPayment = new SAPB1.BoBpAccountTypes('bpat_DownPayment', 'bpat_DownPayment');
SAPB1.BoBpAccountTypes.bpat_Unpaid = new SAPB1.BoBpAccountTypes('bpat_Unpaid', 'bpat_Unpaid');
SAPB1.BoBpAccountTypes.bpat_Domestic = new SAPB1.BoBpAccountTypes('bpat_Domestic', 'bpat_Domestic');
SAPB1.BoBpAccountTypes.bpat_OnCollection = new SAPB1.BoBpAccountTypes('bpat_OnCollection', 'bpat_OnCollection');
SAPB1.BoBpAccountTypes.bpat_Discounted = new SAPB1.BoBpAccountTypes('bpat_Discounted', 'bpat_Discounted');
SAPB1.BoBpAccountTypes.bpat_CashDiscountInterim = new SAPB1.BoBpAccountTypes('bpat_CashDiscountInterim', 'bpat_CashDiscountInterim');
SAPB1.BoBpAccountTypes.bpat_Receivable = new SAPB1.BoBpAccountTypes('bpat_Receivable', 'bpat_Receivable');
SAPB1.BoBpAccountTypes.bpat_Presentation = new SAPB1.BoBpAccountTypes('bpat_Presentation', 'bpat_Presentation');
SAPB1.BoBpAccountTypes.bpat_AssetsPayable = new SAPB1.BoBpAccountTypes('bpat_AssetsPayable', 'bpat_AssetsPayable');
SAPB1.BoBpAccountTypes.bpat_AssetsAccount = new SAPB1.BoBpAccountTypes('bpat_AssetsAccount', 'bpat_AssetsAccount');
SAPB1.BoBpAccountTypes.bpat_General = new SAPB1.BoBpAccountTypes('bpat_General', 'bpat_General');
SAPB1.BoBpAccountTypes.bpat_ExchangeRateInterim = new SAPB1.BoBpAccountTypes('bpat_ExchangeRateInterim', 'bpat_ExchangeRateInterim');
SAPB1.BoBpAccountTypes.bpat_OpenDebts = new SAPB1.BoBpAccountTypes('bpat_OpenDebts', 'bpat_OpenDebts');
SAPB1.BoBpAccountTypes.bpat_Foreign = new SAPB1.BoBpAccountTypes('bpat_Foreign', 'bpat_Foreign');

module.exports = SAPB1.BoBpAccountTypes;
