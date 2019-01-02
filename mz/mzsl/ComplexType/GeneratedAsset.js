
var GeneratedAssetStatusEnum = require('EnumType/GeneratedAssetStatusEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.GeneratedAsset = function () {
}
SAPB1.GeneratedAsset.prototype = new SAPB1.ComplexType();
SAPB1.GeneratedAsset.prototype.constructor = SAPB1.GeneratedAsset;
SAPB1.GeneratedAsset.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.GeneratedAsset.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GeneratedAsset.VisualOrder = { valueOf: function(){return 'VisualOrder';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.GeneratedAsset.AssetCode = { valueOf: function(){return 'AssetCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GeneratedAsset.Status = { valueOf: function(){return 'Status';}, Type: 'GeneratedAssetStatusEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GeneratedAsset.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GeneratedAsset.SerialNumber = { valueOf: function(){return 'SerialNumber';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GeneratedAsset.amount = { valueOf: function(){return 'amount';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GeneratedAsset.amountSC = { valueOf: function(){return 'amountSC';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GeneratedAsset.prototype.DocEntry = new Number();
SAPB1.GeneratedAsset.prototype.LineNumber = new Number();
SAPB1.GeneratedAsset.prototype.VisualOrder = new Number();
SAPB1.GeneratedAsset.prototype.AssetCode = new String();
SAPB1.GeneratedAsset.prototype.Status = new String();
SAPB1.GeneratedAsset.prototype.Remarks = new String();
SAPB1.GeneratedAsset.prototype.SerialNumber = new String();
SAPB1.GeneratedAsset.prototype.amount = new Number();
SAPB1.GeneratedAsset.prototype.amountSC = new Number();


SAPB1.GeneratedAsset.GeneratedAssetStatusEnum = GeneratedAssetStatusEnum

SAPB1.GeneratedAsset.create = function (rawObject) {
    var instance = new SAPB1.GeneratedAsset();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.GeneratedAsset.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.GeneratedAsset;
