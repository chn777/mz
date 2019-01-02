

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.OpenningBalanceAccount = function () {
}
SAPB1.OpenningBalanceAccount.prototype = new SAPB1.ComplexType();
SAPB1.OpenningBalanceAccount.prototype.constructor = SAPB1.OpenningBalanceAccount;
SAPB1.OpenningBalanceAccount.OpenBalanceAccount = { valueOf: function(){return 'OpenBalanceAccount';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.OpenningBalanceAccount.Date = { valueOf: function(){return 'Date';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.OpenningBalanceAccount.Ref1 = { valueOf: function(){return 'Ref1';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.OpenningBalanceAccount.Ref2 = { valueOf: function(){return 'Ref2';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.OpenningBalanceAccount.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.OpenningBalanceAccount.BPLID = { valueOf: function(){return 'BPLID';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.OpenningBalanceAccount.prototype.OpenBalanceAccount = new String();
SAPB1.OpenningBalanceAccount.prototype.Date = new String();
SAPB1.OpenningBalanceAccount.prototype.Ref1 = new String();
SAPB1.OpenningBalanceAccount.prototype.Ref2 = new String();
SAPB1.OpenningBalanceAccount.prototype.Details = new String();
SAPB1.OpenningBalanceAccount.prototype.BPLID = new Number();



SAPB1.OpenningBalanceAccount.create = function (rawObject) {
    var instance = new SAPB1.OpenningBalanceAccount();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.OpenningBalanceAccount.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.OpenningBalanceAccount;
