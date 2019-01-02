
var BoDepositCheckEnum = require('EnumType/BoDepositCheckEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CheckLine = function () {
}
SAPB1.CheckLine.prototype = new SAPB1.ComplexType();
SAPB1.CheckLine.prototype.constructor = SAPB1.CheckLine;
SAPB1.CheckLine.CheckKey = { valueOf: function(){return 'CheckKey';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckLine.CheckNumber = { valueOf: function(){return 'CheckNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckLine.Bank = { valueOf: function(){return 'Bank';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckLine.Branch = { valueOf: function(){return 'Branch';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckLine.CashCheck = { valueOf: function(){return 'CashCheck';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckLine.CheckDate = { valueOf: function(){return 'CheckDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckLine.Customer = { valueOf: function(){return 'Customer';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckLine.CheckAmount = { valueOf: function(){return 'CheckAmount';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckLine.Deposited = { valueOf: function(){return 'Deposited';}, Type: 'BoDepositCheckEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckLine.Transferred = { valueOf: function(){return 'Transferred';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckLine.AccountNumber = { valueOf: function(){return 'AccountNumber';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckLine.CheckCurrency = { valueOf: function(){return 'CheckCurrency';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckLine.prototype.CheckKey = new Number();
SAPB1.CheckLine.prototype.CheckNumber = new Number();
SAPB1.CheckLine.prototype.Bank = new String();
SAPB1.CheckLine.prototype.Branch = new String();
SAPB1.CheckLine.prototype.CashCheck = new String();
SAPB1.CheckLine.prototype.CheckDate = new String();
SAPB1.CheckLine.prototype.Customer = new String();
SAPB1.CheckLine.prototype.CheckAmount = new Number();
SAPB1.CheckLine.prototype.Deposited = new String();
SAPB1.CheckLine.prototype.Transferred = new String();
SAPB1.CheckLine.prototype.AccountNumber = new String();
SAPB1.CheckLine.prototype.CheckCurrency = new String();


SAPB1.CheckLine.BoDepositCheckEnum = BoDepositCheckEnum
SAPB1.CheckLine.BoYesNoEnum = BoYesNoEnum

SAPB1.CheckLine.create = function (rawObject) {
    var instance = new SAPB1.CheckLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CheckLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CheckLine;
