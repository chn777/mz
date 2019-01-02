
var BoDepositPostingTypes = require('EnumType/BoDepositPostingTypes')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BillOfExchangeTransDeposit = function () {
}
SAPB1.BillOfExchangeTransDeposit.prototype = new SAPB1.ComplexType();
SAPB1.BillOfExchangeTransDeposit.prototype.constructor = SAPB1.BillOfExchangeTransDeposit;
SAPB1.BillOfExchangeTransDeposit.DepositNorm = { valueOf: function(){return 'DepositNorm';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransDeposit.PostingType = { valueOf: function(){return 'PostingType';}, Type: 'BoDepositPostingTypes', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransDeposit.BankCountry = { valueOf: function(){return 'BankCountry';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransDeposit.BankAccount = { valueOf: function(){return 'BankAccount';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransDeposit.BankDepositAccount = { valueOf: function(){return 'BankDepositAccount';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransDeposit.BankBranch = { valueOf: function(){return 'BankBranch';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransDeposit.prototype.DepositNorm = new String();
SAPB1.BillOfExchangeTransDeposit.prototype.PostingType = new String();
SAPB1.BillOfExchangeTransDeposit.prototype.BankCountry = new String();
SAPB1.BillOfExchangeTransDeposit.prototype.BankAccount = new String();
SAPB1.BillOfExchangeTransDeposit.prototype.BankDepositAccount = new String();
SAPB1.BillOfExchangeTransDeposit.prototype.BankBranch = new String();


SAPB1.BillOfExchangeTransDeposit.BoDepositPostingTypes = BoDepositPostingTypes

SAPB1.BillOfExchangeTransDeposit.create = function (rawObject) {
    var instance = new SAPB1.BillOfExchangeTransDeposit();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BillOfExchangeTransDeposit.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BillOfExchangeTransDeposit;
