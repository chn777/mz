
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ExtendedAdminInfo = function () {
}
SAPB1.ExtendedAdminInfo.prototype = new SAPB1.ComplexType();
SAPB1.ExtendedAdminInfo.prototype.constructor = SAPB1.ExtendedAdminInfo;
SAPB1.ExtendedAdminInfo.AddressType = { valueOf: function(){return 'AddressType';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.StreetNo = { valueOf: function(){return 'StreetNo';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.STDCode = { valueOf: function(){return 'STDCode';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.STDCodeForeign = { valueOf: function(){return 'STDCodeForeign';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.NatureOfCompanyCode = { valueOf: function(){return 'NatureOfCompanyCode';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.EconomicActivityTypeCode = { valueOf: function(){return 'EconomicActivityTypeCode';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.CreditContributionOriginCode = { valueOf: function(){return 'CreditContributionOriginCode';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.IPIPeriodCode = { valueOf: function(){return 'IPIPeriodCode';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.CooperativeAssociationTypeCode = { valueOf: function(){return 'CooperativeAssociationTypeCode';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.ProfitTaxationCode = { valueOf: function(){return 'ProfitTaxationCode';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.CompanyQualificationCode = { valueOf: function(){return 'CompanyQualificationCode';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.DeclarerTypeCode = { valueOf: function(){return 'DeclarerTypeCode';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.IPITaxContributor = { valueOf: function(){return 'IPITaxContributor';}, Type: 'BoYesNoEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.CommercialRegister = { valueOf: function(){return 'CommercialRegister';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.DateOfIncorporation = { valueOf: function(){return 'DateOfIncorporation';}, Type: 'Edm.DateTime', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.SPEDProfile = { valueOf: function(){return 'SPEDProfile';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.EnvironmentType = { valueOf: function(){return 'EnvironmentType';}, Type: 'Edm.Int32', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.Opting4ICMS = { valueOf: function(){return 'Opting4ICMS';}, Type: 'BoYesNoEnum', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.OKDPNumber = { valueOf: function(){return 'OKDPNumber';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.GlobalLocationNumber = { valueOf: function(){return 'GlobalLocationNumber';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.EnableIntrastat = { valueOf: function(){return 'EnableIntrastat';}, Type: 'BoYesNoEnum', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.AuthorityUser = { valueOf: function(){return 'AuthorityUser';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.AuthorityPassword = { valueOf: function(){return 'AuthorityPassword';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.URLforGoodsTransportService = { valueOf: function(){return 'URLforGoodsTransportService';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.URLforInvoiceTypeService = { valueOf: function(){return 'URLforInvoiceTypeService';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.ElectronicApprovalForGoodsTransEnabled = { valueOf: function(){return 'ElectronicApprovalForGoodsTransEnabled';}, Type: 'BoYesNoEnum', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.ElectronicApprovalForInvoiceEnabled = { valueOf: function(){return 'ElectronicApprovalForInvoiceEnabled';}, Type: 'BoYesNoEnum', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.AllowInactiveItemsInInventoryOpeningBalance = { valueOf: function(){return 'AllowInactiveItemsInInventoryOpeningBalance';}, Type: 'BoYesNoEnum', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.AllowInactiveItemsInInventoryCountingAndPosting = { valueOf: function(){return 'AllowInactiveItemsInInventoryCountingAndPosting';}, Type: 'BoYesNoEnum', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.AutoAssignNewBranchToBP = { valueOf: function(){return 'AutoAssignNewBranchToBP';}, Type: 'BoYesNoEnum', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedAdminInfo.prototype.AddressType = new String();
SAPB1.ExtendedAdminInfo.prototype.StreetNo = new String();
SAPB1.ExtendedAdminInfo.prototype.STDCode = new Number();
SAPB1.ExtendedAdminInfo.prototype.STDCodeForeign = new Number();
SAPB1.ExtendedAdminInfo.prototype.NatureOfCompanyCode = new Number();
SAPB1.ExtendedAdminInfo.prototype.EconomicActivityTypeCode = new Number();
SAPB1.ExtendedAdminInfo.prototype.CreditContributionOriginCode = new String();
SAPB1.ExtendedAdminInfo.prototype.IPIPeriodCode = new String();
SAPB1.ExtendedAdminInfo.prototype.CooperativeAssociationTypeCode = new Number();
SAPB1.ExtendedAdminInfo.prototype.ProfitTaxationCode = new Number();
SAPB1.ExtendedAdminInfo.prototype.CompanyQualificationCode = new Number();
SAPB1.ExtendedAdminInfo.prototype.DeclarerTypeCode = new Number();
SAPB1.ExtendedAdminInfo.prototype.IPITaxContributor = new String();
SAPB1.ExtendedAdminInfo.prototype.CommercialRegister = new String();
SAPB1.ExtendedAdminInfo.prototype.DateOfIncorporation = new String();
SAPB1.ExtendedAdminInfo.prototype.SPEDProfile = new String();
SAPB1.ExtendedAdminInfo.prototype.EnvironmentType = new Number();
SAPB1.ExtendedAdminInfo.prototype.Opting4ICMS = new String();
SAPB1.ExtendedAdminInfo.prototype.OKDPNumber = new String();
SAPB1.ExtendedAdminInfo.prototype.GlobalLocationNumber = new String();
SAPB1.ExtendedAdminInfo.prototype.EnableIntrastat = new String();
SAPB1.ExtendedAdminInfo.prototype.AuthorityUser = new String();
SAPB1.ExtendedAdminInfo.prototype.AuthorityPassword = new String();
SAPB1.ExtendedAdminInfo.prototype.URLforGoodsTransportService = new String();
SAPB1.ExtendedAdminInfo.prototype.URLforInvoiceTypeService = new String();
SAPB1.ExtendedAdminInfo.prototype.ElectronicApprovalForGoodsTransEnabled = new String();
SAPB1.ExtendedAdminInfo.prototype.ElectronicApprovalForInvoiceEnabled = new String();
SAPB1.ExtendedAdminInfo.prototype.AllowInactiveItemsInInventoryOpeningBalance = new String();
SAPB1.ExtendedAdminInfo.prototype.AllowInactiveItemsInInventoryCountingAndPosting = new String();
SAPB1.ExtendedAdminInfo.prototype.AutoAssignNewBranchToBP = new String();


SAPB1.ExtendedAdminInfo.BoYesNoEnum = BoYesNoEnum

SAPB1.ExtendedAdminInfo.create = function (rawObject) {
    var instance = new SAPB1.ExtendedAdminInfo();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ExtendedAdminInfo.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ExtendedAdminInfo;
