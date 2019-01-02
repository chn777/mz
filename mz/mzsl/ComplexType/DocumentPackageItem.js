

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DocumentPackageItem = function () {
}
SAPB1.DocumentPackageItem.prototype = new SAPB1.ComplexType();
SAPB1.DocumentPackageItem.prototype.constructor = SAPB1.DocumentPackageItem;
SAPB1.DocumentPackageItem.PackageNumber = { valueOf: function(){return 'PackageNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentPackageItem.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentPackageItem.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentPackageItem.UoMEntry = { valueOf: function(){return 'UoMEntry';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentPackageItem.MeasureUnit = { valueOf: function(){return 'MeasureUnit';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentPackageItem.UnitsOfMeasurement = { valueOf: function(){return 'UnitsOfMeasurement';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentPackageItem.prototype.PackageNumber = new Number();
SAPB1.DocumentPackageItem.prototype.ItemCode = new String();
SAPB1.DocumentPackageItem.prototype.Quantity = new Number();
SAPB1.DocumentPackageItem.prototype.UoMEntry = new Number();
SAPB1.DocumentPackageItem.prototype.MeasureUnit = new String();
SAPB1.DocumentPackageItem.prototype.UnitsOfMeasurement = new Number();



SAPB1.DocumentPackageItem.create = function (rawObject) {
    var instance = new SAPB1.DocumentPackageItem();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DocumentPackageItem.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DocumentPackageItem;
