

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.FIFOLayer = function () {
}
SAPB1.FIFOLayer.prototype = new SAPB1.ComplexType();
SAPB1.FIFOLayer.prototype.constructor = SAPB1.FIFOLayer;
SAPB1.FIFOLayer.TransactionSequenceNum = { valueOf: function(){return 'TransactionSequenceNum';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FIFOLayer.LayerID = { valueOf: function(){return 'LayerID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FIFOLayer.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FIFOLayer.Price = { valueOf: function(){return 'Price';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FIFOLayer.LineTotal = { valueOf: function(){return 'LineTotal';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FIFOLayer.BaseLine = { valueOf: function(){return 'BaseLine';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FIFOLayer.prototype.TransactionSequenceNum = new Number();
SAPB1.FIFOLayer.prototype.LayerID = new Number();
SAPB1.FIFOLayer.prototype.Quantity = new Number();
SAPB1.FIFOLayer.prototype.Price = new Number();
SAPB1.FIFOLayer.prototype.LineTotal = new Number();
SAPB1.FIFOLayer.prototype.BaseLine = new Number();



SAPB1.FIFOLayer.create = function (rawObject) {
    var instance = new SAPB1.FIFOLayer();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.FIFOLayer.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.FIFOLayer;
