

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryPostingCCDNumber = function () {
}
SAPB1.InventoryPostingCCDNumber.prototype = new SAPB1.ComplexType();
SAPB1.InventoryPostingCCDNumber.prototype.constructor = SAPB1.InventoryPostingCCDNumber;
SAPB1.InventoryPostingCCDNumber.TrackingNote = { valueOf: function(){return 'TrackingNote';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingCCDNumber.TrackingNoteLine = { valueOf: function(){return 'TrackingNoteLine';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingCCDNumber.CCDNumber = { valueOf: function(){return 'CCDNumber';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingCCDNumber.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingCCDNumber.CountryOfOrigin = { valueOf: function(){return 'CountryOfOrigin';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingCCDNumber.SubLineNumber = { valueOf: function(){return 'SubLineNumber';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingCCDNumber.prototype.TrackingNote = new Number();
SAPB1.InventoryPostingCCDNumber.prototype.TrackingNoteLine = new Number();
SAPB1.InventoryPostingCCDNumber.prototype.CCDNumber = new String();
SAPB1.InventoryPostingCCDNumber.prototype.Quantity = new Number();
SAPB1.InventoryPostingCCDNumber.prototype.CountryOfOrigin = new String();
SAPB1.InventoryPostingCCDNumber.prototype.SubLineNumber = new Number();



SAPB1.InventoryPostingCCDNumber.create = function (rawObject) {
    var instance = new SAPB1.InventoryPostingCCDNumber();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryPostingCCDNumber.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryPostingCCDNumber;
