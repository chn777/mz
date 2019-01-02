var ReportLayoutItem = require('ComplexType/ReportLayoutItem')
var ReportLayoutItemCollection = require('ComplexType/ReportLayoutItemCollection')
var ReportLayout_TranslationLine = require('ComplexType/ReportLayout_TranslationLine')
var ReportLayout_TranslationLineCollection = require('ComplexType/ReportLayout_TranslationLineCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoOrientationEnum = require('EnumType/BoOrientationEnum')
var BoGridTypeEnum = require('EnumType/BoGridTypeEnum')
var BoQueryTypeEnum = require('EnumType/BoQueryTypeEnum')
var BoExtensionErrorActionEnum = require('EnumType/BoExtensionErrorActionEnum')
var ReportLayoutCategoryEnum = require('EnumType/ReportLayoutCategoryEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ReportLayout = function () {
}
SAPB1.ReportLayout.prototype = new SAPB1.ComplexType();
SAPB1.ReportLayout.prototype.constructor = SAPB1.ReportLayout;
SAPB1.ReportLayout.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.Author = { valueOf: function(){return 'Author';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.Width = { valueOf: function(){return 'Width';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.Height = { valueOf: function(){return 'Height';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.LeftMargin = { valueOf: function(){return 'LeftMargin';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.RightMargin = { valueOf: function(){return 'RightMargin';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.TopMargin = { valueOf: function(){return 'TopMargin';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.BottomMargin = { valueOf: function(){return 'BottomMargin';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.Editable = { valueOf: function(){return 'Editable';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.PaperSize = { valueOf: function(){return 'PaperSize';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.Orientation = { valueOf: function(){return 'Orientation';}, Type: 'BoOrientationEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.GridSize = { valueOf: function(){return 'GridSize';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.GridType = { valueOf: function(){return 'GridType';}, Type: 'BoGridTypeEnum', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.ShowGrid = { valueOf: function(){return 'ShowGrid';}, Type: 'BoYesNoEnum', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.SnapToGrid = { valueOf: function(){return 'SnapToGrid';}, Type: 'BoYesNoEnum', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.Picture = { valueOf: function(){return 'Picture';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.TypeCode = { valueOf: function(){return 'TypeCode';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.ForeignLanguageReport = { valueOf: function(){return 'ForeignLanguageReport';}, Type: 'BoYesNoEnum', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.Sortable = { valueOf: function(){return 'Sortable';}, Type: 'BoYesNoEnum', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.LeaderReport = { valueOf: function(){return 'LeaderReport';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.FollowUpReport = { valueOf: function(){return 'FollowUpReport';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.ConvertFontInPrintPreview = { valueOf: function(){return 'ConvertFontInPrintPreview';}, Type: 'BoYesNoEnum', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.PreviewPrintingFont = { valueOf: function(){return 'PreviewPrintingFont';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.ChangeFontSizeInPreview = { valueOf: function(){return 'ChangeFontSizeInPreview';}, Type: 'Edm.Int32', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.ConvertFontForEMail = { valueOf: function(){return 'ConvertFontForEMail';}, Type: 'BoYesNoEnum', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.EMailFont = { valueOf: function(){return 'EMailFont';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.ChangeFontSizeForEMail = { valueOf: function(){return 'ChangeFontSizeForEMail';}, Type: 'Edm.Int32', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.Query = { valueOf: function(){return 'Query';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.QueryType = { valueOf: function(){return 'QueryType';}, Type: 'BoQueryTypeEnum', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.language = { valueOf: function(){return 'language';}, Type: 'Edm.Int32', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.ImpExpObjCode = { valueOf: function(){return 'ImpExpObjCode';}, Type: 'Edm.Int32', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.ExtensionName = { valueOf: function(){return 'ExtensionName';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.ExtensionErrorAction = { valueOf: function(){return 'ExtensionErrorAction';}, Type: 'BoExtensionErrorActionEnum', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.RepetitiveAreasNumber = { valueOf: function(){return 'RepetitiveAreasNumber';}, Type: 'Edm.Int32', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.AllignFooterToBottom = { valueOf: function(){return 'AllignFooterToBottom';}, Type: 'BoYesNoEnum', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.LayoutCode = { valueOf: function(){return 'LayoutCode';}, Type: 'Edm.String', Index: 36, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.Category = { valueOf: function(){return 'Category';}, Type: 'ReportLayoutCategoryEnum', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.Printer = { valueOf: function(){return 'Printer';}, Type: 'Edm.String', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.PrinterFirstPage = { valueOf: function(){return 'PrinterFirstPage';}, Type: 'Edm.String', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.NumberOfCopies = { valueOf: function(){return 'NumberOfCopies';}, Type: 'Edm.Int32', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.Localization = { valueOf: function(){return 'Localization';}, Type: 'Edm.String', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.UseFirstPrinter = { valueOf: function(){return 'UseFirstPrinter';}, Type: 'BoYesNoEnum', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.B1Version = { valueOf: function(){return 'B1Version';}, Type: 'Edm.String', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.CRVersion = { valueOf: function(){return 'CRVersion';}, Type: 'Edm.String', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.TypeDetail = { valueOf: function(){return 'TypeDetail';}, Type: 'Edm.String', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayout.ReportLayoutItems = { valueOf: function(){return 'ReportLayoutItems';}, Type: 'ReportLayoutItem', Index: 46, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ReportLayout.ReportLayout_TranslationLines = { valueOf: function(){return 'ReportLayout_TranslationLines';}, Type: 'ReportLayout_TranslationLine', Index: 47, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ReportLayout.prototype.Name = new String();
SAPB1.ReportLayout.prototype.Author = new String();
SAPB1.ReportLayout.prototype.Remarks = new String();
SAPB1.ReportLayout.prototype.Width = new Number();
SAPB1.ReportLayout.prototype.Height = new Number();
SAPB1.ReportLayout.prototype.LeftMargin = new Number();
SAPB1.ReportLayout.prototype.RightMargin = new Number();
SAPB1.ReportLayout.prototype.TopMargin = new Number();
SAPB1.ReportLayout.prototype.BottomMargin = new Number();
SAPB1.ReportLayout.prototype.Editable = new String();
SAPB1.ReportLayout.prototype.PaperSize = new String();
SAPB1.ReportLayout.prototype.Orientation = new String();
SAPB1.ReportLayout.prototype.GridSize = new Number();
SAPB1.ReportLayout.prototype.GridType = new String();
SAPB1.ReportLayout.prototype.ShowGrid = new String();
SAPB1.ReportLayout.prototype.SnapToGrid = new String();
SAPB1.ReportLayout.prototype.Picture = new String();
SAPB1.ReportLayout.prototype.TypeCode = new String();
SAPB1.ReportLayout.prototype.ForeignLanguageReport = new String();
SAPB1.ReportLayout.prototype.Sortable = new String();
SAPB1.ReportLayout.prototype.LeaderReport = new String();
SAPB1.ReportLayout.prototype.FollowUpReport = new String();
SAPB1.ReportLayout.prototype.ConvertFontInPrintPreview = new String();
SAPB1.ReportLayout.prototype.PreviewPrintingFont = new String();
SAPB1.ReportLayout.prototype.ChangeFontSizeInPreview = new Number();
SAPB1.ReportLayout.prototype.ConvertFontForEMail = new String();
SAPB1.ReportLayout.prototype.EMailFont = new String();
SAPB1.ReportLayout.prototype.ChangeFontSizeForEMail = new Number();
SAPB1.ReportLayout.prototype.Query = new String();
SAPB1.ReportLayout.prototype.QueryType = new String();
SAPB1.ReportLayout.prototype.language = new Number();
SAPB1.ReportLayout.prototype.ImpExpObjCode = new Number();
SAPB1.ReportLayout.prototype.ExtensionName = new String();
SAPB1.ReportLayout.prototype.ExtensionErrorAction = new String();
SAPB1.ReportLayout.prototype.RepetitiveAreasNumber = new Number();
SAPB1.ReportLayout.prototype.AllignFooterToBottom = new String();
SAPB1.ReportLayout.prototype.LayoutCode = new String();
SAPB1.ReportLayout.prototype.Category = new String();
SAPB1.ReportLayout.prototype.Printer = new String();
SAPB1.ReportLayout.prototype.PrinterFirstPage = new String();
SAPB1.ReportLayout.prototype.NumberOfCopies = new Number();
SAPB1.ReportLayout.prototype.Localization = new String();
SAPB1.ReportLayout.prototype.UseFirstPrinter = new String();
SAPB1.ReportLayout.prototype.B1Version = new String();
SAPB1.ReportLayout.prototype.CRVersion = new String();
SAPB1.ReportLayout.prototype.TypeDetail = new String();
SAPB1.ReportLayout.prototype.ReportLayoutItems = new ReportLayoutItemCollection();
SAPB1.ReportLayout.prototype.ReportLayout_TranslationLines = new ReportLayout_TranslationLineCollection();

SAPB1.ReportLayout.ReportLayoutItem = ReportLayoutItem
SAPB1.ReportLayout.ReportLayoutItemCollection = ReportLayoutItemCollection
SAPB1.ReportLayout.ReportLayout_TranslationLine = ReportLayout_TranslationLine
SAPB1.ReportLayout.ReportLayout_TranslationLineCollection = ReportLayout_TranslationLineCollection

SAPB1.ReportLayout.BoYesNoEnum = BoYesNoEnum
SAPB1.ReportLayout.BoOrientationEnum = BoOrientationEnum
SAPB1.ReportLayout.BoGridTypeEnum = BoGridTypeEnum
SAPB1.ReportLayout.BoQueryTypeEnum = BoQueryTypeEnum
SAPB1.ReportLayout.BoExtensionErrorActionEnum = BoExtensionErrorActionEnum
SAPB1.ReportLayout.ReportLayoutCategoryEnum = ReportLayoutCategoryEnum

SAPB1.ReportLayout.create = function (rawObject) {
    var instance = new SAPB1.ReportLayout();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ReportLayout.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ReportLayout;
