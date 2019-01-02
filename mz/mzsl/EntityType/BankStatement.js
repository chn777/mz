var BankStatementRow = require('ComplexType/BankStatementRow')
var BankStatementRowCollection = require('ComplexType/BankStatementRowCollection')

var BankStatementStatusEnum = require('EnumType/BankStatementStatusEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BankStatement = function () {
}
SAPB1.BankStatement.prototype = new SAPB1.EntityType();
SAPB1.BankStatement.prototype.constructor = SAPB1.BankStatement;
SAPB1.BankStatement.prototype.keys.push('InternalNumber');
SAPB1.BankStatement.InternalNumber = { valueOf: function(){return 'InternalNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BankStatement.BankAccountKey = { valueOf: function(){return 'BankAccountKey';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BankStatement.StatementNumber = { valueOf: function(){return 'StatementNumber';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatement.StatementDate = { valueOf: function(){return 'StatementDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BankStatement.Status = { valueOf: function(){return 'Status';}, Type: 'BankStatementStatusEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatement.Imported = { valueOf: function(){return 'Imported';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatement.StartingBalanceF = { valueOf: function(){return 'StartingBalanceF';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatement.EndingBalanceF = { valueOf: function(){return 'EndingBalanceF';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatement.Currency = { valueOf: function(){return 'Currency';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatement.StartingBalanceL = { valueOf: function(){return 'StartingBalanceL';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatement.EndingBalanceL = { valueOf: function(){return 'EndingBalanceL';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatement.BankStatementFileHash = { valueOf: function(){return 'BankStatementFileHash';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatement.BankStatementGUID = { valueOf: function(){return 'BankStatementGUID';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankStatement.BankStatementRows = { valueOf: function(){return 'BankStatementRows';}, Type: 'BankStatementRow', Index: 13, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.BankStatement.prototype.InternalNumber = new Number();
SAPB1.BankStatement.prototype.BankAccountKey = new Number();
SAPB1.BankStatement.prototype.StatementNumber = new String();
SAPB1.BankStatement.prototype.StatementDate = new String();
SAPB1.BankStatement.prototype.Status = new String();
SAPB1.BankStatement.prototype.Imported = new String();
SAPB1.BankStatement.prototype.StartingBalanceF = new Number();
SAPB1.BankStatement.prototype.EndingBalanceF = new Number();
SAPB1.BankStatement.prototype.Currency = new String();
SAPB1.BankStatement.prototype.StartingBalanceL = new Number();
SAPB1.BankStatement.prototype.EndingBalanceL = new Number();
SAPB1.BankStatement.prototype.BankStatementFileHash = new String();
SAPB1.BankStatement.prototype.BankStatementGUID = new String();
SAPB1.BankStatement.prototype.BankStatementRows = new BankStatementRowCollection();

SAPB1.BankStatement.BankStatementRow = BankStatementRow
SAPB1.BankStatement.BankStatementRowCollection = BankStatementRowCollection

SAPB1.BankStatement.BankStatementStatusEnum = BankStatementStatusEnum
SAPB1.BankStatement.BoYesNoEnum = BoYesNoEnum

SAPB1.BankStatement.create = function (rawObject) {
    var instance = new SAPB1.BankStatement();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BankStatement.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BankStatement;
