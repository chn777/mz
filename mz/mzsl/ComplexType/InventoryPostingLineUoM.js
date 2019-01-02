

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryPostingLineUoM = function () {
}
SAPB1.InventoryPostingLineUoM.prototype = new SAPB1.ComplexType();
SAPB1.InventoryPostingLineUoM.prototype.constructor = SAPB1.InventoryPostingLineUoM;
SAPB1.InventoryPostingLineUoM.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLineUoM.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLineUoM.ChildNumber = { valueOf: function(){return 'ChildNumber';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLineUoM.UoMCountedQuantity = { valueOf: function(){return 'UoMCountedQuantity';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLineUoM.ItemsPerUnit = { valueOf: function(){return 'ItemsPerUnit';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLineUoM.CountedQuantity = { valueOf: function(){return 'CountedQuantity';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLineUoM.UoMCode = { valueOf: function(){return 'UoMCode';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLineUoM.BarCode = { valueOf: function(){return 'BarCode';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingLineUoM.prototype.DocumentEntry = new Number();
SAPB1.InventoryPostingLineUoM.prototype.LineNumber = new Number();
SAPB1.InventoryPostingLineUoM.prototype.ChildNumber = new Number();
SAPB1.InventoryPostingLineUoM.prototype.UoMCountedQuantity = new Number();
SAPB1.InventoryPostingLineUoM.prototype.ItemsPerUnit = new Number();
SAPB1.InventoryPostingLineUoM.prototype.CountedQuantity = new Number();
SAPB1.InventoryPostingLineUoM.prototype.UoMCode = new String();
SAPB1.InventoryPostingLineUoM.prototype.BarCode = new String();



SAPB1.InventoryPostingLineUoM.create = function (rawObject) {
    var instance = new SAPB1.InventoryPostingLineUoM();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryPostingLineUoM.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryPostingLineUoM;
