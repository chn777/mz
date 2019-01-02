

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ReconciliationBankStatementLine = function () {
}
SAPB1.ReconciliationBankStatementLine.prototype = new SAPB1.ComplexType();
SAPB1.ReconciliationBankStatementLine.prototype.constructor = SAPB1.ReconciliationBankStatementLine;
SAPB1.ReconciliationBankStatementLine.BankStatementAccountCode = { valueOf: function(){return 'BankStatementAccountCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReconciliationBankStatementLine.Sequence = { valueOf: function(){return 'Sequence';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReconciliationBankStatementLine.Date = { valueOf: function(){return 'Date';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReconciliationBankStatementLine.Ref1 = { valueOf: function(){return 'Ref1';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReconciliationBankStatementLine.Amount = { valueOf: function(){return 'Amount';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReconciliationBankStatementLine.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReconciliationBankStatementLine.prototype.BankStatementAccountCode = new String();
SAPB1.ReconciliationBankStatementLine.prototype.Sequence = new Number();
SAPB1.ReconciliationBankStatementLine.prototype.Date = new String();
SAPB1.ReconciliationBankStatementLine.prototype.Ref1 = new String();
SAPB1.ReconciliationBankStatementLine.prototype.Amount = new Number();
SAPB1.ReconciliationBankStatementLine.prototype.Details = new String();



SAPB1.ReconciliationBankStatementLine.create = function (rawObject) {
    var instance = new SAPB1.ReconciliationBankStatementLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ReconciliationBankStatementLine.prototype.hasOwnProperty(prop)) {
                if (instance[prop] instanceof SAPB1.Collection) {
                    var collectionInstance = instance[prop].constructor.create(rawObject[prop]);
                    instance[prop] = collectionInstance;
                } else if (instance[prop] instanceof SAPB1.ComplexType) {
                    var complexInstance = instance[prop].constructor.create(rawObject[prop]);
                    instance[prop] = complexInstance;
                }
                else {
                    instance[prop] = rawObject[prop];
                }
            }
        }
    }
    return instance;
}


module.exports = SAPB1.ReconciliationBankStatementLine;
