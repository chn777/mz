
var TransTypesEnum = require('EnumType/TransTypesEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Layer = function () {
}
SAPB1.Layer.prototype = new SAPB1.ComplexType();
SAPB1.Layer.prototype.constructor = SAPB1.Layer;
SAPB1.Layer.TransactionSequenceNum = { valueOf: function(){return 'TransactionSequenceNum';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Layer.LayerID = { valueOf: function(){return 'LayerID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Layer.DocNumber = { valueOf: function(){return 'DocNumber';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Layer.DocType = { valueOf: function(){return 'DocType';}, Type: 'TransTypesEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Layer.EntryDate = { valueOf: function(){return 'EntryDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Layer.CurrentCost = { valueOf: function(){return 'CurrentCost';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Layer.OpenQty = { valueOf: function(){return 'OpenQty';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Layer.prototype.TransactionSequenceNum = new Number();
SAPB1.Layer.prototype.LayerID = new Number();
SAPB1.Layer.prototype.DocNumber = new String();
SAPB1.Layer.prototype.DocType = new String();
SAPB1.Layer.prototype.EntryDate = new String();
SAPB1.Layer.prototype.CurrentCost = new Number();
SAPB1.Layer.prototype.OpenQty = new Number();


SAPB1.Layer.TransTypesEnum = TransTypesEnum

SAPB1.Layer.create = function (rawObject) {
    var instance = new SAPB1.Layer();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Layer.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Layer;
