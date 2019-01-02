var CategoryGroup = require('ComplexType/CategoryGroup')
var CategoryGroupCollection = require('ComplexType/CategoryGroupCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.QueryAuthGroup = function () {
}
SAPB1.QueryAuthGroup.prototype = new SAPB1.EntityType();
SAPB1.QueryAuthGroup.prototype.constructor = SAPB1.QueryAuthGroup;
SAPB1.QueryAuthGroup.prototype.keys.push('AuthGroupId');
SAPB1.QueryAuthGroup.AuthGroupCode = { valueOf: function(){return 'AuthGroupCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.QueryAuthGroup.AuthGroupDes = { valueOf: function(){return 'AuthGroupDes';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.QueryAuthGroup.AuthGroupId = { valueOf: function(){return 'AuthGroupId';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.QueryAuthGroup.CategoryGroupCollection = { valueOf: function(){return 'CategoryGroupCollection';}, Type: 'CategoryGroup', Index: 3, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.QueryAuthGroup.prototype.AuthGroupCode = new String();
SAPB1.QueryAuthGroup.prototype.AuthGroupDes = new String();
SAPB1.QueryAuthGroup.prototype.AuthGroupId = new Number();
SAPB1.QueryAuthGroup.prototype.CategoryGroupCollection = new CategoryGroupCollection();

SAPB1.QueryAuthGroup.CategoryGroup = CategoryGroup
SAPB1.QueryAuthGroup.CategoryGroupCollection = CategoryGroupCollection


SAPB1.QueryAuthGroup.create = function (rawObject) {
    var instance = new SAPB1.QueryAuthGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.QueryAuthGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.QueryAuthGroup;
