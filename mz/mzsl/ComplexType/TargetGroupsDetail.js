
var TargetGroupsDetailStatusEnum = require('EnumType/TargetGroupsDetailStatusEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TargetGroupsDetail = function () {
}
SAPB1.TargetGroupsDetail.prototype = new SAPB1.ComplexType();
SAPB1.TargetGroupsDetail.prototype.constructor = SAPB1.TargetGroupsDetail;
SAPB1.TargetGroupsDetail.TargetGroupCode = { valueOf: function(){return 'TargetGroupCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.BusinessPartnerCode = { valueOf: function(){return 'BusinessPartnerCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.BusinessPartnerName = { valueOf: function(){return 'BusinessPartnerName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.GroupCode = { valueOf: function(){return 'GroupCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.Industry = { valueOf: function(){return 'Industry';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.ActiveStatus = { valueOf: function(){return 'ActiveStatus';}, Type: 'TargetGroupsDetailStatusEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.ContactPerson = { valueOf: function(){return 'ContactPerson';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.Title = { valueOf: function(){return 'Title';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.Position = { valueOf: function(){return 'Position';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.E_Mail = { valueOf: function(){return 'E_Mail';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.Telephone = { valueOf: function(){return 'Telephone';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.MobilePhone = { valueOf: function(){return 'MobilePhone';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.Fax = { valueOf: function(){return 'Fax';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.Address = { valueOf: function(){return 'Address';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.Street = { valueOf: function(){return 'Street';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.Block = { valueOf: function(){return 'Block';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.City = { valueOf: function(){return 'City';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.ZipCode = { valueOf: function(){return 'ZipCode';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.County = { valueOf: function(){return 'County';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.State = { valueOf: function(){return 'State';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.Country = { valueOf: function(){return 'Country';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.Building = { valueOf: function(){return 'Building';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TargetGroupsDetail.prototype.TargetGroupCode = new String();
SAPB1.TargetGroupsDetail.prototype.BusinessPartnerCode = new String();
SAPB1.TargetGroupsDetail.prototype.BusinessPartnerName = new String();
SAPB1.TargetGroupsDetail.prototype.GroupCode = new String();
SAPB1.TargetGroupsDetail.prototype.Industry = new String();
SAPB1.TargetGroupsDetail.prototype.ActiveStatus = new String();
SAPB1.TargetGroupsDetail.prototype.ContactPerson = new String();
SAPB1.TargetGroupsDetail.prototype.Title = new String();
SAPB1.TargetGroupsDetail.prototype.Position = new String();
SAPB1.TargetGroupsDetail.prototype.E_Mail = new String();
SAPB1.TargetGroupsDetail.prototype.Telephone = new String();
SAPB1.TargetGroupsDetail.prototype.MobilePhone = new String();
SAPB1.TargetGroupsDetail.prototype.Fax = new String();
SAPB1.TargetGroupsDetail.prototype.Address = new String();
SAPB1.TargetGroupsDetail.prototype.Street = new String();
SAPB1.TargetGroupsDetail.prototype.Block = new String();
SAPB1.TargetGroupsDetail.prototype.City = new String();
SAPB1.TargetGroupsDetail.prototype.ZipCode = new String();
SAPB1.TargetGroupsDetail.prototype.County = new String();
SAPB1.TargetGroupsDetail.prototype.State = new String();
SAPB1.TargetGroupsDetail.prototype.Country = new String();
SAPB1.TargetGroupsDetail.prototype.Building = new String();


SAPB1.TargetGroupsDetail.TargetGroupsDetailStatusEnum = TargetGroupsDetailStatusEnum

SAPB1.TargetGroupsDetail.create = function (rawObject) {
    var instance = new SAPB1.TargetGroupsDetail();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TargetGroupsDetail.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TargetGroupsDetail;
