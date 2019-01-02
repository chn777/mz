var DocumentPackageItem = require('ComplexType/DocumentPackageItem')
var DocumentPackageItemCollection = require('ComplexType/DocumentPackageItemCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DocumentPackage = function () {
}
SAPB1.DocumentPackage.prototype = new SAPB1.ComplexType();
SAPB1.DocumentPackage.prototype.constructor = SAPB1.DocumentPackage;
SAPB1.DocumentPackage.Number = { valueOf: function(){return 'Number';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentPackage.Type = { valueOf: function(){return 'Type';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentPackage.TotalWeight = { valueOf: function(){return 'TotalWeight';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentPackage.Units = { valueOf: function(){return 'Units';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentPackage.DocumentPackageItems = { valueOf: function(){return 'DocumentPackageItems';}, Type: 'DocumentPackageItem', Index: 4, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.DocumentPackage.prototype.Number = new Number();
SAPB1.DocumentPackage.prototype.Type = new String();
SAPB1.DocumentPackage.prototype.TotalWeight = new Number();
SAPB1.DocumentPackage.prototype.Units = new Number();
SAPB1.DocumentPackage.prototype.DocumentPackageItems = new DocumentPackageItemCollection();

SAPB1.DocumentPackage.DocumentPackageItem = DocumentPackageItem
SAPB1.DocumentPackage.DocumentPackageItemCollection = DocumentPackageItemCollection


SAPB1.DocumentPackage.create = function (rawObject) {
    var instance = new SAPB1.DocumentPackage();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DocumentPackage.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DocumentPackage;
