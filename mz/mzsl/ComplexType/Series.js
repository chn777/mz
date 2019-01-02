
var BoSeriesGroupEnum = require('EnumType/BoSeriesGroupEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoSeriesTypeEnum = require('EnumType/BoSeriesTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Series = function () {
}
SAPB1.Series.prototype = new SAPB1.ComplexType();
SAPB1.Series.prototype.constructor = SAPB1.Series;
SAPB1.Series.Document = { valueOf: function(){return 'Document';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.DocumentSubType = { valueOf: function(){return 'DocumentSubType';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.InitialNumber = { valueOf: function(){return 'InitialNumber';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.LastNumber = { valueOf: function(){return 'LastNumber';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.NextNumber = { valueOf: function(){return 'NextNumber';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.Prefix = { valueOf: function(){return 'Prefix';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.Suffix = { valueOf: function(){return 'Suffix';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.GroupCode = { valueOf: function(){return 'GroupCode';}, Type: 'BoSeriesGroupEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.Locked = { valueOf: function(){return 'Locked';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.PeriodIndicator = { valueOf: function(){return 'PeriodIndicator';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.IsDigitalSeries = { valueOf: function(){return 'IsDigitalSeries';}, Type: 'BoYesNoEnum', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.DigitNumber = { valueOf: function(){return 'DigitNumber';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.SeriesType = { valueOf: function(){return 'SeriesType';}, Type: 'BoSeriesTypeEnum', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.IsManual = { valueOf: function(){return 'IsManual';}, Type: 'BoYesNoEnum', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.BPLID = { valueOf: function(){return 'BPLID';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.ATDocumentType = { valueOf: function(){return 'ATDocumentType';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.IsElectronicCommEnabled = { valueOf: function(){return 'IsElectronicCommEnabled';}, Type: 'BoYesNoEnum', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.CostAccountOnly = { valueOf: function(){return 'CostAccountOnly';}, Type: 'BoYesNoEnum', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Series.prototype.Document = new String();
SAPB1.Series.prototype.DocumentSubType = new String();
SAPB1.Series.prototype.InitialNumber = new Number();
SAPB1.Series.prototype.LastNumber = new Number();
SAPB1.Series.prototype.NextNumber = new Number();
SAPB1.Series.prototype.Prefix = new String();
SAPB1.Series.prototype.Suffix = new String();
SAPB1.Series.prototype.Remarks = new String();
SAPB1.Series.prototype.GroupCode = new String();
SAPB1.Series.prototype.Locked = new String();
SAPB1.Series.prototype.PeriodIndicator = new String();
SAPB1.Series.prototype.Name = new String();
SAPB1.Series.prototype.Series = new Number();
SAPB1.Series.prototype.IsDigitalSeries = new String();
SAPB1.Series.prototype.DigitNumber = new Number();
SAPB1.Series.prototype.SeriesType = new String();
SAPB1.Series.prototype.IsManual = new String();
SAPB1.Series.prototype.BPLID = new Number();
SAPB1.Series.prototype.ATDocumentType = new String();
SAPB1.Series.prototype.IsElectronicCommEnabled = new String();
SAPB1.Series.prototype.CostAccountOnly = new String();


SAPB1.Series.BoSeriesGroupEnum = BoSeriesGroupEnum
SAPB1.Series.BoYesNoEnum = BoYesNoEnum
SAPB1.Series.BoSeriesTypeEnum = BoSeriesTypeEnum

SAPB1.Series.create = function (rawObject) {
    var instance = new SAPB1.Series();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Series.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Series;
