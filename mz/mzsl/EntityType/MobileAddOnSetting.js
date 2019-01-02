
var MobileAddonSettingTypeEnum = require('EnumType/MobileAddonSettingTypeEnum')
var ViewStyleTypeEnum = require('EnumType/ViewStyleTypeEnum')
var LogonMethodEnum = require('EnumType/LogonMethodEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MobileAddOnSetting = function () {
}
SAPB1.MobileAddOnSetting.prototype = new SAPB1.EntityType();
SAPB1.MobileAddOnSetting.prototype.constructor = SAPB1.MobileAddOnSetting;
SAPB1.MobileAddOnSetting.prototype.keys.push('Code');
SAPB1.MobileAddOnSetting.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MobileAddOnSetting.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MobileAddOnSetting.Url = { valueOf: function(){return 'Url';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MobileAddOnSetting.Type = { valueOf: function(){return 'Type';}, Type: 'MobileAddonSettingTypeEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MobileAddOnSetting.Provider = { valueOf: function(){return 'Provider';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MobileAddOnSetting.ViewStyle = { valueOf: function(){return 'ViewStyle';}, Type: 'ViewStyleTypeEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MobileAddOnSetting.LogonMethod = { valueOf: function(){return 'LogonMethod';}, Type: 'LogonMethodEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MobileAddOnSetting.Enable = { valueOf: function(){return 'Enable';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MobileAddOnSetting.B1MobileApp = { valueOf: function(){return 'B1MobileApp';}, Type: 'BoYesNoEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MobileAddOnSetting.B1SalesApp = { valueOf: function(){return 'B1SalesApp';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MobileAddOnSetting.prototype.Code = new String();
SAPB1.MobileAddOnSetting.prototype.Description = new String();
SAPB1.MobileAddOnSetting.prototype.Url = new String();
SAPB1.MobileAddOnSetting.prototype.Type = new String();
SAPB1.MobileAddOnSetting.prototype.Provider = new String();
SAPB1.MobileAddOnSetting.prototype.ViewStyle = new String();
SAPB1.MobileAddOnSetting.prototype.LogonMethod = new String();
SAPB1.MobileAddOnSetting.prototype.Enable = new String();
SAPB1.MobileAddOnSetting.prototype.B1MobileApp = new String();
SAPB1.MobileAddOnSetting.prototype.B1SalesApp = new String();


SAPB1.MobileAddOnSetting.MobileAddonSettingTypeEnum = MobileAddonSettingTypeEnum
SAPB1.MobileAddOnSetting.ViewStyleTypeEnum = ViewStyleTypeEnum
SAPB1.MobileAddOnSetting.LogonMethodEnum = LogonMethodEnum
SAPB1.MobileAddOnSetting.BoYesNoEnum = BoYesNoEnum

SAPB1.MobileAddOnSetting.create = function (rawObject) {
    var instance = new SAPB1.MobileAddOnSetting();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MobileAddOnSetting.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MobileAddOnSetting;
