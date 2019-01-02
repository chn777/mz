

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.GLAccount = function () {
}
SAPB1.GLAccount.prototype = new SAPB1.ComplexType();
SAPB1.GLAccount.prototype.constructor = SAPB1.GLAccount;
SAPB1.GLAccount.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccount.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccount.Debit = { valueOf: function(){return 'Debit';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccount.Credit = { valueOf: function(){return 'Credit';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccount.SystemDebit = { valueOf: function(){return 'SystemDebit';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccount.SystemCredit = { valueOf: function(){return 'SystemCredit';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccount.ForeignDebit = { valueOf: function(){return 'ForeignDebit';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccount.ForeignCredit = { valueOf: function(){return 'ForeignCredit';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccount.ForeignCurrency = { valueOf: function(){return 'ForeignCurrency';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccount.prototype.Code = new String();
SAPB1.GLAccount.prototype.DueDate = new String();
SAPB1.GLAccount.prototype.Debit = new Number();
SAPB1.GLAccount.prototype.Credit = new Number();
SAPB1.GLAccount.prototype.SystemDebit = new Number();
SAPB1.GLAccount.prototype.SystemCredit = new Number();
SAPB1.GLAccount.prototype.ForeignDebit = new Number();
SAPB1.GLAccount.prototype.ForeignCredit = new Number();
SAPB1.GLAccount.prototype.ForeignCurrency = new String();



SAPB1.GLAccount.create = function (rawObject) {
    var instance = new SAPB1.GLAccount();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.GLAccount.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.GLAccount;
