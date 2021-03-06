

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AssetGroup = function () {
}
SAPB1.AssetGroup.prototype = new SAPB1.EntityType();
SAPB1.AssetGroup.prototype.constructor = SAPB1.AssetGroup;
SAPB1.AssetGroup.prototype.keys.push('Code');
SAPB1.AssetGroup.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AssetGroup.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetGroup.prototype.Code = new String();
SAPB1.AssetGroup.prototype.Description = new String();



SAPB1.AssetGroup.create = function (rawObject) {
    var instance = new SAPB1.AssetGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AssetGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AssetGroup;
