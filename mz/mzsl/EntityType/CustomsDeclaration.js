

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CustomsDeclaration = function () {
}
SAPB1.CustomsDeclaration.prototype = new SAPB1.EntityType();
SAPB1.CustomsDeclaration.prototype.constructor = SAPB1.CustomsDeclaration;
SAPB1.CustomsDeclaration.prototype.keys.push('CCDNum');
SAPB1.CustomsDeclaration.CCDNum = { valueOf: function(){return 'CCDNum';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CustomsDeclaration.Date = { valueOf: function(){return 'Date';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsDeclaration.CustomsBroker = { valueOf: function(){return 'CustomsBroker';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsDeclaration.DocNum = { valueOf: function(){return 'DocNum';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsDeclaration.DocDate = { valueOf: function(){return 'DocDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsDeclaration.SupplyNum = { valueOf: function(){return 'SupplyNum';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsDeclaration.SupplyDate = { valueOf: function(){return 'SupplyDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsDeclaration.CustomsTerminal = { valueOf: function(){return 'CustomsTerminal';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsDeclaration.PaymentKey = { valueOf: function(){return 'PaymentKey';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsDeclaration.prototype.CCDNum = new String();
SAPB1.CustomsDeclaration.prototype.Date = new String();
SAPB1.CustomsDeclaration.prototype.CustomsBroker = new String();
SAPB1.CustomsDeclaration.prototype.DocNum = new String();
SAPB1.CustomsDeclaration.prototype.DocDate = new String();
SAPB1.CustomsDeclaration.prototype.SupplyNum = new String();
SAPB1.CustomsDeclaration.prototype.SupplyDate = new String();
SAPB1.CustomsDeclaration.prototype.CustomsTerminal = new String();
SAPB1.CustomsDeclaration.prototype.PaymentKey = new String();



SAPB1.CustomsDeclaration.create = function (rawObject) {
    var instance = new SAPB1.CustomsDeclaration();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CustomsDeclaration.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CustomsDeclaration;
