
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoSoStatus = require('EnumType/BoSoStatus')
var BoAPARDocumentTypes = require('EnumType/BoAPARDocumentTypes')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesOpportunitiesLine = function () {
}
SAPB1.SalesOpportunitiesLine.prototype = new SAPB1.ComplexType();
SAPB1.SalesOpportunitiesLine.prototype.constructor = SAPB1.SalesOpportunitiesLine;
SAPB1.SalesOpportunitiesLine.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.SalesPerson = { valueOf: function(){return 'SalesPerson';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.ClosingDate = { valueOf: function(){return 'ClosingDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.StageKey = { valueOf: function(){return 'StageKey';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.PercentageRate = { valueOf: function(){return 'PercentageRate';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.MaxLocalTotal = { valueOf: function(){return 'MaxLocalTotal';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.MaxSystemTotal = { valueOf: function(){return 'MaxSystemTotal';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.Contact = { valueOf: function(){return 'Contact';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.Status = { valueOf: function(){return 'Status';}, Type: 'BoSoStatus', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.WeightedAmountLocal = { valueOf: function(){return 'WeightedAmountLocal';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.WeightedAmountSystem = { valueOf: function(){return 'WeightedAmountSystem';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.DocumentNumber = { valueOf: function(){return 'DocumentNumber';}, Type: 'Edm.Int32', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.DocumentType = { valueOf: function(){return 'DocumentType';}, Type: 'BoAPARDocumentTypes', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.DocumentCheckbox = { valueOf: function(){return 'DocumentCheckbox';}, Type: 'BoYesNoEnum', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.ContactPerson = { valueOf: function(){return 'ContactPerson';}, Type: 'Edm.Int32', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.BPChanelName = { valueOf: function(){return 'BPChanelName';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.BPChanelCode = { valueOf: function(){return 'BPChanelCode';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.SequenceNo = { valueOf: function(){return 'SequenceNo';}, Type: 'Edm.Int32', Index: 19, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.DataOwnershipfield = { valueOf: function(){return 'DataOwnershipfield';}, Type: 'Edm.Int32', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.BPChannelContact = { valueOf: function(){return 'BPChannelContact';}, Type: 'Edm.Int32', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesLine.prototype.LineNum = new Number();
SAPB1.SalesOpportunitiesLine.prototype.SalesPerson = new Number();
SAPB1.SalesOpportunitiesLine.prototype.StartDate = new String();
SAPB1.SalesOpportunitiesLine.prototype.ClosingDate = new String();
SAPB1.SalesOpportunitiesLine.prototype.StageKey = new Number();
SAPB1.SalesOpportunitiesLine.prototype.PercentageRate = new Number();
SAPB1.SalesOpportunitiesLine.prototype.MaxLocalTotal = new Number();
SAPB1.SalesOpportunitiesLine.prototype.MaxSystemTotal = new Number();
SAPB1.SalesOpportunitiesLine.prototype.Remarks = new String();
SAPB1.SalesOpportunitiesLine.prototype.Contact = new String();
SAPB1.SalesOpportunitiesLine.prototype.Status = new String();
SAPB1.SalesOpportunitiesLine.prototype.WeightedAmountLocal = new Number();
SAPB1.SalesOpportunitiesLine.prototype.WeightedAmountSystem = new Number();
SAPB1.SalesOpportunitiesLine.prototype.DocumentNumber = new Number();
SAPB1.SalesOpportunitiesLine.prototype.DocumentType = new String();
SAPB1.SalesOpportunitiesLine.prototype.DocumentCheckbox = new String();
SAPB1.SalesOpportunitiesLine.prototype.ContactPerson = new Number();
SAPB1.SalesOpportunitiesLine.prototype.BPChanelName = new String();
SAPB1.SalesOpportunitiesLine.prototype.BPChanelCode = new String();
SAPB1.SalesOpportunitiesLine.prototype.SequenceNo = new Number();
SAPB1.SalesOpportunitiesLine.prototype.DataOwnershipfield = new Number();
SAPB1.SalesOpportunitiesLine.prototype.BPChannelContact = new Number();


SAPB1.SalesOpportunitiesLine.BoYesNoEnum = BoYesNoEnum
SAPB1.SalesOpportunitiesLine.BoSoStatus = BoSoStatus
SAPB1.SalesOpportunitiesLine.BoAPARDocumentTypes = BoAPARDocumentTypes

SAPB1.SalesOpportunitiesLine.create = function (rawObject) {
    var instance = new SAPB1.SalesOpportunitiesLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesOpportunitiesLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesOpportunitiesLine;
