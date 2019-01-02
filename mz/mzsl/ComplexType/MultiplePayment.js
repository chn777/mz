
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MultiplePayment = function () {
}
SAPB1.MultiplePayment.prototype = new SAPB1.ComplexType();
SAPB1.MultiplePayment.prototype.constructor = SAPB1.MultiplePayment;
SAPB1.MultiplePayment.BankStatmentLineID = { valueOf: function(){return 'BankStatmentLineID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MultiplePayment.ListLineID = { valueOf: function(){return 'ListLineID';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MultiplePayment.DocumentIdentifier = { valueOf: function(){return 'DocumentIdentifier';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MultiplePayment.AmountLC = { valueOf: function(){return 'AmountLC';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MultiplePayment.AmountFC = { valueOf: function(){return 'AmountFC';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MultiplePayment.IsDebit = { valueOf: function(){return 'IsDebit';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MultiplePayment.prototype.BankStatmentLineID = new Number();
SAPB1.MultiplePayment.prototype.ListLineID = new Number();
SAPB1.MultiplePayment.prototype.DocumentIdentifier = new String();
SAPB1.MultiplePayment.prototype.AmountLC = new Number();
SAPB1.MultiplePayment.prototype.AmountFC = new Number();
SAPB1.MultiplePayment.prototype.IsDebit = new String();


SAPB1.MultiplePayment.BoYesNoEnum = BoYesNoEnum

SAPB1.MultiplePayment.create = function (rawObject) {
    var instance = new SAPB1.MultiplePayment();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MultiplePayment.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MultiplePayment;
