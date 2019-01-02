

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryOpeningBalanceCCDNumber = function () {
}
SAPB1.InventoryOpeningBalanceCCDNumber.prototype = new SAPB1.ComplexType();
SAPB1.InventoryOpeningBalanceCCDNumber.prototype.constructor = SAPB1.InventoryOpeningBalanceCCDNumber;
SAPB1.InventoryOpeningBalanceCCDNumber.TrackingNote = { valueOf: function(){return 'TrackingNote';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceCCDNumber.TrackingNoteLine = { valueOf: function(){return 'TrackingNoteLine';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceCCDNumber.CCDNumber = { valueOf: function(){return 'CCDNumber';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceCCDNumber.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceCCDNumber.CountryOfOrigin = { valueOf: function(){return 'CountryOfOrigin';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceCCDNumber.SubLineNumber = { valueOf: function(){return 'SubLineNumber';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryOpeningBalanceCCDNumber.prototype.TrackingNote = new Number();
SAPB1.InventoryOpeningBalanceCCDNumber.prototype.TrackingNoteLine = new Number();
SAPB1.InventoryOpeningBalanceCCDNumber.prototype.CCDNumber = new String();
SAPB1.InventoryOpeningBalanceCCDNumber.prototype.Quantity = new Number();
SAPB1.InventoryOpeningBalanceCCDNumber.prototype.CountryOfOrigin = new String();
SAPB1.InventoryOpeningBalanceCCDNumber.prototype.SubLineNumber = new Number();



SAPB1.InventoryOpeningBalanceCCDNumber.create = function (rawObject) {
    var instance = new SAPB1.InventoryOpeningBalanceCCDNumber();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryOpeningBalanceCCDNumber.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryOpeningBalanceCCDNumber;
