var UserPermissionForm = require('ComplexType/UserPermissionForm')
var UserPermissionFormCollection = require('ComplexType/UserPermissionFormCollection')

var BoUPTOptions = require('EnumType/BoUPTOptions')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserPermissionTree = function () {
}
SAPB1.UserPermissionTree.prototype = new SAPB1.EntityType();
SAPB1.UserPermissionTree.prototype.constructor = SAPB1.UserPermissionTree;
SAPB1.UserPermissionTree.prototype.keys.push('PermissionID');
SAPB1.UserPermissionTree.UserSignature = { valueOf: function(){return 'UserSignature';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserPermissionTree.DisplayOrder = { valueOf: function(){return 'DisplayOrder';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserPermissionTree.PermissionID = { valueOf: function(){return 'PermissionID';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserPermissionTree.Options = { valueOf: function(){return 'Options';}, Type: 'BoUPTOptions', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserPermissionTree.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserPermissionTree.Levels = { valueOf: function(){return 'Levels';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserPermissionTree.IsItem = { valueOf: function(){return 'IsItem';}, Type: 'BoYesNoEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserPermissionTree.ParentID = { valueOf: function(){return 'ParentID';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserPermissionTree.UserPermissionForms = { valueOf: function(){return 'UserPermissionForms';}, Type: 'UserPermissionForm', Index: 8, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.UserPermissionTree.prototype.UserSignature = new Number();
SAPB1.UserPermissionTree.prototype.DisplayOrder = new Number();
SAPB1.UserPermissionTree.prototype.PermissionID = new String();
SAPB1.UserPermissionTree.prototype.Options = new String();
SAPB1.UserPermissionTree.prototype.Name = new String();
SAPB1.UserPermissionTree.prototype.Levels = new Number();
SAPB1.UserPermissionTree.prototype.IsItem = new String();
SAPB1.UserPermissionTree.prototype.ParentID = new String();
SAPB1.UserPermissionTree.prototype.UserPermissionForms = new UserPermissionFormCollection();

SAPB1.UserPermissionTree.UserPermissionForm = UserPermissionForm
SAPB1.UserPermissionTree.UserPermissionFormCollection = UserPermissionFormCollection

SAPB1.UserPermissionTree.BoUPTOptions = BoUPTOptions
SAPB1.UserPermissionTree.BoYesNoEnum = BoYesNoEnum

SAPB1.UserPermissionTree.create = function (rawObject) {
    var instance = new SAPB1.UserPermissionTree();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserPermissionTree.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserPermissionTree;
