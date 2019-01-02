

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AssetDepreciationGroup = function () {
}
SAPB1.AssetDepreciationGroup.prototype = new SAPB1.EntityType();
SAPB1.AssetDepreciationGroup.prototype.constructor = SAPB1.AssetDepreciationGroup;
SAPB1.AssetDepreciationGroup.prototype.keys.push('Code');
SAPB1.AssetDepreciationGroup.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AssetDepreciationGroup.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDepreciationGroup.Group = { valueOf: function(){return 'Group';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDepreciationGroup.prototype.Code = new String();
SAPB1.AssetDepreciationGroup.prototype.Description = new String();
SAPB1.AssetDepreciationGroup.prototype.Group = new String();



SAPB1.AssetDepreciationGroup.create = function (rawObject) {
    var instance = new SAPB1.AssetDepreciationGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AssetDepreciationGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AssetDepreciationGroup;
