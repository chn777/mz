
var BoPermission = require('EnumType/BoPermission')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserPermissionItem = function () {
}
SAPB1.UserPermissionItem.prototype = new SAPB1.ComplexType();
SAPB1.UserPermissionItem.prototype.constructor = SAPB1.UserPermissionItem;
SAPB1.UserPermissionItem.UserCode = { valueOf: function(){return 'UserCode';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserPermissionItem.PermissionID = { valueOf: function(){return 'PermissionID';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserPermissionItem.Permission = { valueOf: function(){return 'Permission';}, Type: 'BoPermission', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserPermissionItem.prototype.UserCode = new Number();
SAPB1.UserPermissionItem.prototype.PermissionID = new String();
SAPB1.UserPermissionItem.prototype.Permission = new String();


SAPB1.UserPermissionItem.BoPermission = BoPermission

SAPB1.UserPermissionItem.create = function (rawObject) {
    var instance = new SAPB1.UserPermissionItem();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserPermissionItem.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserPermissionItem;
