
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var LinkedDocTypeEnum = require('EnumType/LinkedDocTypeEnum')
var CampaignAssignToEnum = require('EnumType/CampaignAssignToEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CampaignBusinessPartner = function () {
}
SAPB1.CampaignBusinessPartner.prototype = new SAPB1.ComplexType();
SAPB1.CampaignBusinessPartner.prototype.constructor = SAPB1.CampaignBusinessPartner;
SAPB1.CampaignBusinessPartner.CampaignNumber = { valueOf: function(){return 'CampaignNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.CampaignLineNumber = { valueOf: function(){return 'CampaignLineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.BPName = { valueOf: function(){return 'BPName';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.BPGroupName = { valueOf: function(){return 'BPGroupName';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.BPIndustryName = { valueOf: function(){return 'BPIndustryName';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.BPStatus = { valueOf: function(){return 'BPStatus';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.ContactCode = { valueOf: function(){return 'ContactCode';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.ContactTitle = { valueOf: function(){return 'ContactTitle';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.ContactPosition = { valueOf: function(){return 'ContactPosition';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.ContactEmail = { valueOf: function(){return 'ContactEmail';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.ContactTelephone = { valueOf: function(){return 'ContactTelephone';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.ContactMobile = { valueOf: function(){return 'ContactMobile';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.ContactFax = { valueOf: function(){return 'ContactFax';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.ContactAddress = { valueOf: function(){return 'ContactAddress';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.Response = { valueOf: function(){return 'Response';}, Type: 'BoYesNoEnum', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.RelatedSalesOpportunity = { valueOf: function(){return 'RelatedSalesOpportunity';}, Type: 'Edm.Int32', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.Street = { valueOf: function(){return 'Street';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.Block = { valueOf: function(){return 'Block';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.City = { valueOf: function(){return 'City';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.ZipCode = { valueOf: function(){return 'ZipCode';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.County = { valueOf: function(){return 'County';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.State = { valueOf: function(){return 'State';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.Country = { valueOf: function(){return 'Country';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.Building = { valueOf: function(){return 'Building';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.DocType = { valueOf: function(){return 'DocType';}, Type: 'LinkedDocTypeEnum', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.IsShowLinkedDoc = { valueOf: function(){return 'IsShowLinkedDoc';}, Type: 'BoYesNoEnum', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.DocNumber = { valueOf: function(){return 'DocNumber';}, Type: 'Edm.Int32', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.FirstName = { valueOf: function(){return 'FirstName';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.MiddleName = { valueOf: function(){return 'MiddleName';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.LastName = { valueOf: function(){return 'LastName';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.AddressID = { valueOf: function(){return 'AddressID';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.AddressType = { valueOf: function(){return 'AddressType';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.AddressName2 = { valueOf: function(){return 'AddressName2';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.AddressName3 = { valueOf: function(){return 'AddressName3';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.FederalTaxID = { valueOf: function(){return 'FederalTaxID';}, Type: 'Edm.String', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.StreetNo = { valueOf: function(){return 'StreetNo';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.CreateActivity = { valueOf: function(){return 'CreateActivity';}, Type: 'BoYesNoEnum', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.AssignTo = { valueOf: function(){return 'AssignTo';}, Type: 'CampaignAssignToEnum', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.AssignName = { valueOf: function(){return 'AssignName';}, Type: 'Edm.Int32', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.ResponseType = { valueOf: function(){return 'ResponseType';}, Type: 'Edm.String', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CampaignBusinessPartner.prototype.CampaignNumber = new Number();
SAPB1.CampaignBusinessPartner.prototype.CampaignLineNumber = new Number();
SAPB1.CampaignBusinessPartner.prototype.BPCode = new String();
SAPB1.CampaignBusinessPartner.prototype.BPName = new String();
SAPB1.CampaignBusinessPartner.prototype.BPGroupName = new String();
SAPB1.CampaignBusinessPartner.prototype.BPIndustryName = new String();
SAPB1.CampaignBusinessPartner.prototype.BPStatus = new String();
SAPB1.CampaignBusinessPartner.prototype.ContactCode = new String();
SAPB1.CampaignBusinessPartner.prototype.ContactTitle = new String();
SAPB1.CampaignBusinessPartner.prototype.ContactPosition = new String();
SAPB1.CampaignBusinessPartner.prototype.ContactEmail = new String();
SAPB1.CampaignBusinessPartner.prototype.ContactTelephone = new String();
SAPB1.CampaignBusinessPartner.prototype.ContactMobile = new String();
SAPB1.CampaignBusinessPartner.prototype.ContactFax = new String();
SAPB1.CampaignBusinessPartner.prototype.ContactAddress = new String();
SAPB1.CampaignBusinessPartner.prototype.Response = new String();
SAPB1.CampaignBusinessPartner.prototype.RelatedSalesOpportunity = new Number();
SAPB1.CampaignBusinessPartner.prototype.Street = new String();
SAPB1.CampaignBusinessPartner.prototype.Block = new String();
SAPB1.CampaignBusinessPartner.prototype.City = new String();
SAPB1.CampaignBusinessPartner.prototype.ZipCode = new String();
SAPB1.CampaignBusinessPartner.prototype.County = new String();
SAPB1.CampaignBusinessPartner.prototype.State = new String();
SAPB1.CampaignBusinessPartner.prototype.Country = new String();
SAPB1.CampaignBusinessPartner.prototype.Building = new String();
SAPB1.CampaignBusinessPartner.prototype.DocType = new String();
SAPB1.CampaignBusinessPartner.prototype.IsShowLinkedDoc = new String();
SAPB1.CampaignBusinessPartner.prototype.DocNumber = new Number();
SAPB1.CampaignBusinessPartner.prototype.DocEntry = new Number();
SAPB1.CampaignBusinessPartner.prototype.FirstName = new String();
SAPB1.CampaignBusinessPartner.prototype.MiddleName = new String();
SAPB1.CampaignBusinessPartner.prototype.LastName = new String();
SAPB1.CampaignBusinessPartner.prototype.AddressID = new String();
SAPB1.CampaignBusinessPartner.prototype.AddressType = new String();
SAPB1.CampaignBusinessPartner.prototype.AddressName2 = new String();
SAPB1.CampaignBusinessPartner.prototype.AddressName3 = new String();
SAPB1.CampaignBusinessPartner.prototype.FederalTaxID = new String();
SAPB1.CampaignBusinessPartner.prototype.StreetNo = new String();
SAPB1.CampaignBusinessPartner.prototype.CreateActivity = new String();
SAPB1.CampaignBusinessPartner.prototype.AssignTo = new String();
SAPB1.CampaignBusinessPartner.prototype.AssignName = new Number();
SAPB1.CampaignBusinessPartner.prototype.ResponseType = new String();


SAPB1.CampaignBusinessPartner.BoYesNoEnum = BoYesNoEnum
SAPB1.CampaignBusinessPartner.LinkedDocTypeEnum = LinkedDocTypeEnum
SAPB1.CampaignBusinessPartner.CampaignAssignToEnum = CampaignAssignToEnum

SAPB1.CampaignBusinessPartner.create = function (rawObject) {
    var instance = new SAPB1.CampaignBusinessPartner();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CampaignBusinessPartner.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CampaignBusinessPartner;
