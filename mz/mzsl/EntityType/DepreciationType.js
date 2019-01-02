var DepreciationLevel = require('ComplexType/DepreciationLevel')
var DepreciationLevelCollection = require('ComplexType/DepreciationLevelCollection')

var DepreciationMethodEnum = require('EnumType/DepreciationMethodEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var AcquisitionPeriodControlEnum = require('EnumType/AcquisitionPeriodControlEnum')
var SubsequentAcquisitionPeriodControlEnum = require('EnumType/SubsequentAcquisitionPeriodControlEnum')
var RetirementPeriodControlEnum = require('EnumType/RetirementPeriodControlEnum')
var AcquisitionProRataTypeEnum = require('EnumType/AcquisitionProRataTypeEnum')
var SubsequentAcquisitionProRataTypeEnum = require('EnumType/SubsequentAcquisitionProRataTypeEnum')
var RetirementProRataTypeEnum = require('EnumType/RetirementProRataTypeEnum')
var StraightLineCalculationMethodEnum = require('EnumType/StraightLineCalculationMethodEnum')
var StraightLinePeriodControlDepreciationPeriodsEnum = require('EnumType/StraightLinePeriodControlDepreciationPeriodsEnum')
var SpecialDepreciationCalculationMethodEnum = require('EnumType/SpecialDepreciationCalculationMethodEnum')
var SpecialDepreciationMaximumFlagEnum = require('EnumType/SpecialDepreciationMaximumFlagEnum')
var CalculationBaseEnum = require('EnumType/CalculationBaseEnum')
var TransferSourcePeriodControlEnum = require('EnumType/TransferSourcePeriodControlEnum')
var TransferTargetPeriodControlEnum = require('EnumType/TransferTargetPeriodControlEnum')
var TransferSourceProRataTypeEnum = require('EnumType/TransferSourceProRataTypeEnum')
var TransferTargetProRataTypeEnum = require('EnumType/TransferTargetProRataTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DepreciationType = function () {
}
SAPB1.DepreciationType.prototype = new SAPB1.EntityType();
SAPB1.DepreciationType.prototype.constructor = SAPB1.DepreciationType;
SAPB1.DepreciationType.prototype.keys.push('Code');
SAPB1.DepreciationType.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.DepreciationMethod = { valueOf: function(){return 'DepreciationMethod';}, Type: 'DepreciationMethodEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.MinimumDepreciatedValue = { valueOf: function(){return 'MinimumDepreciatedValue';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.RoundYearEndBookValue = { valueOf: function(){return 'RoundYearEndBookValue';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.IncludeSalvageInDepreciation = { valueOf: function(){return 'IncludeSalvageInDepreciation';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.SalvagePercentage = { valueOf: function(){return 'SalvagePercentage';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.AcquisitionPeriodControl = { valueOf: function(){return 'AcquisitionPeriodControl';}, Type: 'AcquisitionPeriodControlEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.SubsequentAcquisitionPeriodControl = { valueOf: function(){return 'SubsequentAcquisitionPeriodControl';}, Type: 'SubsequentAcquisitionPeriodControlEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.RetirementPeriodControl = { valueOf: function(){return 'RetirementPeriodControl';}, Type: 'RetirementPeriodControlEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.AcquisitionProRataType = { valueOf: function(){return 'AcquisitionProRataType';}, Type: 'AcquisitionProRataTypeEnum', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.SubsequentAcquisitionProRataType = { valueOf: function(){return 'SubsequentAcquisitionProRataType';}, Type: 'SubsequentAcquisitionProRataTypeEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.RetirementProRataType = { valueOf: function(){return 'RetirementProRataType';}, Type: 'RetirementProRataTypeEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.PercentageOfDepreciationReversedInRetirementYear = { valueOf: function(){return 'PercentageOfDepreciationReversedInRetirementYear';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.ValidFrom = { valueOf: function(){return 'ValidFrom';}, Type: 'Edm.DateTime', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.ValidTo = { valueOf: function(){return 'ValidTo';}, Type: 'Edm.DateTime', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.StraightLineCalculationMethod = { valueOf: function(){return 'StraightLineCalculationMethod';}, Type: 'StraightLineCalculationMethodEnum', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.StraightLinePercentage = { valueOf: function(){return 'StraightLinePercentage';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.StraightLinePeriodControlDepreciationPeriods = { valueOf: function(){return 'StraightLinePeriodControlDepreciationPeriods';}, Type: 'StraightLinePeriodControlDepreciationPeriodsEnum', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.StraightLinePeriodControlFactor = { valueOf: function(){return 'StraightLinePeriodControlFactor';}, Type: 'Edm.Double', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.DecliningPercentage = { valueOf: function(){return 'DecliningPercentage';}, Type: 'Edm.Double', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.DecliningFactor = { valueOf: function(){return 'DecliningFactor';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.DecliningChangeTo = { valueOf: function(){return 'DecliningChangeTo';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.SpecialDepreciationCalculationMethod = { valueOf: function(){return 'SpecialDepreciationCalculationMethod';}, Type: 'SpecialDepreciationCalculationMethodEnum', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.SpecialDepreciationConcessionPeriodYears = { valueOf: function(){return 'SpecialDepreciationConcessionPeriodYears';}, Type: 'Edm.Int32', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.SpecialDepreciationMaximumPercentage = { valueOf: function(){return 'SpecialDepreciationMaximumPercentage';}, Type: 'Edm.Double', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.SpecialDepreciationNormalDepreciation = { valueOf: function(){return 'SpecialDepreciationNormalDepreciation';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.SpecialDepreciationAlternativeDepreciation = { valueOf: function(){return 'SpecialDepreciationAlternativeDepreciation';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.DepreciationTypePool = { valueOf: function(){return 'DepreciationTypePool';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.ManualDepreciationReduceDepreciationBase = { valueOf: function(){return 'ManualDepreciationReduceDepreciationBase';}, Type: 'BoYesNoEnum', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.SpecialDepreciationMaximumAmount = { valueOf: function(){return 'SpecialDepreciationMaximumAmount';}, Type: 'Edm.Double', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.SpecialDepreciationMaximumFlag = { valueOf: function(){return 'SpecialDepreciationMaximumFlag';}, Type: 'SpecialDepreciationMaximumFlagEnum', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.CalculationBase = { valueOf: function(){return 'CalculationBase';}, Type: 'CalculationBaseEnum', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.DepreciationEndAtLastFullYear = { valueOf: function(){return 'DepreciationEndAtLastFullYear';}, Type: 'BoYesNoEnum', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.IncludePreviousDepreciationInCapitalizationPeriod = { valueOf: function(){return 'IncludePreviousDepreciationInCapitalizationPeriod';}, Type: 'BoYesNoEnum', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.DeltaCoefficient = { valueOf: function(){return 'DeltaCoefficient';}, Type: 'Edm.Int32', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.MaximumDepreciableValue = { valueOf: function(){return 'MaximumDepreciableValue';}, Type: 'Edm.Double', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.FactorOnlyRelevantToFirstFiscalYear = { valueOf: function(){return 'FactorOnlyRelevantToFirstFiscalYear';}, Type: 'BoYesNoEnum', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.TransferSourcePeriodControl = { valueOf: function(){return 'TransferSourcePeriodControl';}, Type: 'TransferSourcePeriodControlEnum', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.TransferTargetPeriodControl = { valueOf: function(){return 'TransferTargetPeriodControl';}, Type: 'TransferTargetPeriodControlEnum', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.TransferSourceProRataType = { valueOf: function(){return 'TransferSourceProRataType';}, Type: 'TransferSourceProRataTypeEnum', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.TransferTargetProRataType = { valueOf: function(){return 'TransferTargetProRataType';}, Type: 'TransferTargetProRataTypeEnum', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationType.DepreciationLevelCollection = { valueOf: function(){return 'DepreciationLevelCollection';}, Type: 'DepreciationLevel', Index: 42, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.DepreciationType.prototype.Code = new String();
SAPB1.DepreciationType.prototype.Description = new String();
SAPB1.DepreciationType.prototype.DepreciationMethod = new String();
SAPB1.DepreciationType.prototype.MinimumDepreciatedValue = new Number();
SAPB1.DepreciationType.prototype.RoundYearEndBookValue = new String();
SAPB1.DepreciationType.prototype.IncludeSalvageInDepreciation = new String();
SAPB1.DepreciationType.prototype.SalvagePercentage = new Number();
SAPB1.DepreciationType.prototype.AcquisitionPeriodControl = new String();
SAPB1.DepreciationType.prototype.SubsequentAcquisitionPeriodControl = new String();
SAPB1.DepreciationType.prototype.RetirementPeriodControl = new String();
SAPB1.DepreciationType.prototype.AcquisitionProRataType = new String();
SAPB1.DepreciationType.prototype.SubsequentAcquisitionProRataType = new String();
SAPB1.DepreciationType.prototype.RetirementProRataType = new String();
SAPB1.DepreciationType.prototype.PercentageOfDepreciationReversedInRetirementYear = new Number();
SAPB1.DepreciationType.prototype.ValidFrom = new String();
SAPB1.DepreciationType.prototype.ValidTo = new String();
SAPB1.DepreciationType.prototype.StraightLineCalculationMethod = new String();
SAPB1.DepreciationType.prototype.StraightLinePercentage = new Number();
SAPB1.DepreciationType.prototype.StraightLinePeriodControlDepreciationPeriods = new String();
SAPB1.DepreciationType.prototype.StraightLinePeriodControlFactor = new Number();
SAPB1.DepreciationType.prototype.DecliningPercentage = new Number();
SAPB1.DepreciationType.prototype.DecliningFactor = new Number();
SAPB1.DepreciationType.prototype.DecliningChangeTo = new String();
SAPB1.DepreciationType.prototype.SpecialDepreciationCalculationMethod = new String();
SAPB1.DepreciationType.prototype.SpecialDepreciationConcessionPeriodYears = new Number();
SAPB1.DepreciationType.prototype.SpecialDepreciationMaximumPercentage = new Number();
SAPB1.DepreciationType.prototype.SpecialDepreciationNormalDepreciation = new String();
SAPB1.DepreciationType.prototype.SpecialDepreciationAlternativeDepreciation = new String();
SAPB1.DepreciationType.prototype.DepreciationTypePool = new String();
SAPB1.DepreciationType.prototype.ManualDepreciationReduceDepreciationBase = new String();
SAPB1.DepreciationType.prototype.SpecialDepreciationMaximumAmount = new Number();
SAPB1.DepreciationType.prototype.SpecialDepreciationMaximumFlag = new String();
SAPB1.DepreciationType.prototype.CalculationBase = new String();
SAPB1.DepreciationType.prototype.DepreciationEndAtLastFullYear = new String();
SAPB1.DepreciationType.prototype.IncludePreviousDepreciationInCapitalizationPeriod = new String();
SAPB1.DepreciationType.prototype.DeltaCoefficient = new Number();
SAPB1.DepreciationType.prototype.MaximumDepreciableValue = new Number();
SAPB1.DepreciationType.prototype.FactorOnlyRelevantToFirstFiscalYear = new String();
SAPB1.DepreciationType.prototype.TransferSourcePeriodControl = new String();
SAPB1.DepreciationType.prototype.TransferTargetPeriodControl = new String();
SAPB1.DepreciationType.prototype.TransferSourceProRataType = new String();
SAPB1.DepreciationType.prototype.TransferTargetProRataType = new String();
SAPB1.DepreciationType.prototype.DepreciationLevelCollection = new DepreciationLevelCollection();

SAPB1.DepreciationType.DepreciationLevel = DepreciationLevel
SAPB1.DepreciationType.DepreciationLevelCollection = DepreciationLevelCollection

SAPB1.DepreciationType.DepreciationMethodEnum = DepreciationMethodEnum
SAPB1.DepreciationType.BoYesNoEnum = BoYesNoEnum
SAPB1.DepreciationType.AcquisitionPeriodControlEnum = AcquisitionPeriodControlEnum
SAPB1.DepreciationType.SubsequentAcquisitionPeriodControlEnum = SubsequentAcquisitionPeriodControlEnum
SAPB1.DepreciationType.RetirementPeriodControlEnum = RetirementPeriodControlEnum
SAPB1.DepreciationType.AcquisitionProRataTypeEnum = AcquisitionProRataTypeEnum
SAPB1.DepreciationType.SubsequentAcquisitionProRataTypeEnum = SubsequentAcquisitionProRataTypeEnum
SAPB1.DepreciationType.RetirementProRataTypeEnum = RetirementProRataTypeEnum
SAPB1.DepreciationType.StraightLineCalculationMethodEnum = StraightLineCalculationMethodEnum
SAPB1.DepreciationType.StraightLinePeriodControlDepreciationPeriodsEnum = StraightLinePeriodControlDepreciationPeriodsEnum
SAPB1.DepreciationType.SpecialDepreciationCalculationMethodEnum = SpecialDepreciationCalculationMethodEnum
SAPB1.DepreciationType.SpecialDepreciationMaximumFlagEnum = SpecialDepreciationMaximumFlagEnum
SAPB1.DepreciationType.CalculationBaseEnum = CalculationBaseEnum
SAPB1.DepreciationType.TransferSourcePeriodControlEnum = TransferSourcePeriodControlEnum
SAPB1.DepreciationType.TransferTargetPeriodControlEnum = TransferTargetPeriodControlEnum
SAPB1.DepreciationType.TransferSourceProRataTypeEnum = TransferSourceProRataTypeEnum
SAPB1.DepreciationType.TransferTargetProRataTypeEnum = TransferTargetProRataTypeEnum

SAPB1.DepreciationType.create = function (rawObject) {
    var instance = new SAPB1.DepreciationType();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DepreciationType.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DepreciationType;
