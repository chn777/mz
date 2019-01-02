
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesTaxAuthoritiesType = function () {
}
SAPB1.SalesTaxAuthoritiesType.prototype = new SAPB1.EntityType();
SAPB1.SalesTaxAuthoritiesType.prototype.constructor = SAPB1.SalesTaxAuthoritiesType;
SAPB1.SalesTaxAuthoritiesType.prototype.keys.push('Numerator');
SAPB1.SalesTaxAuthoritiesType.UserSignature = { valueOf: function(){return 'UserSignature';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthoritiesType.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthoritiesType.VAT = { valueOf: function(){return 'VAT';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthoritiesType.Numerator = { valueOf: function(){return 'Numerator';}, Type: 'Edm.Int32', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthoritiesType.TaxCreditControl = { valueOf: function(){return 'TaxCreditControl';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxAuthoritiesType.prototype.UserSignature = new Number();
SAPB1.SalesTaxAuthoritiesType.prototype.Name = new String();
SAPB1.SalesTaxAuthoritiesType.prototype.VAT = new String();
SAPB1.SalesTaxAuthoritiesType.prototype.Numerator = new Number();
SAPB1.SalesTaxAuthoritiesType.prototype.TaxCreditControl = new String();


SAPB1.SalesTaxAuthoritiesType.BoYesNoEnum = BoYesNoEnum

SAPB1.SalesTaxAuthoritiesType.create = function (rawObject) {
    var instance = new SAPB1.SalesTaxAuthoritiesType();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesTaxAuthoritiesType.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesTaxAuthoritiesType;
