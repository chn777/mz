

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DepreciationTypePool = function () {
}
SAPB1.DepreciationTypePool.prototype = new SAPB1.EntityType();
SAPB1.DepreciationTypePool.prototype.constructor = SAPB1.DepreciationTypePool;
SAPB1.DepreciationTypePool.prototype.keys.push('Code');
SAPB1.DepreciationTypePool.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DepreciationTypePool.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationTypePool.prototype.Code = new String();
SAPB1.DepreciationTypePool.prototype.Description = new String();



SAPB1.DepreciationTypePool.create = function (rawObject) {
    var instance = new SAPB1.DepreciationTypePool();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DepreciationTypePool.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DepreciationTypePool;
