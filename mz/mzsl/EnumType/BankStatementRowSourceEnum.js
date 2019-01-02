if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.BankStatementRowSourceEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.BankStatementRowSourceEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.BankStatementRowSourceEnum.prototype.constructor = SAPB1.BankStatementRowSourceEnum;
SAPB1.BankStatementRowSourceEnum.bsImportedAndAmended = new SAPB1.BankStatementRowSourceEnum('bsImportedAndAmended', 'bsImportedAndAmended');
SAPB1.BankStatementRowSourceEnum.bsManuallyEntered = new SAPB1.BankStatementRowSourceEnum('bsManuallyEntered', 'bsManuallyEntered');
SAPB1.BankStatementRowSourceEnum.bsImported = new SAPB1.BankStatementRowSourceEnum('bsImported', 'bsImported');

module.exports = SAPB1.BankStatementRowSourceEnum;
