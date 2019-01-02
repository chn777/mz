

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.FixedAssetValuesParams = function () {
}
SAPB1.FixedAssetValuesParams.prototype = new SAPB1.ComplexType();
SAPB1.FixedAssetValuesParams.prototype.constructor = SAPB1.FixedAssetValuesParams;
SAPB1.FixedAssetValuesParams.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetValuesParams.FiscalYear = { valueOf: function(){return 'FiscalYear';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetValuesParams.DepreciationArea = { valueOf: function(){return 'DepreciationArea';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FixedAssetValuesParams.prototype.ItemCode = new String();
SAPB1.FixedAssetValuesParams.prototype.FiscalYear = new String();
SAPB1.FixedAssetValuesParams.prototype.DepreciationArea = new String();



SAPB1.FixedAssetValuesParams.create = function (rawObject) {
    var instance = new SAPB1.FixedAssetValuesParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.FixedAssetValuesParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.FixedAssetValuesParams;
