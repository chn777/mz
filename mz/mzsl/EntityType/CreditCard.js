

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CreditCard = function () {
}
SAPB1.CreditCard.prototype = new SAPB1.EntityType();
SAPB1.CreditCard.prototype.constructor = SAPB1.CreditCard;
SAPB1.CreditCard.prototype.keys.push('CreditCardCode');
SAPB1.CreditCard.CreditCardCode = { valueOf: function(){return 'CreditCardCode';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CreditCard.CreditCardName = { valueOf: function(){return 'CreditCardName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CreditCard.GLAccount = { valueOf: function(){return 'GLAccount';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCard.Telephone = { valueOf: function(){return 'Telephone';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCard.CompanyID = { valueOf: function(){return 'CompanyID';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCard.CountryCode = { valueOf: function(){return 'CountryCode';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CreditCard.prototype.CreditCardCode = new Number();
SAPB1.CreditCard.prototype.CreditCardName = new String();
SAPB1.CreditCard.prototype.GLAccount = new String();
SAPB1.CreditCard.prototype.Telephone = new String();
SAPB1.CreditCard.prototype.CompanyID = new String();
SAPB1.CreditCard.prototype.CountryCode = new String();



SAPB1.CreditCard.create = function (rawObject) {
    var instance = new SAPB1.CreditCard();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CreditCard.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CreditCard;
