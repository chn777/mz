var ContactEmployeeBlockSendingMarketingContent = require('ComplexType/ContactEmployeeBlockSendingMarketingContent')
var ContactEmployeeBlockSendingMarketingContentCollection = require('ComplexType/ContactEmployeeBlockSendingMarketingContentCollection')

var BoGenderTypes = require('EnumType/BoGenderTypes')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ContactEmployee = function () {
}
SAPB1.ContactEmployee.prototype = new SAPB1.ComplexType();
SAPB1.ContactEmployee.prototype.constructor = SAPB1.ContactEmployee;
SAPB1.ContactEmployee.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.Position = { valueOf: function(){return 'Position';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.Address = { valueOf: function(){return 'Address';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.Phone1 = { valueOf: function(){return 'Phone1';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.Phone2 = { valueOf: function(){return 'Phone2';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.MobilePhone = { valueOf: function(){return 'MobilePhone';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.Fax = { valueOf: function(){return 'Fax';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.E_Mail = { valueOf: function(){return 'E_Mail';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.Pager = { valueOf: function(){return 'Pager';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.Remarks1 = { valueOf: function(){return 'Remarks1';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.Remarks2 = { valueOf: function(){return 'Remarks2';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.Password = { valueOf: function(){return 'Password';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.InternalCode = { valueOf: function(){return 'InternalCode';}, Type: 'Edm.Int32', Index: 13, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.PlaceOfBirth = { valueOf: function(){return 'PlaceOfBirth';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.DateOfBirth = { valueOf: function(){return 'DateOfBirth';}, Type: 'Edm.DateTime', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.Gender = { valueOf: function(){return 'Gender';}, Type: 'BoGenderTypes', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.Profession = { valueOf: function(){return 'Profession';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.Title = { valueOf: function(){return 'Title';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.CityOfBirth = { valueOf: function(){return 'CityOfBirth';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.Active = { valueOf: function(){return 'Active';}, Type: 'BoYesNoEnum', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.FirstName = { valueOf: function(){return 'FirstName';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.MiddleName = { valueOf: function(){return 'MiddleName';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.LastName = { valueOf: function(){return 'LastName';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.EmailGroupCode = { valueOf: function(){return 'EmailGroupCode';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.BlockSendingMarketingContent = { valueOf: function(){return 'BlockSendingMarketingContent';}, Type: 'BoYesNoEnum', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.CreateDate = { valueOf: function(){return 'CreateDate';}, Type: 'Edm.DateTime', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.CreateTime = { valueOf: function(){return 'CreateTime';}, Type: 'Edm.Time', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.UpdateDate = { valueOf: function(){return 'UpdateDate';}, Type: 'Edm.DateTime', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.UpdateTime = { valueOf: function(){return 'UpdateTime';}, Type: 'Edm.Time', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContactEmployee.ContactEmployeeBlockSendingMarketingContents = { valueOf: function(){return 'ContactEmployeeBlockSendingMarketingContents';}, Type: 'ContactEmployeeBlockSendingMarketingContent', Index: 30, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ContactEmployee.prototype.CardCode = new String();
SAPB1.ContactEmployee.prototype.Name = new String();
SAPB1.ContactEmployee.prototype.Position = new String();
SAPB1.ContactEmployee.prototype.Address = new String();
SAPB1.ContactEmployee.prototype.Phone1 = new String();
SAPB1.ContactEmployee.prototype.Phone2 = new String();
SAPB1.ContactEmployee.prototype.MobilePhone = new String();
SAPB1.ContactEmployee.prototype.Fax = new String();
SAPB1.ContactEmployee.prototype.E_Mail = new String();
SAPB1.ContactEmployee.prototype.Pager = new String();
SAPB1.ContactEmployee.prototype.Remarks1 = new String();
SAPB1.ContactEmployee.prototype.Remarks2 = new String();
SAPB1.ContactEmployee.prototype.Password = new String();
SAPB1.ContactEmployee.prototype.InternalCode = new Number();
SAPB1.ContactEmployee.prototype.PlaceOfBirth = new String();
SAPB1.ContactEmployee.prototype.DateOfBirth = new String();
SAPB1.ContactEmployee.prototype.Gender = new String();
SAPB1.ContactEmployee.prototype.Profession = new String();
SAPB1.ContactEmployee.prototype.Title = new String();
SAPB1.ContactEmployee.prototype.CityOfBirth = new String();
SAPB1.ContactEmployee.prototype.Active = new String();
SAPB1.ContactEmployee.prototype.FirstName = new String();
SAPB1.ContactEmployee.prototype.MiddleName = new String();
SAPB1.ContactEmployee.prototype.LastName = new String();
SAPB1.ContactEmployee.prototype.EmailGroupCode = new String();
SAPB1.ContactEmployee.prototype.BlockSendingMarketingContent = new String();
SAPB1.ContactEmployee.prototype.CreateDate = new String();
SAPB1.ContactEmployee.prototype.CreateTime = new String();
SAPB1.ContactEmployee.prototype.UpdateDate = new String();
SAPB1.ContactEmployee.prototype.UpdateTime = new String();
SAPB1.ContactEmployee.prototype.ContactEmployeeBlockSendingMarketingContents = new ContactEmployeeBlockSendingMarketingContentCollection();

SAPB1.ContactEmployee.ContactEmployeeBlockSendingMarketingContent = ContactEmployeeBlockSendingMarketingContent
SAPB1.ContactEmployee.ContactEmployeeBlockSendingMarketingContentCollection = ContactEmployeeBlockSendingMarketingContentCollection

SAPB1.ContactEmployee.BoGenderTypes = BoGenderTypes
SAPB1.ContactEmployee.BoYesNoEnum = BoYesNoEnum

SAPB1.ContactEmployee.create = function (rawObject) {
    var instance = new SAPB1.ContactEmployee();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ContactEmployee.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ContactEmployee;
