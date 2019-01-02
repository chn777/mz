

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.OriginalItemParams = function () {
}
SAPB1.OriginalItemParams.prototype = new SAPB1.ComplexType();
SAPB1.OriginalItemParams.prototype.constructor = SAPB1.OriginalItemParams;
SAPB1.OriginalItemParams.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.OriginalItemParams.ItemName = { valueOf: function(){return 'ItemName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.OriginalItemParams.prototype.ItemCode = new String();
SAPB1.OriginalItemParams.prototype.ItemName = new String();



SAPB1.OriginalItemParams.create = function (rawObject) {
    var instance = new SAPB1.OriginalItemParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.OriginalItemParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.OriginalItemParams;
