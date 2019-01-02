var UserObjectMD_ChildTable = require('ComplexType/UserObjectMD_ChildTable')
var UserObjectMD_ChildTableCollection = require('ComplexType/UserObjectMD_ChildTableCollection')
var UserObjectMD_FindColumn = require('ComplexType/UserObjectMD_FindColumn')
var UserObjectMD_FindColumnCollection = require('ComplexType/UserObjectMD_FindColumnCollection')
var UserObjectMD_FormColumn = require('ComplexType/UserObjectMD_FormColumn')
var UserObjectMD_FormColumnCollection = require('ComplexType/UserObjectMD_FormColumnCollection')
var UserObjectMD_EnhancedFormColumn = require('ComplexType/UserObjectMD_EnhancedFormColumn')
var UserObjectMD_EnhancedFormColumnCollection = require('ComplexType/UserObjectMD_EnhancedFormColumnCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoUDOObjType = require('EnumType/BoUDOObjType')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserObjectsMD = function () {
}
SAPB1.UserObjectsMD.prototype = new SAPB1.EntityType();
SAPB1.UserObjectsMD.prototype.constructor = SAPB1.UserObjectsMD;
SAPB1.UserObjectsMD.prototype.keys.push('Code');
SAPB1.UserObjectsMD.TableName = { valueOf: function(){return 'TableName';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.LogTableName = { valueOf: function(){return 'LogTableName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.CanCreateDefaultForm = { valueOf: function(){return 'CanCreateDefaultForm';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.ObjectType = { valueOf: function(){return 'ObjectType';}, Type: 'BoUDOObjType', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.ExtensionName = { valueOf: function(){return 'ExtensionName';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.CanCancel = { valueOf: function(){return 'CanCancel';}, Type: 'BoYesNoEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.CanDelete = { valueOf: function(){return 'CanDelete';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.CanLog = { valueOf: function(){return 'CanLog';}, Type: 'BoYesNoEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.ManageSeries = { valueOf: function(){return 'ManageSeries';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.CanFind = { valueOf: function(){return 'CanFind';}, Type: 'BoYesNoEnum', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.CanYearTransfer = { valueOf: function(){return 'CanYearTransfer';}, Type: 'BoYesNoEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.CanClose = { valueOf: function(){return 'CanClose';}, Type: 'BoYesNoEnum', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.OverwriteDllfile = { valueOf: function(){return 'OverwriteDllfile';}, Type: 'BoYesNoEnum', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.UseUniqueFormType = { valueOf: function(){return 'UseUniqueFormType';}, Type: 'BoYesNoEnum', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.CanArchive = { valueOf: function(){return 'CanArchive';}, Type: 'BoYesNoEnum', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.MenuItem = { valueOf: function(){return 'MenuItem';}, Type: 'BoYesNoEnum', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.MenuCaption = { valueOf: function(){return 'MenuCaption';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.FatherMenuID = { valueOf: function(){return 'FatherMenuID';}, Type: 'Edm.Int32', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.Position = { valueOf: function(){return 'Position';}, Type: 'Edm.Int32', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.MenuUID = { valueOf: function(){return 'MenuUID';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.EnableEnhancedForm = { valueOf: function(){return 'EnableEnhancedForm';}, Type: 'BoYesNoEnum', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.RebuildEnhancedForm = { valueOf: function(){return 'RebuildEnhancedForm';}, Type: 'BoYesNoEnum', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.FormSRF = { valueOf: function(){return 'FormSRF';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectsMD.UserObjectMD_ChildTables = { valueOf: function(){return 'UserObjectMD_ChildTables';}, Type: 'UserObjectMD_ChildTable', Index: 25, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.UserObjectsMD.UserObjectMD_FindColumns = { valueOf: function(){return 'UserObjectMD_FindColumns';}, Type: 'UserObjectMD_FindColumn', Index: 26, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.UserObjectsMD.UserObjectMD_FormColumns = { valueOf: function(){return 'UserObjectMD_FormColumns';}, Type: 'UserObjectMD_FormColumn', Index: 27, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.UserObjectsMD.UserObjectMD_EnhancedFormColumns = { valueOf: function(){return 'UserObjectMD_EnhancedFormColumns';}, Type: 'UserObjectMD_EnhancedFormColumn', Index: 28, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.UserObjectsMD.prototype.TableName = new String();
SAPB1.UserObjectsMD.prototype.Code = new String();
SAPB1.UserObjectsMD.prototype.LogTableName = new String();
SAPB1.UserObjectsMD.prototype.CanCreateDefaultForm = new String();
SAPB1.UserObjectsMD.prototype.ObjectType = new String();
SAPB1.UserObjectsMD.prototype.ExtensionName = new String();
SAPB1.UserObjectsMD.prototype.CanCancel = new String();
SAPB1.UserObjectsMD.prototype.CanDelete = new String();
SAPB1.UserObjectsMD.prototype.CanLog = new String();
SAPB1.UserObjectsMD.prototype.ManageSeries = new String();
SAPB1.UserObjectsMD.prototype.CanFind = new String();
SAPB1.UserObjectsMD.prototype.CanYearTransfer = new String();
SAPB1.UserObjectsMD.prototype.Name = new String();
SAPB1.UserObjectsMD.prototype.CanClose = new String();
SAPB1.UserObjectsMD.prototype.OverwriteDllfile = new String();
SAPB1.UserObjectsMD.prototype.UseUniqueFormType = new String();
SAPB1.UserObjectsMD.prototype.CanArchive = new String();
SAPB1.UserObjectsMD.prototype.MenuItem = new String();
SAPB1.UserObjectsMD.prototype.MenuCaption = new String();
SAPB1.UserObjectsMD.prototype.FatherMenuID = new Number();
SAPB1.UserObjectsMD.prototype.Position = new Number();
SAPB1.UserObjectsMD.prototype.MenuUID = new String();
SAPB1.UserObjectsMD.prototype.EnableEnhancedForm = new String();
SAPB1.UserObjectsMD.prototype.RebuildEnhancedForm = new String();
SAPB1.UserObjectsMD.prototype.FormSRF = new String();
SAPB1.UserObjectsMD.prototype.UserObjectMD_ChildTables = new UserObjectMD_ChildTableCollection();
SAPB1.UserObjectsMD.prototype.UserObjectMD_FindColumns = new UserObjectMD_FindColumnCollection();
SAPB1.UserObjectsMD.prototype.UserObjectMD_FormColumns = new UserObjectMD_FormColumnCollection();
SAPB1.UserObjectsMD.prototype.UserObjectMD_EnhancedFormColumns = new UserObjectMD_EnhancedFormColumnCollection();

SAPB1.UserObjectsMD.UserObjectMD_ChildTable = UserObjectMD_ChildTable
SAPB1.UserObjectsMD.UserObjectMD_ChildTableCollection = UserObjectMD_ChildTableCollection
SAPB1.UserObjectsMD.UserObjectMD_FindColumn = UserObjectMD_FindColumn
SAPB1.UserObjectsMD.UserObjectMD_FindColumnCollection = UserObjectMD_FindColumnCollection
SAPB1.UserObjectsMD.UserObjectMD_FormColumn = UserObjectMD_FormColumn
SAPB1.UserObjectsMD.UserObjectMD_FormColumnCollection = UserObjectMD_FormColumnCollection
SAPB1.UserObjectsMD.UserObjectMD_EnhancedFormColumn = UserObjectMD_EnhancedFormColumn
SAPB1.UserObjectsMD.UserObjectMD_EnhancedFormColumnCollection = UserObjectMD_EnhancedFormColumnCollection

SAPB1.UserObjectsMD.BoYesNoEnum = BoYesNoEnum
SAPB1.UserObjectsMD.BoUDOObjType = BoUDOObjType

SAPB1.UserObjectsMD.create = function (rawObject) {
    var instance = new SAPB1.UserObjectsMD();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserObjectsMD.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserObjectsMD;
