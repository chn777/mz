var SalesOpportunitiesLine = require('ComplexType/SalesOpportunitiesLine')
var SalesOpportunitiesLineCollection = require('ComplexType/SalesOpportunitiesLineCollection')
var SalesOpportunitiesCompetitionItem = require('ComplexType/SalesOpportunitiesCompetitionItem')
var SalesOpportunitiesCompetitionItemCollection = require('ComplexType/SalesOpportunitiesCompetitionItemCollection')
var SalesOpportunitiesPartner = require('ComplexType/SalesOpportunitiesPartner')
var SalesOpportunitiesPartnerCollection = require('ComplexType/SalesOpportunitiesPartnerCollection')
var SalesOpportunitiesInterest = require('ComplexType/SalesOpportunitiesInterest')
var SalesOpportunitiesInterestCollection = require('ComplexType/SalesOpportunitiesInterestCollection')
var SalesOpportunitiesReason = require('ComplexType/SalesOpportunitiesReason')
var SalesOpportunitiesReasonCollection = require('ComplexType/SalesOpportunitiesReasonCollection')

var BoSoOsStatus = require('EnumType/BoSoOsStatus')
var BoSoClosedInTypes = require('EnumType/BoSoClosedInTypes')
var OpportunityTypeEnum = require('EnumType/OpportunityTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesOpportunities = function () {
}
SAPB1.SalesOpportunities.prototype = new SAPB1.EntityType();
SAPB1.SalesOpportunities.prototype.constructor = SAPB1.SalesOpportunities;
SAPB1.SalesOpportunities.prototype.keys.push('SequentialNo');
SAPB1.SalesOpportunities.SequentialNo = { valueOf: function(){return 'SequentialNo';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.SalesPerson = { valueOf: function(){return 'SalesPerson';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.ContactPerson = { valueOf: function(){return 'ContactPerson';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.Source = { valueOf: function(){return 'Source';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.InterestField1 = { valueOf: function(){return 'InterestField1';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.InterestField2 = { valueOf: function(){return 'InterestField2';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.InterestField3 = { valueOf: function(){return 'InterestField3';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.InterestLevel = { valueOf: function(){return 'InterestLevel';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.PredictedClosingDate = { valueOf: function(){return 'PredictedClosingDate';}, Type: 'Edm.DateTime', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.MaxLocalTotal = { valueOf: function(){return 'MaxLocalTotal';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.MaxSystemTotal = { valueOf: function(){return 'MaxSystemTotal';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.WeightedSumLC = { valueOf: function(){return 'WeightedSumLC';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.WeightedSumSC = { valueOf: function(){return 'WeightedSumSC';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.GrossProfit = { valueOf: function(){return 'GrossProfit';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.GrossProfitTotalLocal = { valueOf: function(){return 'GrossProfitTotalLocal';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.GrossProfitTotalSystem = { valueOf: function(){return 'GrossProfitTotalSystem';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.Status = { valueOf: function(){return 'Status';}, Type: 'BoSoOsStatus', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.ReasonForClosing = { valueOf: function(){return 'ReasonForClosing';}, Type: 'Edm.Int32', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.TotalAmountLocal = { valueOf: function(){return 'TotalAmountLocal';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.TotalAmounSystem = { valueOf: function(){return 'TotalAmounSystem';}, Type: 'Edm.Double', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.ClosingGrossProfitLocal = { valueOf: function(){return 'ClosingGrossProfitLocal';}, Type: 'Edm.Double', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.ClosingGrossProfitSystem = { valueOf: function(){return 'ClosingGrossProfitSystem';}, Type: 'Edm.Double', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.ClosingPercentage = { valueOf: function(){return 'ClosingPercentage';}, Type: 'Edm.Double', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.CurrentStageNo = { valueOf: function(){return 'CurrentStageNo';}, Type: 'Edm.Int32', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.CurrentStageNumber = { valueOf: function(){return 'CurrentStageNumber';}, Type: 'Edm.Int32', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.OpportunityName = { valueOf: function(){return 'OpportunityName';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.Industry = { valueOf: function(){return 'Industry';}, Type: 'Edm.Int32', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.LinkedDocumentType = { valueOf: function(){return 'LinkedDocumentType';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.DataOwnershipfield = { valueOf: function(){return 'DataOwnershipfield';}, Type: 'Edm.Int32', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.StatusRemarks = { valueOf: function(){return 'StatusRemarks';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.ProjectCode = { valueOf: function(){return 'ProjectCode';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.BPChanelName = { valueOf: function(){return 'BPChanelName';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.UserSignature = { valueOf: function(){return 'UserSignature';}, Type: 'Edm.Int32', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.CustomerName = { valueOf: function(){return 'CustomerName';}, Type: 'Edm.String', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.DocumentCheckbox = { valueOf: function(){return 'DocumentCheckbox';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.LinkedDocumentNumber = { valueOf: function(){return 'LinkedDocumentNumber';}, Type: 'Edm.Int32', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.Territory = { valueOf: function(){return 'Territory';}, Type: 'Edm.Int32', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.ClosingDate = { valueOf: function(){return 'ClosingDate';}, Type: 'Edm.DateTime', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.BPChannelContact = { valueOf: function(){return 'BPChannelContact';}, Type: 'Edm.Int32', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.BPChanelCode = { valueOf: function(){return 'BPChanelCode';}, Type: 'Edm.String', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.ClosingType = { valueOf: function(){return 'ClosingType';}, Type: 'BoSoClosedInTypes', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.AttachmentEntry = { valueOf: function(){return 'AttachmentEntry';}, Type: 'Edm.Int32', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.OpportunityType = { valueOf: function(){return 'OpportunityType';}, Type: 'OpportunityTypeEnum', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.UpdateDate = { valueOf: function(){return 'UpdateDate';}, Type: 'Edm.DateTime', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.UpdateTime = { valueOf: function(){return 'UpdateTime';}, Type: 'Edm.Time', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunities.SalesOpportunitiesLines = { valueOf: function(){return 'SalesOpportunitiesLines';}, Type: 'SalesOpportunitiesLine', Index: 48, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.SalesOpportunities.SalesOpportunitiesCompetition = { valueOf: function(){return 'SalesOpportunitiesCompetition';}, Type: 'SalesOpportunitiesCompetitionItem', Index: 49, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.SalesOpportunities.SalesOpportunitiesPartners = { valueOf: function(){return 'SalesOpportunitiesPartners';}, Type: 'SalesOpportunitiesPartner', Index: 50, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.SalesOpportunities.SalesOpportunitiesInterests = { valueOf: function(){return 'SalesOpportunitiesInterests';}, Type: 'SalesOpportunitiesInterest', Index: 51, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.SalesOpportunities.SalesOpportunitiesReasons = { valueOf: function(){return 'SalesOpportunitiesReasons';}, Type: 'SalesOpportunitiesReason', Index: 52, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.SalesOpportunities.prototype.SequentialNo = new Number();
SAPB1.SalesOpportunities.prototype.CardCode = new String();
SAPB1.SalesOpportunities.prototype.SalesPerson = new Number();
SAPB1.SalesOpportunities.prototype.ContactPerson = new Number();
SAPB1.SalesOpportunities.prototype.Source = new Number();
SAPB1.SalesOpportunities.prototype.InterestField1 = new Number();
SAPB1.SalesOpportunities.prototype.InterestField2 = new Number();
SAPB1.SalesOpportunities.prototype.InterestField3 = new Number();
SAPB1.SalesOpportunities.prototype.InterestLevel = new Number();
SAPB1.SalesOpportunities.prototype.StartDate = new String();
SAPB1.SalesOpportunities.prototype.PredictedClosingDate = new String();
SAPB1.SalesOpportunities.prototype.MaxLocalTotal = new Number();
SAPB1.SalesOpportunities.prototype.MaxSystemTotal = new Number();
SAPB1.SalesOpportunities.prototype.WeightedSumLC = new Number();
SAPB1.SalesOpportunities.prototype.WeightedSumSC = new Number();
SAPB1.SalesOpportunities.prototype.GrossProfit = new Number();
SAPB1.SalesOpportunities.prototype.GrossProfitTotalLocal = new Number();
SAPB1.SalesOpportunities.prototype.GrossProfitTotalSystem = new Number();
SAPB1.SalesOpportunities.prototype.Remarks = new String();
SAPB1.SalesOpportunities.prototype.Status = new String();
SAPB1.SalesOpportunities.prototype.ReasonForClosing = new Number();
SAPB1.SalesOpportunities.prototype.TotalAmountLocal = new Number();
SAPB1.SalesOpportunities.prototype.TotalAmounSystem = new Number();
SAPB1.SalesOpportunities.prototype.ClosingGrossProfitLocal = new Number();
SAPB1.SalesOpportunities.prototype.ClosingGrossProfitSystem = new Number();
SAPB1.SalesOpportunities.prototype.ClosingPercentage = new Number();
SAPB1.SalesOpportunities.prototype.CurrentStageNo = new Number();
SAPB1.SalesOpportunities.prototype.CurrentStageNumber = new Number();
SAPB1.SalesOpportunities.prototype.OpportunityName = new String();
SAPB1.SalesOpportunities.prototype.Industry = new Number();
SAPB1.SalesOpportunities.prototype.LinkedDocumentType = new String();
SAPB1.SalesOpportunities.prototype.DataOwnershipfield = new Number();
SAPB1.SalesOpportunities.prototype.StatusRemarks = new String();
SAPB1.SalesOpportunities.prototype.ProjectCode = new String();
SAPB1.SalesOpportunities.prototype.BPChanelName = new String();
SAPB1.SalesOpportunities.prototype.UserSignature = new Number();
SAPB1.SalesOpportunities.prototype.CustomerName = new String();
SAPB1.SalesOpportunities.prototype.DocumentCheckbox = new String();
SAPB1.SalesOpportunities.prototype.LinkedDocumentNumber = new Number();
SAPB1.SalesOpportunities.prototype.Territory = new Number();
SAPB1.SalesOpportunities.prototype.ClosingDate = new String();
SAPB1.SalesOpportunities.prototype.BPChannelContact = new Number();
SAPB1.SalesOpportunities.prototype.BPChanelCode = new String();
SAPB1.SalesOpportunities.prototype.ClosingType = new String();
SAPB1.SalesOpportunities.prototype.AttachmentEntry = new Number();
SAPB1.SalesOpportunities.prototype.OpportunityType = new String();
SAPB1.SalesOpportunities.prototype.UpdateDate = new String();
SAPB1.SalesOpportunities.prototype.UpdateTime = new String();
SAPB1.SalesOpportunities.prototype.SalesOpportunitiesLines = new SalesOpportunitiesLineCollection();
SAPB1.SalesOpportunities.prototype.SalesOpportunitiesCompetition = new SalesOpportunitiesCompetitionItemCollection();
SAPB1.SalesOpportunities.prototype.SalesOpportunitiesPartners = new SalesOpportunitiesPartnerCollection();
SAPB1.SalesOpportunities.prototype.SalesOpportunitiesInterests = new SalesOpportunitiesInterestCollection();
SAPB1.SalesOpportunities.prototype.SalesOpportunitiesReasons = new SalesOpportunitiesReasonCollection();

SAPB1.SalesOpportunities.SalesOpportunitiesLine = SalesOpportunitiesLine
SAPB1.SalesOpportunities.SalesOpportunitiesLineCollection = SalesOpportunitiesLineCollection
SAPB1.SalesOpportunities.SalesOpportunitiesCompetitionItem = SalesOpportunitiesCompetitionItem
SAPB1.SalesOpportunities.SalesOpportunitiesCompetitionItemCollection = SalesOpportunitiesCompetitionItemCollection
SAPB1.SalesOpportunities.SalesOpportunitiesPartner = SalesOpportunitiesPartner
SAPB1.SalesOpportunities.SalesOpportunitiesPartnerCollection = SalesOpportunitiesPartnerCollection
SAPB1.SalesOpportunities.SalesOpportunitiesInterest = SalesOpportunitiesInterest
SAPB1.SalesOpportunities.SalesOpportunitiesInterestCollection = SalesOpportunitiesInterestCollection
SAPB1.SalesOpportunities.SalesOpportunitiesReason = SalesOpportunitiesReason
SAPB1.SalesOpportunities.SalesOpportunitiesReasonCollection = SalesOpportunitiesReasonCollection

SAPB1.SalesOpportunities.BoSoOsStatus = BoSoOsStatus
SAPB1.SalesOpportunities.BoSoClosedInTypes = BoSoClosedInTypes
SAPB1.SalesOpportunities.OpportunityTypeEnum = OpportunityTypeEnum

SAPB1.SalesOpportunities.create = function (rawObject) {
    var instance = new SAPB1.SalesOpportunities();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesOpportunities.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesOpportunities;
