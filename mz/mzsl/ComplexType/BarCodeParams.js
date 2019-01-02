

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BarCodeParams = function () {
}
SAPB1.BarCodeParams.prototype = new SAPB1.ComplexType();
SAPB1.BarCodeParams.prototype.constructor = SAPB1.BarCodeParams;
SAPB1.BarCodeParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BarCodeParams.ItemNo = { valueOf: function(){return 'ItemNo';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BarCodeParams.UoMEntry = { valueOf: function(){return 'UoMEntry';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BarCodeParams.Barcode = { valueOf: function(){return 'Barcode';}, Type: 'Edm.String', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BarCodeParams.prototype.AbsEntry = new Number();
SAPB1.BarCodeParams.prototype.ItemNo = new String();
SAPB1.BarCodeParams.prototype.UoMEntry = new Number();
SAPB1.BarCodeParams.prototype.Barcode = new String();



SAPB1.BarCodeParams.create = function (rawObject) {
    var instance = new SAPB1.BarCodeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BarCodeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BarCodeParams;
