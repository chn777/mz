
var BankStatementStatusEnum = require('EnumType/BankStatementStatusEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BankStatementParams = function () {
}
SAPB1.BankStatementParams.prototype = new SAPB1.ComplexType();
SAPB1.BankStatementParams.prototype.constructor = SAPB1.BankStatementParams;
SAPB1.BankStatementParams.InternalNumber = { valueOf: function(){return 'InternalNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementParams.BankAccountKey = { valueOf: function(){return 'BankAccountKey';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BankStatementParams.StatementNumber = { valueOf: function(){return 'StatementNumber';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementParams.StatementDate = { valueOf: function(){return 'StatementDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BankStatementParams.Status = { valueOf: function(){return 'Status';}, Type: 'BankStatementStatusEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementParams.Imported = { valueOf: function(){return 'Imported';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementParams.StartingBalanceF = { valueOf: function(){return 'StartingBalanceF';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementParams.EndingBalanceF = { valueOf: function(){return 'EndingBalanceF';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementParams.Currency = { valueOf: function(){return 'Currency';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementParams.StartingBalanceL = { valueOf: function(){return 'StartingBalanceL';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementParams.EndingBalanceL = { valueOf: function(){return 'EndingBalanceL';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatementParams.prototype.InternalNumber = new Number();
SAPB1.BankStatementParams.prototype.BankAccountKey = new Number();
SAPB1.BankStatementParams.prototype.StatementNumber = new String();
SAPB1.BankStatementParams.prototype.StatementDate = new String();
SAPB1.BankStatementParams.prototype.Status = new String();
SAPB1.BankStatementParams.prototype.Imported = new String();
SAPB1.BankStatementParams.prototype.StartingBalanceF = new Number();
SAPB1.BankStatementParams.prototype.EndingBalanceF = new Number();
SAPB1.BankStatementParams.prototype.Currency = new String();
SAPB1.BankStatementParams.prototype.StartingBalanceL = new Number();
SAPB1.BankStatementParams.prototype.EndingBalanceL = new Number();


SAPB1.BankStatementParams.BankStatementStatusEnum = BankStatementStatusEnum
SAPB1.BankStatementParams.BoYesNoEnum = BoYesNoEnum

SAPB1.BankStatementParams.create = function (rawObject) {
    var instance = new SAPB1.BankStatementParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BankStatementParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BankStatementParams;
