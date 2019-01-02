var WTGroups = require('ComplexType/WTGroups')
var WTGroupsCollection = require('ComplexType/WTGroupsCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WithholdingTaxCertificatesData = function () {
}
SAPB1.WithholdingTaxCertificatesData.prototype = new SAPB1.ComplexType();
SAPB1.WithholdingTaxCertificatesData.prototype.constructor = SAPB1.WithholdingTaxCertificatesData;
SAPB1.WithholdingTaxCertificatesData.POICodeRef = { valueOf: function(){return 'POICodeRef';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCertificatesData.POICode = { valueOf: function(){return 'POICode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCertificatesData.Certificate = { valueOf: function(){return 'Certificate';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCertificatesData.WTaxType = { valueOf: function(){return 'WTaxType';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCertificatesData.PeriodIndicator = { valueOf: function(){return 'PeriodIndicator';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCertificatesData.WhtAbsId = { valueOf: function(){return 'WhtAbsId';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCertificatesData.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCertificatesData.Number = { valueOf: function(){return 'Number';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCertificatesData.IssueDate = { valueOf: function(){return 'IssueDate';}, Type: 'Edm.DateTime', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCertificatesData.SumVATAmount = { valueOf: function(){return 'SumVATAmount';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCertificatesData.SumDocTotal = { valueOf: function(){return 'SumDocTotal';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCertificatesData.SumBaseAmount = { valueOf: function(){return 'SumBaseAmount';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCertificatesData.SumAccumAmount = { valueOf: function(){return 'SumAccumAmount';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCertificatesData.SumPercAmount = { valueOf: function(){return 'SumPercAmount';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCertificatesData.WTGroupsCollection = { valueOf: function(){return 'WTGroupsCollection';}, Type: 'WTGroups', Index: 14, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.WithholdingTaxCertificatesData.prototype.POICodeRef = new String();
SAPB1.WithholdingTaxCertificatesData.prototype.POICode = new String();
SAPB1.WithholdingTaxCertificatesData.prototype.Certificate = new String();
SAPB1.WithholdingTaxCertificatesData.prototype.WTaxType = new String();
SAPB1.WithholdingTaxCertificatesData.prototype.PeriodIndicator = new String();
SAPB1.WithholdingTaxCertificatesData.prototype.WhtAbsId = new Number();
SAPB1.WithholdingTaxCertificatesData.prototype.Series = new Number();
SAPB1.WithholdingTaxCertificatesData.prototype.Number = new Number();
SAPB1.WithholdingTaxCertificatesData.prototype.IssueDate = new String();
SAPB1.WithholdingTaxCertificatesData.prototype.SumVATAmount = new Number();
SAPB1.WithholdingTaxCertificatesData.prototype.SumDocTotal = new Number();
SAPB1.WithholdingTaxCertificatesData.prototype.SumBaseAmount = new Number();
SAPB1.WithholdingTaxCertificatesData.prototype.SumAccumAmount = new Number();
SAPB1.WithholdingTaxCertificatesData.prototype.SumPercAmount = new Number();
SAPB1.WithholdingTaxCertificatesData.prototype.WTGroupsCollection = new WTGroupsCollection();

SAPB1.WithholdingTaxCertificatesData.WTGroups = WTGroups
SAPB1.WithholdingTaxCertificatesData.WTGroupsCollection = WTGroupsCollection


SAPB1.WithholdingTaxCertificatesData.create = function (rawObject) {
    var instance = new SAPB1.WithholdingTaxCertificatesData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WithholdingTaxCertificatesData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WithholdingTaxCertificatesData;
