
var UserGroupCategoryEnum = require('EnumType/UserGroupCategoryEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserGroup = function () {
}
SAPB1.UserGroup.prototype = new SAPB1.EntityType();
SAPB1.UserGroup.prototype.constructor = SAPB1.UserGroup;
SAPB1.UserGroup.prototype.keys.push('UserGroupId');
SAPB1.UserGroup.UserGroupId = { valueOf: function(){return 'UserGroupId';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserGroup.UserGroupName = { valueOf: function(){return 'UserGroupName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserGroup.UserGroupDec = { valueOf: function(){return 'UserGroupDec';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserGroup.TPLId = { valueOf: function(){return 'TPLId';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserGroup.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserGroup.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserGroup.UserGroupType = { valueOf: function(){return 'UserGroupType';}, Type: 'UserGroupCategoryEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserGroup.prototype.UserGroupId = new Number();
SAPB1.UserGroup.prototype.UserGroupName = new String();
SAPB1.UserGroup.prototype.UserGroupDec = new String();
SAPB1.UserGroup.prototype.TPLId = new Number();
SAPB1.UserGroup.prototype.StartDate = new String();
SAPB1.UserGroup.prototype.DueDate = new String();
SAPB1.UserGroup.prototype.UserGroupType = new String();


SAPB1.UserGroup.UserGroupCategoryEnum = UserGroupCategoryEnum

SAPB1.UserGroup.create = function (rawObject) {
    var instance = new SAPB1.UserGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserGroup;
