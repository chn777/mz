

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BarCode = function () {
}
SAPB1.BarCode.prototype = new SAPB1.EntityType();
SAPB1.BarCode.prototype.constructor = SAPB1.BarCode;
SAPB1.BarCode.prototype.keys.push('AbsEntry');
SAPB1.BarCode.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BarCode.ItemNo = { valueOf: function(){return 'ItemNo';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BarCode.UoMEntry = { valueOf: function(){return 'UoMEntry';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BarCode.Barcode = { valueOf: function(){return 'Barcode';}, Type: 'Edm.String', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BarCode.FreeText = { valueOf: function(){return 'FreeText';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BarCode.prototype.AbsEntry = new Number();
SAPB1.BarCode.prototype.ItemNo = new String();
SAPB1.BarCode.prototype.UoMEntry = new Number();
SAPB1.BarCode.prototype.Barcode = new String();
SAPB1.BarCode.prototype.FreeText = new String();



SAPB1.BarCode.create = function (rawObject) {
    var instance = new SAPB1.BarCode();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BarCode.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BarCode;
