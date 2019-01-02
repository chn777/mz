

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CategoryGroup = function () {
}
SAPB1.CategoryGroup.prototype = new SAPB1.ComplexType();
SAPB1.CategoryGroup.prototype.constructor = SAPB1.CategoryGroup;
SAPB1.CategoryGroup.AuthGroupId = { valueOf: function(){return 'AuthGroupId';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CategoryGroup.CategoryId = { valueOf: function(){return 'CategoryId';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CategoryGroup.prototype.AuthGroupId = new Number();
SAPB1.CategoryGroup.prototype.CategoryId = new Number();



SAPB1.CategoryGroup.create = function (rawObject) {
    var instance = new SAPB1.CategoryGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CategoryGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CategoryGroup;
