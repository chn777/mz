if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.GSTTransactionTypeEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.GSTTransactionTypeEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.GSTTransactionTypeEnum.prototype.constructor = SAPB1.GSTTransactionTypeEnum;
SAPB1.GSTTransactionTypeEnum.gsttrantyp_GSTTaxInvoice = new SAPB1.GSTTransactionTypeEnum('gsttrantyp_GSTTaxInvoice', 'gsttrantyp_GSTTaxInvoice');
SAPB1.GSTTransactionTypeEnum.gsttrantyp_GSTDebitMemo = new SAPB1.GSTTransactionTypeEnum('gsttrantyp_GSTDebitMemo', 'gsttrantyp_GSTDebitMemo');
SAPB1.GSTTransactionTypeEnum.gsttrantyp_BillOfSupply = new SAPB1.GSTTransactionTypeEnum('gsttrantyp_BillOfSupply', 'gsttrantyp_BillOfSupply');

module.exports = SAPB1.GSTTransactionTypeEnum;
