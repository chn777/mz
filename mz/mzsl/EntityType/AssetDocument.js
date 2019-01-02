var AssetDocumentLine = require('ComplexType/AssetDocumentLine')
var AssetDocumentLineCollection = require('ComplexType/AssetDocumentLineCollection')
var AssetDocumentAreaJournal = require('ComplexType/AssetDocumentAreaJournal')
var AssetDocumentAreaJournalCollection = require('ComplexType/AssetDocumentAreaJournalCollection')

var AssetDocumentStatusEnum = require('EnumType/AssetDocumentStatusEnum')
var AssetDocumentTypeEnum = require('EnumType/AssetDocumentTypeEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var ClosingOptionEnum = require('EnumType/ClosingOptionEnum')
var AssetOriginalTypeEnum = require('EnumType/AssetOriginalTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AssetDocument = function () {
}
SAPB1.AssetDocument.prototype = new SAPB1.EntityType();
SAPB1.AssetDocument.prototype.constructor = SAPB1.AssetDocument;
SAPB1.AssetDocument.prototype.keys.push('DocEntry');
SAPB1.AssetDocument.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.DocNum = { valueOf: function(){return 'DocNum';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.PostingDate = { valueOf: function(){return 'PostingDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.DocumentDate = { valueOf: function(){return 'DocumentDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.Status = { valueOf: function(){return 'Status';}, Type: 'AssetDocumentStatusEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.Reference = { valueOf: function(){return 'Reference';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.Currency = { valueOf: function(){return 'Currency';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.DocumentRate = { valueOf: function(){return 'DocumentRate';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.DocumentTotal = { valueOf: function(){return 'DocumentTotal';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.DocumentTotalFC = { valueOf: function(){return 'DocumentTotalFC';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.DocumentTotalSC = { valueOf: function(){return 'DocumentTotalSC';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.AssetValueDate = { valueOf: function(){return 'AssetValueDate';}, Type: 'Edm.DateTime', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.DocumentType = { valueOf: function(){return 'DocumentType';}, Type: 'AssetDocumentTypeEnum', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.SummerizeByProjects = { valueOf: function(){return 'SummerizeByProjects';}, Type: 'BoYesNoEnum', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.SummerizeByDistributionRules = { valueOf: function(){return 'SummerizeByDistributionRules';}, Type: 'BoYesNoEnum', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.ManualDepreciationType = { valueOf: function(){return 'ManualDepreciationType';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.HandWritten = { valueOf: function(){return 'HandWritten';}, Type: 'BoYesNoEnum', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.CancellationDate = { valueOf: function(){return 'CancellationDate';}, Type: 'Edm.DateTime', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.DepreciationArea = { valueOf: function(){return 'DepreciationArea';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.BPLId = { valueOf: function(){return 'BPLId';}, Type: 'Edm.Int32', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.Origin = { valueOf: function(){return 'Origin';}, Type: 'Edm.Int32', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.LowValueAssetRetirement = { valueOf: function(){return 'LowValueAssetRetirement';}, Type: 'BoYesNoEnum', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.CancellationOption = { valueOf: function(){return 'CancellationOption';}, Type: 'ClosingOptionEnum', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.OriginalType = { valueOf: function(){return 'OriginalType';}, Type: 'AssetOriginalTypeEnum', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.BaseReference = { valueOf: function(){return 'BaseReference';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.BPLName = { valueOf: function(){return 'BPLName';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.VATRegNum = { valueOf: function(){return 'VATRegNum';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocument.AssetDocumentLineCollection = { valueOf: function(){return 'AssetDocumentLineCollection';}, Type: 'AssetDocumentLine', Index: 29, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.AssetDocument.AssetDocumentAreaJournalCollection = { valueOf: function(){return 'AssetDocumentAreaJournalCollection';}, Type: 'AssetDocumentAreaJournal', Index: 30, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.AssetDocument.prototype.DocEntry = new Number();
SAPB1.AssetDocument.prototype.DocNum = new Number();
SAPB1.AssetDocument.prototype.Series = new Number();
SAPB1.AssetDocument.prototype.PostingDate = new String();
SAPB1.AssetDocument.prototype.DocumentDate = new String();
SAPB1.AssetDocument.prototype.Status = new String();
SAPB1.AssetDocument.prototype.Remarks = new String();
SAPB1.AssetDocument.prototype.Reference = new String();
SAPB1.AssetDocument.prototype.Currency = new String();
SAPB1.AssetDocument.prototype.DocumentRate = new Number();
SAPB1.AssetDocument.prototype.DocumentTotal = new Number();
SAPB1.AssetDocument.prototype.DocumentTotalFC = new Number();
SAPB1.AssetDocument.prototype.DocumentTotalSC = new Number();
SAPB1.AssetDocument.prototype.AssetValueDate = new String();
SAPB1.AssetDocument.prototype.DocumentType = new String();
SAPB1.AssetDocument.prototype.SummerizeByProjects = new String();
SAPB1.AssetDocument.prototype.SummerizeByDistributionRules = new String();
SAPB1.AssetDocument.prototype.ManualDepreciationType = new String();
SAPB1.AssetDocument.prototype.HandWritten = new String();
SAPB1.AssetDocument.prototype.CancellationDate = new String();
SAPB1.AssetDocument.prototype.DepreciationArea = new String();
SAPB1.AssetDocument.prototype.BPLId = new Number();
SAPB1.AssetDocument.prototype.Origin = new Number();
SAPB1.AssetDocument.prototype.LowValueAssetRetirement = new String();
SAPB1.AssetDocument.prototype.CancellationOption = new String();
SAPB1.AssetDocument.prototype.OriginalType = new String();
SAPB1.AssetDocument.prototype.BaseReference = new String();
SAPB1.AssetDocument.prototype.BPLName = new String();
SAPB1.AssetDocument.prototype.VATRegNum = new String();
SAPB1.AssetDocument.prototype.AssetDocumentLineCollection = new AssetDocumentLineCollection();
SAPB1.AssetDocument.prototype.AssetDocumentAreaJournalCollection = new AssetDocumentAreaJournalCollection();

SAPB1.AssetDocument.AssetDocumentLine = AssetDocumentLine
SAPB1.AssetDocument.AssetDocumentLineCollection = AssetDocumentLineCollection
SAPB1.AssetDocument.AssetDocumentAreaJournal = AssetDocumentAreaJournal
SAPB1.AssetDocument.AssetDocumentAreaJournalCollection = AssetDocumentAreaJournalCollection

SAPB1.AssetDocument.AssetDocumentStatusEnum = AssetDocumentStatusEnum
SAPB1.AssetDocument.AssetDocumentTypeEnum = AssetDocumentTypeEnum
SAPB1.AssetDocument.BoYesNoEnum = BoYesNoEnum
SAPB1.AssetDocument.ClosingOptionEnum = ClosingOptionEnum
SAPB1.AssetDocument.AssetOriginalTypeEnum = AssetOriginalTypeEnum

SAPB1.AssetDocument.create = function (rawObject) {
    var instance = new SAPB1.AssetDocument();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AssetDocument.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AssetDocument;
