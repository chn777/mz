
var ContractSequenceEnum = require('EnumType/ContractSequenceEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmployeeSavingsPaymentInfo = function () {
}
SAPB1.EmployeeSavingsPaymentInfo.prototype = new SAPB1.ComplexType();
SAPB1.EmployeeSavingsPaymentInfo.prototype.constructor = SAPB1.EmployeeSavingsPaymentInfo;
SAPB1.EmployeeSavingsPaymentInfo.EmployeeID = { valueOf: function(){return 'EmployeeID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeSavingsPaymentInfo.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeSavingsPaymentInfo.ContractName = { valueOf: function(){return 'ContractName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeSavingsPaymentInfo.PaymentNotes = { valueOf: function(){return 'PaymentNotes';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeSavingsPaymentInfo.AN = { valueOf: function(){return 'AN';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeSavingsPaymentInfo.ANcurrency = { valueOf: function(){return 'ANcurrency';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeSavingsPaymentInfo.AG = { valueOf: function(){return 'AG';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeSavingsPaymentInfo.AGcurrency = { valueOf: function(){return 'AGcurrency';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeSavingsPaymentInfo.BankName = { valueOf: function(){return 'BankName';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeSavingsPaymentInfo.BankCode = { valueOf: function(){return 'BankCode';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeSavingsPaymentInfo.BankAccount = { valueOf: function(){return 'BankAccount';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeSavingsPaymentInfo.Sequence = { valueOf: function(){return 'Sequence';}, Type: 'ContractSequenceEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeSavingsPaymentInfo.prototype.EmployeeID = new Number();
SAPB1.EmployeeSavingsPaymentInfo.prototype.LineNum = new Number();
SAPB1.EmployeeSavingsPaymentInfo.prototype.ContractName = new String();
SAPB1.EmployeeSavingsPaymentInfo.prototype.PaymentNotes = new String();
SAPB1.EmployeeSavingsPaymentInfo.prototype.AN = new Number();
SAPB1.EmployeeSavingsPaymentInfo.prototype.ANcurrency = new String();
SAPB1.EmployeeSavingsPaymentInfo.prototype.AG = new Number();
SAPB1.EmployeeSavingsPaymentInfo.prototype.AGcurrency = new String();
SAPB1.EmployeeSavingsPaymentInfo.prototype.BankName = new String();
SAPB1.EmployeeSavingsPaymentInfo.prototype.BankCode = new String();
SAPB1.EmployeeSavingsPaymentInfo.prototype.BankAccount = new String();
SAPB1.EmployeeSavingsPaymentInfo.prototype.Sequence = new String();


SAPB1.EmployeeSavingsPaymentInfo.ContractSequenceEnum = ContractSequenceEnum

SAPB1.EmployeeSavingsPaymentInfo.create = function (rawObject) {
    var instance = new SAPB1.EmployeeSavingsPaymentInfo();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmployeeSavingsPaymentInfo.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmployeeSavingsPaymentInfo;
