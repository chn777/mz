

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ResourceFixedAsset = function () {
}
SAPB1.ResourceFixedAsset.prototype = new SAPB1.ComplexType();
SAPB1.ResourceFixedAsset.prototype.constructor = SAPB1.ResourceFixedAsset;
SAPB1.ResourceFixedAsset.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ResourceFixedAsset.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceFixedAsset.prototype.Code = new String();
SAPB1.ResourceFixedAsset.prototype.ItemCode = new String();



SAPB1.ResourceFixedAsset.create = function (rawObject) {
    var instance = new SAPB1.ResourceFixedAsset();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ResourceFixedAsset.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ResourceFixedAsset;
