var BusinessPlaceIENumber = require('ComplexType/BusinessPlaceIENumber')
var BusinessPlaceIENumberCollection = require('ComplexType/BusinessPlaceIENumberCollection')
var BusinessPlaceTributaryInfo = require('ComplexType/BusinessPlaceTributaryInfo')
var BusinessPlaceTributaryInfoCollection = require('ComplexType/BusinessPlaceTributaryInfoCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BusinessPlace = function () {
}
SAPB1.BusinessPlace.prototype = new SAPB1.EntityType();
SAPB1.BusinessPlace.prototype.constructor = SAPB1.BusinessPlace;
SAPB1.BusinessPlace.prototype.keys.push('BPLID');
SAPB1.BusinessPlace.BPLID = { valueOf: function(){return 'BPLID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.BPLName = { valueOf: function(){return 'BPLName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.BPLNameForeign = { valueOf: function(){return 'BPLNameForeign';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.VATRegNum = { valueOf: function(){return 'VATRegNum';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.RepName = { valueOf: function(){return 'RepName';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.Industry = { valueOf: function(){return 'Industry';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.Business = { valueOf: function(){return 'Business';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.Address = { valueOf: function(){return 'Address';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.Addressforeign = { valueOf: function(){return 'Addressforeign';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.MainBPL = { valueOf: function(){return 'MainBPL';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.TaxOfficeNo = { valueOf: function(){return 'TaxOfficeNo';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.Disabled = { valueOf: function(){return 'Disabled';}, Type: 'BoYesNoEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.DefaultCustomerID = { valueOf: function(){return 'DefaultCustomerID';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.DefaultVendorID = { valueOf: function(){return 'DefaultVendorID';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.DefaultWarehouseID = { valueOf: function(){return 'DefaultWarehouseID';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.DefaultTaxCode = { valueOf: function(){return 'DefaultTaxCode';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.TaxOffice = { valueOf: function(){return 'TaxOffice';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.FederalTaxID = { valueOf: function(){return 'FederalTaxID';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.FederalTaxID2 = { valueOf: function(){return 'FederalTaxID2';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.FederalTaxID3 = { valueOf: function(){return 'FederalTaxID3';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.AdditionalIdNumber = { valueOf: function(){return 'AdditionalIdNumber';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.NatureOfCompanyCode = { valueOf: function(){return 'NatureOfCompanyCode';}, Type: 'Edm.Int32', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.EconomicActivityTypeCode = { valueOf: function(){return 'EconomicActivityTypeCode';}, Type: 'Edm.Int32', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.CreditContributionOriginCode = { valueOf: function(){return 'CreditContributionOriginCode';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.IPIPeriodCode = { valueOf: function(){return 'IPIPeriodCode';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.CooperativeAssociationTypeCode = { valueOf: function(){return 'CooperativeAssociationTypeCode';}, Type: 'Edm.Int32', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.ProfitTaxationCode = { valueOf: function(){return 'ProfitTaxationCode';}, Type: 'Edm.Int32', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.CompanyQualificationCode = { valueOf: function(){return 'CompanyQualificationCode';}, Type: 'Edm.Int32', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.DeclarerTypeCode = { valueOf: function(){return 'DeclarerTypeCode';}, Type: 'Edm.Int32', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.PreferredStateCode = { valueOf: function(){return 'PreferredStateCode';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.AddressType = { valueOf: function(){return 'AddressType';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.Street = { valueOf: function(){return 'Street';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.StreetNo = { valueOf: function(){return 'StreetNo';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.Building = { valueOf: function(){return 'Building';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.ZipCode = { valueOf: function(){return 'ZipCode';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.Block = { valueOf: function(){return 'Block';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.City = { valueOf: function(){return 'City';}, Type: 'Edm.String', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.State = { valueOf: function(){return 'State';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.County = { valueOf: function(){return 'County';}, Type: 'Edm.String', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.Country = { valueOf: function(){return 'Country';}, Type: 'Edm.String', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.AliasName = { valueOf: function(){return 'AliasName';}, Type: 'Edm.String', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.CommercialRegister = { valueOf: function(){return 'CommercialRegister';}, Type: 'Edm.String', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.DateOfIncorporation = { valueOf: function(){return 'DateOfIncorporation';}, Type: 'Edm.DateTime', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.SPEDProfile = { valueOf: function(){return 'SPEDProfile';}, Type: 'Edm.String', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.EnvironmentType = { valueOf: function(){return 'EnvironmentType';}, Type: 'Edm.Int32', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.Opting4ICMS = { valueOf: function(){return 'Opting4ICMS';}, Type: 'BoYesNoEnum', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.PaymentClearingAccount = { valueOf: function(){return 'PaymentClearingAccount';}, Type: 'Edm.String', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.GlobalLocationNumber = { valueOf: function(){return 'GlobalLocationNumber';}, Type: 'Edm.String', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.DefaultResourceWarehouseID = { valueOf: function(){return 'DefaultResourceWarehouseID';}, Type: 'Edm.String', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlace.BusinessPlaceIENumbers = { valueOf: function(){return 'BusinessPlaceIENumbers';}, Type: 'BusinessPlaceIENumber', Index: 49, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.BusinessPlace.BusinessPlaceTributaryInfos = { valueOf: function(){return 'BusinessPlaceTributaryInfos';}, Type: 'BusinessPlaceTributaryInfo', Index: 50, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.BusinessPlace.prototype.BPLID = new Number();
SAPB1.BusinessPlace.prototype.BPLName = new String();
SAPB1.BusinessPlace.prototype.BPLNameForeign = new String();
SAPB1.BusinessPlace.prototype.VATRegNum = new String();
SAPB1.BusinessPlace.prototype.RepName = new String();
SAPB1.BusinessPlace.prototype.Industry = new String();
SAPB1.BusinessPlace.prototype.Business = new String();
SAPB1.BusinessPlace.prototype.Address = new String();
SAPB1.BusinessPlace.prototype.Addressforeign = new String();
SAPB1.BusinessPlace.prototype.MainBPL = new String();
SAPB1.BusinessPlace.prototype.TaxOfficeNo = new String();
SAPB1.BusinessPlace.prototype.Disabled = new String();
SAPB1.BusinessPlace.prototype.DefaultCustomerID = new String();
SAPB1.BusinessPlace.prototype.DefaultVendorID = new String();
SAPB1.BusinessPlace.prototype.DefaultWarehouseID = new String();
SAPB1.BusinessPlace.prototype.DefaultTaxCode = new String();
SAPB1.BusinessPlace.prototype.TaxOffice = new String();
SAPB1.BusinessPlace.prototype.FederalTaxID = new String();
SAPB1.BusinessPlace.prototype.FederalTaxID2 = new String();
SAPB1.BusinessPlace.prototype.FederalTaxID3 = new String();
SAPB1.BusinessPlace.prototype.AdditionalIdNumber = new String();
SAPB1.BusinessPlace.prototype.NatureOfCompanyCode = new Number();
SAPB1.BusinessPlace.prototype.EconomicActivityTypeCode = new Number();
SAPB1.BusinessPlace.prototype.CreditContributionOriginCode = new String();
SAPB1.BusinessPlace.prototype.IPIPeriodCode = new String();
SAPB1.BusinessPlace.prototype.CooperativeAssociationTypeCode = new Number();
SAPB1.BusinessPlace.prototype.ProfitTaxationCode = new Number();
SAPB1.BusinessPlace.prototype.CompanyQualificationCode = new Number();
SAPB1.BusinessPlace.prototype.DeclarerTypeCode = new Number();
SAPB1.BusinessPlace.prototype.PreferredStateCode = new String();
SAPB1.BusinessPlace.prototype.AddressType = new String();
SAPB1.BusinessPlace.prototype.Street = new String();
SAPB1.BusinessPlace.prototype.StreetNo = new String();
SAPB1.BusinessPlace.prototype.Building = new String();
SAPB1.BusinessPlace.prototype.ZipCode = new String();
SAPB1.BusinessPlace.prototype.Block = new String();
SAPB1.BusinessPlace.prototype.City = new String();
SAPB1.BusinessPlace.prototype.State = new String();
SAPB1.BusinessPlace.prototype.County = new String();
SAPB1.BusinessPlace.prototype.Country = new String();
SAPB1.BusinessPlace.prototype.AliasName = new String();
SAPB1.BusinessPlace.prototype.CommercialRegister = new String();
SAPB1.BusinessPlace.prototype.DateOfIncorporation = new String();
SAPB1.BusinessPlace.prototype.SPEDProfile = new String();
SAPB1.BusinessPlace.prototype.EnvironmentType = new Number();
SAPB1.BusinessPlace.prototype.Opting4ICMS = new String();
SAPB1.BusinessPlace.prototype.PaymentClearingAccount = new String();
SAPB1.BusinessPlace.prototype.GlobalLocationNumber = new String();
SAPB1.BusinessPlace.prototype.DefaultResourceWarehouseID = new String();
SAPB1.BusinessPlace.prototype.BusinessPlaceIENumbers = new BusinessPlaceIENumberCollection();
SAPB1.BusinessPlace.prototype.BusinessPlaceTributaryInfos = new BusinessPlaceTributaryInfoCollection();

SAPB1.BusinessPlace.BusinessPlaceIENumber = BusinessPlaceIENumber
SAPB1.BusinessPlace.BusinessPlaceIENumberCollection = BusinessPlaceIENumberCollection
SAPB1.BusinessPlace.BusinessPlaceTributaryInfo = BusinessPlaceTributaryInfo
SAPB1.BusinessPlace.BusinessPlaceTributaryInfoCollection = BusinessPlaceTributaryInfoCollection

SAPB1.BusinessPlace.BoYesNoEnum = BoYesNoEnum

SAPB1.BusinessPlace.create = function (rawObject) {
    var instance = new SAPB1.BusinessPlace();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BusinessPlace.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BusinessPlace;
