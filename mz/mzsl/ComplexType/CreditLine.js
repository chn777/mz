
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CreditLine = function () {
}
SAPB1.CreditLine.prototype = new SAPB1.ComplexType();
SAPB1.CreditLine.prototype.constructor = SAPB1.CreditLine;
SAPB1.CreditLine.AbsId = { valueOf: function(){return 'AbsId';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditLine.CreditCard = { valueOf: function(){return 'CreditCard';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditLine.VoucherNumber = { valueOf: function(){return 'VoucherNumber';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditLine.PaymentMethodCode = { valueOf: function(){return 'PaymentMethodCode';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditLine.PayDate = { valueOf: function(){return 'PayDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditLine.Deposited = { valueOf: function(){return 'Deposited';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditLine.NumOfPayments = { valueOf: function(){return 'NumOfPayments';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditLine.Customer = { valueOf: function(){return 'Customer';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditLine.Reference = { valueOf: function(){return 'Reference';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditLine.Transferred = { valueOf: function(){return 'Transferred';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditLine.Total = { valueOf: function(){return 'Total';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditLine.CreditCurrency = { valueOf: function(){return 'CreditCurrency';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditLine.prototype.AbsId = new Number();
SAPB1.CreditLine.prototype.CreditCard = new Number();
SAPB1.CreditLine.prototype.VoucherNumber = new String();
SAPB1.CreditLine.prototype.PaymentMethodCode = new Number();
SAPB1.CreditLine.prototype.PayDate = new String();
SAPB1.CreditLine.prototype.Deposited = new String();
SAPB1.CreditLine.prototype.NumOfPayments = new Number();
SAPB1.CreditLine.prototype.Customer = new String();
SAPB1.CreditLine.prototype.Reference = new String();
SAPB1.CreditLine.prototype.Transferred = new String();
SAPB1.CreditLine.prototype.Total = new Number();
SAPB1.CreditLine.prototype.CreditCurrency = new String();


SAPB1.CreditLine.BoYesNoEnum = BoYesNoEnum

SAPB1.CreditLine.create = function (rawObject) {
    var instance = new SAPB1.CreditLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CreditLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CreditLine;
