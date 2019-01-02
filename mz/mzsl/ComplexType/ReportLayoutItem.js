
var BoReportLayoutItemTypeEnum = require('EnumType/BoReportLayoutItemTypeEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoHorizontalAlignmentEnum = require('EnumType/BoHorizontalAlignmentEnum')
var BoLineBreakEnum = require('EnumType/BoLineBreakEnum')
var BoPictureSizeEnum = require('EnumType/BoPictureSizeEnum')
var BoDataSourceEnum = require('EnumType/BoDataSourceEnum')
var BoVerticalAlignmentEnum = require('EnumType/BoVerticalAlignmentEnum')
var BoSortTypeEnum = require('EnumType/BoSortTypeEnum')
var BoBarCodeStandardEnum = require('EnumType/BoBarCodeStandardEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ReportLayoutItem = function () {
}
SAPB1.ReportLayoutItem.prototype = new SAPB1.ComplexType();
SAPB1.ReportLayoutItem.prototype.constructor = SAPB1.ReportLayoutItem;
SAPB1.ReportLayoutItem.FieldIdentifier = { valueOf: function(){return 'FieldIdentifier';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.ParentType = { valueOf: function(){return 'ParentType';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.Type = { valueOf: function(){return 'Type';}, Type: 'BoReportLayoutItemTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.Visible = { valueOf: function(){return 'Visible';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.SuppressZeros = { valueOf: function(){return 'SuppressZeros';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.Left = { valueOf: function(){return 'Left';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.Top = { valueOf: function(){return 'Top';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.Width = { valueOf: function(){return 'Width';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.Height = { valueOf: function(){return 'Height';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.LeftMargin = { valueOf: function(){return 'LeftMargin';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.RightMargin = { valueOf: function(){return 'RightMargin';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.TopMargin = { valueOf: function(){return 'TopMargin';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.BottomMargin = { valueOf: function(){return 'BottomMargin';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.LeftBorderLineThickness = { valueOf: function(){return 'LeftBorderLineThickness';}, Type: 'Edm.Int32', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.RightBorderLineThickness = { valueOf: function(){return 'RightBorderLineThickness';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.TopBorderLineThickness = { valueOf: function(){return 'TopBorderLineThickness';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.BottomBorderLineThickness = { valueOf: function(){return 'BottomBorderLineThickness';}, Type: 'Edm.Int32', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.ShadowThickness = { valueOf: function(){return 'ShadowThickness';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.BackgroundRed = { valueOf: function(){return 'BackgroundRed';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.BackgroundGreen = { valueOf: function(){return 'BackgroundGreen';}, Type: 'Edm.Int32', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.BackgroundBlue = { valueOf: function(){return 'BackgroundBlue';}, Type: 'Edm.Int32', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.TextRed = { valueOf: function(){return 'TextRed';}, Type: 'Edm.Int32', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.TextGreen = { valueOf: function(){return 'TextGreen';}, Type: 'Edm.Int32', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.TextBlue = { valueOf: function(){return 'TextBlue';}, Type: 'Edm.Int32', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.HighlightRed = { valueOf: function(){return 'HighlightRed';}, Type: 'Edm.Int32', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.HighlightGreen = { valueOf: function(){return 'HighlightGreen';}, Type: 'Edm.Int32', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.HighlightBlue = { valueOf: function(){return 'HighlightBlue';}, Type: 'Edm.Int32', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.BorderRed = { valueOf: function(){return 'BorderRed';}, Type: 'Edm.Int32', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.BorderGreen = { valueOf: function(){return 'BorderGreen';}, Type: 'Edm.Int32', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.BorderBlue = { valueOf: function(){return 'BorderBlue';}, Type: 'Edm.Int32', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.GroupNumber = { valueOf: function(){return 'GroupNumber';}, Type: 'Edm.Int32', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.FontName = { valueOf: function(){return 'FontName';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.FontSize = { valueOf: function(){return 'FontSize';}, Type: 'Edm.Int32', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.TextStyle = { valueOf: function(){return 'TextStyle';}, Type: 'Edm.Int32', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.HorizontalAlignment = { valueOf: function(){return 'HorizontalAlignment';}, Type: 'BoHorizontalAlignmentEnum', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.LineBreak = { valueOf: function(){return 'LineBreak';}, Type: 'BoLineBreakEnum', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.PictureSize = { valueOf: function(){return 'PictureSize';}, Type: 'BoPictureSizeEnum', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.DataSource = { valueOf: function(){return 'DataSource';}, Type: 'BoDataSourceEnum', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.String = { valueOf: function(){return 'String';}, Type: 'Edm.String', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.VariableNumber = { valueOf: function(){return 'VariableNumber';}, Type: 'Edm.Int32', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.TableName = { valueOf: function(){return 'TableName';}, Type: 'Edm.String', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.FieldName = { valueOf: function(){return 'FieldName';}, Type: 'Edm.String', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.DisplayDescription = { valueOf: function(){return 'DisplayDescription';}, Type: 'BoYesNoEnum', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.Editable = { valueOf: function(){return 'Editable';}, Type: 'Edm.Int32', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.ItemNumber = { valueOf: function(){return 'ItemNumber';}, Type: 'Edm.Int32', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.VerticalAlignment = { valueOf: function(){return 'VerticalAlignment';}, Type: 'BoVerticalAlignmentEnum', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.SortLevel = { valueOf: function(){return 'SortLevel';}, Type: 'Edm.Int32', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.ReverseSort = { valueOf: function(){return 'ReverseSort';}, Type: 'BoYesNoEnum', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.SortType = { valueOf: function(){return 'SortType';}, Type: 'BoSortTypeEnum', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.Unique = { valueOf: function(){return 'Unique';}, Type: 'BoYesNoEnum', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.SetAsGroup = { valueOf: function(){return 'SetAsGroup';}, Type: 'BoYesNoEnum', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.NewPage = { valueOf: function(){return 'NewPage';}, Type: 'BoYesNoEnum', Index: 51, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.PrintAsBarCode = { valueOf: function(){return 'PrintAsBarCode';}, Type: 'BoYesNoEnum', Index: 52, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.LinkToField = { valueOf: function(){return 'LinkToField';}, Type: 'Edm.String', Index: 53, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.BarCodeStandard = { valueOf: function(){return 'BarCodeStandard';}, Type: 'BoBarCodeStandardEnum', Index: 54, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.DisplayTotalAsAWord = { valueOf: function(){return 'DisplayTotalAsAWord';}, Type: 'BoYesNoEnum', Index: 55, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.BlockFontChange = { valueOf: function(){return 'BlockFontChange';}, Type: 'BoYesNoEnum', Index: 56, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.ParentIndex = { valueOf: function(){return 'ParentIndex';}, Type: 'Edm.Int32', Index: 57, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.ItemIndex = { valueOf: function(){return 'ItemIndex';}, Type: 'Edm.Int32', Index: 58, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.StringLength = { valueOf: function(){return 'StringLength';}, Type: 'Edm.Int32', Index: 59, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.StringFiller = { valueOf: function(){return 'StringFiller';}, Type: 'Edm.String', Index: 60, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.RelateToField = { valueOf: function(){return 'RelateToField';}, Type: 'Edm.String', Index: 61, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.NextSegmentItemNumber = { valueOf: function(){return 'NextSegmentItemNumber';}, Type: 'Edm.String', Index: 62, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.HeightAdjustments = { valueOf: function(){return 'HeightAdjustments';}, Type: 'BoYesNoEnum', Index: 63, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.DuplicateRepetitiveArea = { valueOf: function(){return 'DuplicateRepetitiveArea';}, Type: 'BoYesNoEnum', Index: 64, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.NumberOfLinesInRepetitiveArea = { valueOf: function(){return 'NumberOfLinesInRepetitiveArea';}, Type: 'Edm.Int32', Index: 65, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.DistanceToRepetitiveDuplicate = { valueOf: function(){return 'DistanceToRepetitiveDuplicate';}, Type: 'Edm.Int32', Index: 66, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.HideRepetitiveAreaIfEmpty = { valueOf: function(){return 'HideRepetitiveAreaIfEmpty';}, Type: 'BoYesNoEnum', Index: 67, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.DisplayRepetitiveAreaFooterOnAllPages = { valueOf: function(){return 'DisplayRepetitiveAreaFooterOnAllPages';}, Type: 'BoYesNoEnum', Index: 68, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutItem.prototype.FieldIdentifier = new String();
SAPB1.ReportLayoutItem.prototype.ParentType = new Number();
SAPB1.ReportLayoutItem.prototype.Type = new String();
SAPB1.ReportLayoutItem.prototype.Visible = new String();
SAPB1.ReportLayoutItem.prototype.SuppressZeros = new String();
SAPB1.ReportLayoutItem.prototype.Left = new Number();
SAPB1.ReportLayoutItem.prototype.Top = new Number();
SAPB1.ReportLayoutItem.prototype.Width = new Number();
SAPB1.ReportLayoutItem.prototype.Height = new Number();
SAPB1.ReportLayoutItem.prototype.LeftMargin = new Number();
SAPB1.ReportLayoutItem.prototype.RightMargin = new Number();
SAPB1.ReportLayoutItem.prototype.TopMargin = new Number();
SAPB1.ReportLayoutItem.prototype.BottomMargin = new Number();
SAPB1.ReportLayoutItem.prototype.LeftBorderLineThickness = new Number();
SAPB1.ReportLayoutItem.prototype.RightBorderLineThickness = new Number();
SAPB1.ReportLayoutItem.prototype.TopBorderLineThickness = new Number();
SAPB1.ReportLayoutItem.prototype.BottomBorderLineThickness = new Number();
SAPB1.ReportLayoutItem.prototype.ShadowThickness = new Number();
SAPB1.ReportLayoutItem.prototype.BackgroundRed = new Number();
SAPB1.ReportLayoutItem.prototype.BackgroundGreen = new Number();
SAPB1.ReportLayoutItem.prototype.BackgroundBlue = new Number();
SAPB1.ReportLayoutItem.prototype.TextRed = new Number();
SAPB1.ReportLayoutItem.prototype.TextGreen = new Number();
SAPB1.ReportLayoutItem.prototype.TextBlue = new Number();
SAPB1.ReportLayoutItem.prototype.HighlightRed = new Number();
SAPB1.ReportLayoutItem.prototype.HighlightGreen = new Number();
SAPB1.ReportLayoutItem.prototype.HighlightBlue = new Number();
SAPB1.ReportLayoutItem.prototype.BorderRed = new Number();
SAPB1.ReportLayoutItem.prototype.BorderGreen = new Number();
SAPB1.ReportLayoutItem.prototype.BorderBlue = new Number();
SAPB1.ReportLayoutItem.prototype.GroupNumber = new Number();
SAPB1.ReportLayoutItem.prototype.FontName = new String();
SAPB1.ReportLayoutItem.prototype.FontSize = new Number();
SAPB1.ReportLayoutItem.prototype.TextStyle = new Number();
SAPB1.ReportLayoutItem.prototype.HorizontalAlignment = new String();
SAPB1.ReportLayoutItem.prototype.LineBreak = new String();
SAPB1.ReportLayoutItem.prototype.PictureSize = new String();
SAPB1.ReportLayoutItem.prototype.DataSource = new String();
SAPB1.ReportLayoutItem.prototype.String = new String();
SAPB1.ReportLayoutItem.prototype.VariableNumber = new Number();
SAPB1.ReportLayoutItem.prototype.TableName = new String();
SAPB1.ReportLayoutItem.prototype.FieldName = new String();
SAPB1.ReportLayoutItem.prototype.DisplayDescription = new String();
SAPB1.ReportLayoutItem.prototype.Editable = new Number();
SAPB1.ReportLayoutItem.prototype.ItemNumber = new Number();
SAPB1.ReportLayoutItem.prototype.VerticalAlignment = new String();
SAPB1.ReportLayoutItem.prototype.SortLevel = new Number();
SAPB1.ReportLayoutItem.prototype.ReverseSort = new String();
SAPB1.ReportLayoutItem.prototype.SortType = new String();
SAPB1.ReportLayoutItem.prototype.Unique = new String();
SAPB1.ReportLayoutItem.prototype.SetAsGroup = new String();
SAPB1.ReportLayoutItem.prototype.NewPage = new String();
SAPB1.ReportLayoutItem.prototype.PrintAsBarCode = new String();
SAPB1.ReportLayoutItem.prototype.LinkToField = new String();
SAPB1.ReportLayoutItem.prototype.BarCodeStandard = new String();
SAPB1.ReportLayoutItem.prototype.DisplayTotalAsAWord = new String();
SAPB1.ReportLayoutItem.prototype.BlockFontChange = new String();
SAPB1.ReportLayoutItem.prototype.ParentIndex = new Number();
SAPB1.ReportLayoutItem.prototype.ItemIndex = new Number();
SAPB1.ReportLayoutItem.prototype.StringLength = new Number();
SAPB1.ReportLayoutItem.prototype.StringFiller = new String();
SAPB1.ReportLayoutItem.prototype.RelateToField = new String();
SAPB1.ReportLayoutItem.prototype.NextSegmentItemNumber = new String();
SAPB1.ReportLayoutItem.prototype.HeightAdjustments = new String();
SAPB1.ReportLayoutItem.prototype.DuplicateRepetitiveArea = new String();
SAPB1.ReportLayoutItem.prototype.NumberOfLinesInRepetitiveArea = new Number();
SAPB1.ReportLayoutItem.prototype.DistanceToRepetitiveDuplicate = new Number();
SAPB1.ReportLayoutItem.prototype.HideRepetitiveAreaIfEmpty = new String();
SAPB1.ReportLayoutItem.prototype.DisplayRepetitiveAreaFooterOnAllPages = new String();


SAPB1.ReportLayoutItem.BoReportLayoutItemTypeEnum = BoReportLayoutItemTypeEnum
SAPB1.ReportLayoutItem.BoYesNoEnum = BoYesNoEnum
SAPB1.ReportLayoutItem.BoHorizontalAlignmentEnum = BoHorizontalAlignmentEnum
SAPB1.ReportLayoutItem.BoLineBreakEnum = BoLineBreakEnum
SAPB1.ReportLayoutItem.BoPictureSizeEnum = BoPictureSizeEnum
SAPB1.ReportLayoutItem.BoDataSourceEnum = BoDataSourceEnum
SAPB1.ReportLayoutItem.BoVerticalAlignmentEnum = BoVerticalAlignmentEnum
SAPB1.ReportLayoutItem.BoSortTypeEnum = BoSortTypeEnum
SAPB1.ReportLayoutItem.BoBarCodeStandardEnum = BoBarCodeStandardEnum

SAPB1.ReportLayoutItem.create = function (rawObject) {
    var instance = new SAPB1.ReportLayoutItem();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ReportLayoutItem.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ReportLayoutItem;
