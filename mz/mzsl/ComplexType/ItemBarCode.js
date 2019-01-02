

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemBarCode = function () {
}
SAPB1.ItemBarCode.prototype = new SAPB1.ComplexType();
SAPB1.ItemBarCode.prototype.constructor = SAPB1.ItemBarCode;
SAPB1.ItemBarCode.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemBarCode.UoMEntry = { valueOf: function(){return 'UoMEntry';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemBarCode.Barcode = { valueOf: function(){return 'Barcode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemBarCode.FreeText = { valueOf: function(){return 'FreeText';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemBarCode.prototype.AbsEntry = new Number();
SAPB1.ItemBarCode.prototype.UoMEntry = new Number();
SAPB1.ItemBarCode.prototype.Barcode = new String();
SAPB1.ItemBarCode.prototype.FreeText = new String();



SAPB1.ItemBarCode.create = function (rawObject) {
    var instance = new SAPB1.ItemBarCode();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemBarCode.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ItemBarCode;
