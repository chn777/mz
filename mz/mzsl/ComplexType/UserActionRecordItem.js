
var UserActionTypeEnum = require('EnumType/UserActionTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserActionRecordItem = function () {
}
SAPB1.UserActionRecordItem.prototype = new SAPB1.ComplexType();
SAPB1.UserActionRecordItem.prototype.constructor = SAPB1.UserActionRecordItem;
SAPB1.UserActionRecordItem.UserCode = { valueOf: function(){return 'UserCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserActionRecordItem.Action = { valueOf: function(){return 'Action';}, Type: 'UserActionTypeEnum', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserActionRecordItem.ActionBy = { valueOf: function(){return 'ActionBy';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserActionRecordItem.ClientIP = { valueOf: function(){return 'ClientIP';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserActionRecordItem.ClientName = { valueOf: function(){return 'ClientName';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserActionRecordItem.ActionDate = { valueOf: function(){return 'ActionDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserActionRecordItem.ActionTime = { valueOf: function(){return 'ActionTime';}, Type: 'Edm.Time', Index: 6, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserActionRecordItem.WindowsSession = { valueOf: function(){return 'WindowsSession';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserActionRecordItem.WindowsUser = { valueOf: function(){return 'WindowsUser';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserActionRecordItem.ProcessName = { valueOf: function(){return 'ProcessName';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserActionRecordItem.ProcessID = { valueOf: function(){return 'ProcessID';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserActionRecordItem.AliveDuration = { valueOf: function(){return 'AliveDuration';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserActionRecordItem.prototype.UserCode = new String();
SAPB1.UserActionRecordItem.prototype.Action = new String();
SAPB1.UserActionRecordItem.prototype.ActionBy = new String();
SAPB1.UserActionRecordItem.prototype.ClientIP = new String();
SAPB1.UserActionRecordItem.prototype.ClientName = new String();
SAPB1.UserActionRecordItem.prototype.ActionDate = new String();
SAPB1.UserActionRecordItem.prototype.ActionTime = new String();
SAPB1.UserActionRecordItem.prototype.WindowsSession = new Number();
SAPB1.UserActionRecordItem.prototype.WindowsUser = new String();
SAPB1.UserActionRecordItem.prototype.ProcessName = new String();
SAPB1.UserActionRecordItem.prototype.ProcessID = new Number();
SAPB1.UserActionRecordItem.prototype.AliveDuration = new Number();


SAPB1.UserActionRecordItem.UserActionTypeEnum = UserActionTypeEnum

SAPB1.UserActionRecordItem.create = function (rawObject) {
    var instance = new SAPB1.UserActionRecordItem();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserActionRecordItem.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserActionRecordItem;
