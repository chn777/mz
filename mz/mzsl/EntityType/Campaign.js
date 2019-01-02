var CampaignBusinessPartner = require('ComplexType/CampaignBusinessPartner')
var CampaignBusinessPartnerCollection = require('ComplexType/CampaignBusinessPartnerCollection')
var CampaignItem = require('ComplexType/CampaignItem')
var CampaignItemCollection = require('ComplexType/CampaignItemCollection')
var CampaignPartner = require('ComplexType/CampaignPartner')
var CampaignPartnerCollection = require('ComplexType/CampaignPartnerCollection')

var CampaignTypeEnum = require('EnumType/CampaignTypeEnum')
var CampaignStatusEnum = require('EnumType/CampaignStatusEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var TargetGroupTypeEnum = require('EnumType/TargetGroupTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Campaign = function () {
}
SAPB1.Campaign.prototype = new SAPB1.EntityType();
SAPB1.Campaign.prototype.constructor = SAPB1.Campaign;
SAPB1.Campaign.prototype.keys.push('CampaignNumber');
SAPB1.Campaign.CampaignNumber = { valueOf: function(){return 'CampaignNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Campaign.CampaignName = { valueOf: function(){return 'CampaignName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Campaign.CampaignType = { valueOf: function(){return 'CampaignType';}, Type: 'CampaignTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Campaign.TargetGroup = { valueOf: function(){return 'TargetGroup';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Campaign.Owner = { valueOf: function(){return 'Owner';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Campaign.Status = { valueOf: function(){return 'Status';}, Type: 'CampaignStatusEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Campaign.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Campaign.FinishDate = { valueOf: function(){return 'FinishDate';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Campaign.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Campaign.GeneratedByWizard = { valueOf: function(){return 'GeneratedByWizard';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Campaign.AttachementsEntry = { valueOf: function(){return 'AttachementsEntry';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Campaign.TargetGroupType = { valueOf: function(){return 'TargetGroupType';}, Type: 'TargetGroupTypeEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Campaign.CampaignBusinessPartners = { valueOf: function(){return 'CampaignBusinessPartners';}, Type: 'CampaignBusinessPartner', Index: 12, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Campaign.CampaignItems = { valueOf: function(){return 'CampaignItems';}, Type: 'CampaignItem', Index: 13, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Campaign.CampaignPartners = { valueOf: function(){return 'CampaignPartners';}, Type: 'CampaignPartner', Index: 14, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Campaign.prototype.CampaignNumber = new Number();
SAPB1.Campaign.prototype.CampaignName = new String();
SAPB1.Campaign.prototype.CampaignType = new String();
SAPB1.Campaign.prototype.TargetGroup = new String();
SAPB1.Campaign.prototype.Owner = new Number();
SAPB1.Campaign.prototype.Status = new String();
SAPB1.Campaign.prototype.StartDate = new String();
SAPB1.Campaign.prototype.FinishDate = new String();
SAPB1.Campaign.prototype.Remarks = new String();
SAPB1.Campaign.prototype.GeneratedByWizard = new String();
SAPB1.Campaign.prototype.AttachementsEntry = new Number();
SAPB1.Campaign.prototype.TargetGroupType = new String();
SAPB1.Campaign.prototype.CampaignBusinessPartners = new CampaignBusinessPartnerCollection();
SAPB1.Campaign.prototype.CampaignItems = new CampaignItemCollection();
SAPB1.Campaign.prototype.CampaignPartners = new CampaignPartnerCollection();

SAPB1.Campaign.CampaignBusinessPartner = CampaignBusinessPartner
SAPB1.Campaign.CampaignBusinessPartnerCollection = CampaignBusinessPartnerCollection
SAPB1.Campaign.CampaignItem = CampaignItem
SAPB1.Campaign.CampaignItemCollection = CampaignItemCollection
SAPB1.Campaign.CampaignPartner = CampaignPartner
SAPB1.Campaign.CampaignPartnerCollection = CampaignPartnerCollection

SAPB1.Campaign.CampaignTypeEnum = CampaignTypeEnum
SAPB1.Campaign.CampaignStatusEnum = CampaignStatusEnum
SAPB1.Campaign.BoYesNoEnum = BoYesNoEnum
SAPB1.Campaign.TargetGroupTypeEnum = TargetGroupTypeEnum

SAPB1.Campaign.create = function (rawObject) {
    var instance = new SAPB1.Campaign();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Campaign.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Campaign;
