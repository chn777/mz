var UserPermissionItem = require('ComplexType/UserPermissionItem')
var UserPermissionItemCollection = require('ComplexType/UserPermissionItemCollection')
var UserActionRecordItem = require('ComplexType/UserActionRecordItem')
var UserActionRecordItemCollection = require('ComplexType/UserActionRecordItemCollection')
var UserGroupByUserItem = require('ComplexType/UserGroupByUserItem')
var UserGroupByUserItemCollection = require('ComplexType/UserGroupByUserItemCollection')
var UserBranchAssignmentItem = require('ComplexType/UserBranchAssignmentItem')
var UserBranchAssignmentItemCollection = require('ComplexType/UserBranchAssignmentItemCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoSuppLangs = require('EnumType/BoSuppLangs')
var BoUserGroup = require('EnumType/BoUserGroup')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.User = function () {
}
SAPB1.User.prototype = new SAPB1.EntityType();
SAPB1.User.prototype.constructor = SAPB1.User;
SAPB1.User.prototype.keys.push('InternalKey');
SAPB1.User.InternalKey = { valueOf: function(){return 'InternalKey';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.User.UserPassword = { valueOf: function(){return 'UserPassword';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.UserCode = { valueOf: function(){return 'UserCode';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.User.UserName = { valueOf: function(){return 'UserName';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.Superuser = { valueOf: function(){return 'Superuser';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.eMail = { valueOf: function(){return 'eMail';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.MobilePhoneNumber = { valueOf: function(){return 'MobilePhoneNumber';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.Defaults = { valueOf: function(){return 'Defaults';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.FaxNumber = { valueOf: function(){return 'FaxNumber';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.Branch = { valueOf: function(){return 'Branch';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.Department = { valueOf: function(){return 'Department';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.LanguageCode = { valueOf: function(){return 'LanguageCode';}, Type: 'BoSuppLangs', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.Locked = { valueOf: function(){return 'Locked';}, Type: 'BoYesNoEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.Group = { valueOf: function(){return 'Group';}, Type: 'BoUserGroup', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.MaxDiscountGeneral = { valueOf: function(){return 'MaxDiscountGeneral';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.MaxDiscountSales = { valueOf: function(){return 'MaxDiscountSales';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.MaxDiscountPurchase = { valueOf: function(){return 'MaxDiscountPurchase';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.CashLimit = { valueOf: function(){return 'CashLimit';}, Type: 'BoYesNoEnum', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.MaxCashAmtForIncmngPayts = { valueOf: function(){return 'MaxCashAmtForIncmngPayts';}, Type: 'Edm.Double', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.LastLogoutDate = { valueOf: function(){return 'LastLogoutDate';}, Type: 'Edm.DateTime', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.LastLoginTime = { valueOf: function(){return 'LastLoginTime';}, Type: 'Edm.Time', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.LastLogoutTime = { valueOf: function(){return 'LastLogoutTime';}, Type: 'Edm.Time', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.LastPasswordChangeTime = { valueOf: function(){return 'LastPasswordChangeTime';}, Type: 'Edm.Time', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.LastPasswordChangedBy = { valueOf: function(){return 'LastPasswordChangedBy';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.User.UserPermission = { valueOf: function(){return 'UserPermission';}, Type: 'UserPermissionItem', Index: 24, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.User.UserActionRecord = { valueOf: function(){return 'UserActionRecord';}, Type: 'UserActionRecordItem', Index: 25, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.User.UserGroupByUser = { valueOf: function(){return 'UserGroupByUser';}, Type: 'UserGroupByUserItem', Index: 26, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.User.UserBranchAssignment = { valueOf: function(){return 'UserBranchAssignment';}, Type: 'UserBranchAssignmentItem', Index: 27, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.User.prototype.InternalKey = new Number();
SAPB1.User.prototype.UserPassword = new String();
SAPB1.User.prototype.UserCode = new String();
SAPB1.User.prototype.UserName = new String();
SAPB1.User.prototype.Superuser = new String();
SAPB1.User.prototype.eMail = new String();
SAPB1.User.prototype.MobilePhoneNumber = new String();
SAPB1.User.prototype.Defaults = new String();
SAPB1.User.prototype.FaxNumber = new String();
SAPB1.User.prototype.Branch = new Number();
SAPB1.User.prototype.Department = new Number();
SAPB1.User.prototype.LanguageCode = new String();
SAPB1.User.prototype.Locked = new String();
SAPB1.User.prototype.Group = new String();
SAPB1.User.prototype.MaxDiscountGeneral = new Number();
SAPB1.User.prototype.MaxDiscountSales = new Number();
SAPB1.User.prototype.MaxDiscountPurchase = new Number();
SAPB1.User.prototype.CashLimit = new String();
SAPB1.User.prototype.MaxCashAmtForIncmngPayts = new Number();
SAPB1.User.prototype.LastLogoutDate = new String();
SAPB1.User.prototype.LastLoginTime = new String();
SAPB1.User.prototype.LastLogoutTime = new String();
SAPB1.User.prototype.LastPasswordChangeTime = new String();
SAPB1.User.prototype.LastPasswordChangedBy = new String();
SAPB1.User.prototype.UserPermission = new UserPermissionItemCollection();
SAPB1.User.prototype.UserActionRecord = new UserActionRecordItemCollection();
SAPB1.User.prototype.UserGroupByUser = new UserGroupByUserItemCollection();
SAPB1.User.prototype.UserBranchAssignment = new UserBranchAssignmentItemCollection();

SAPB1.User.UserPermissionItem = UserPermissionItem
SAPB1.User.UserPermissionItemCollection = UserPermissionItemCollection
SAPB1.User.UserActionRecordItem = UserActionRecordItem
SAPB1.User.UserActionRecordItemCollection = UserActionRecordItemCollection
SAPB1.User.UserGroupByUserItem = UserGroupByUserItem
SAPB1.User.UserGroupByUserItemCollection = UserGroupByUserItemCollection
SAPB1.User.UserBranchAssignmentItem = UserBranchAssignmentItem
SAPB1.User.UserBranchAssignmentItemCollection = UserBranchAssignmentItemCollection

SAPB1.User.BoYesNoEnum = BoYesNoEnum
SAPB1.User.BoSuppLangs = BoSuppLangs
SAPB1.User.BoUserGroup = BoUserGroup

SAPB1.User.create = function (rawObject) {
    var instance = new SAPB1.User();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.User.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.User;
