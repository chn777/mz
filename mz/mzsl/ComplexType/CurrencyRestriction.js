
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CurrencyRestriction = function () {
}
SAPB1.CurrencyRestriction.prototype = new SAPB1.ComplexType();
SAPB1.CurrencyRestriction.prototype.constructor = SAPB1.CurrencyRestriction;
SAPB1.CurrencyRestriction.PaymentMethodCode = { valueOf: function(){return 'PaymentMethodCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CurrencyRestriction.CurrencyCode = { valueOf: function(){return 'CurrencyCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CurrencyRestriction.CurrencyName = { valueOf: function(){return 'CurrencyName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CurrencyRestriction.Choose = { valueOf: function(){return 'Choose';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CurrencyRestriction.prototype.PaymentMethodCode = new String();
SAPB1.CurrencyRestriction.prototype.CurrencyCode = new String();
SAPB1.CurrencyRestriction.prototype.CurrencyName = new String();
SAPB1.CurrencyRestriction.prototype.Choose = new String();


SAPB1.CurrencyRestriction.BoYesNoEnum = BoYesNoEnum

SAPB1.CurrencyRestriction.create = function (rawObject) {
    var instance = new SAPB1.CurrencyRestriction();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CurrencyRestriction.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CurrencyRestriction;
