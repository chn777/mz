

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AssetDepreciationGroupParams = function () {
}
SAPB1.AssetDepreciationGroupParams.prototype = new SAPB1.ComplexType();
SAPB1.AssetDepreciationGroupParams.prototype.constructor = SAPB1.AssetDepreciationGroupParams;
SAPB1.AssetDepreciationGroupParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDepreciationGroupParams.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDepreciationGroupParams.prototype.Code = new String();
SAPB1.AssetDepreciationGroupParams.prototype.Description = new String();



SAPB1.AssetDepreciationGroupParams.create = function (rawObject) {
    var instance = new SAPB1.AssetDepreciationGroupParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AssetDepreciationGroupParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AssetDepreciationGroupParams;
