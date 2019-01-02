
var PostingOfDepreciationEnum = require('EnumType/PostingOfDepreciationEnum')
var RetirementMethodEnum = require('EnumType/RetirementMethodEnum')
var AreaTypeEnum = require('EnumType/AreaTypeEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DepreciationArea = function () {
}
SAPB1.DepreciationArea.prototype = new SAPB1.EntityType();
SAPB1.DepreciationArea.prototype.constructor = SAPB1.DepreciationArea;
SAPB1.DepreciationArea.prototype.keys.push('Code');
SAPB1.DepreciationArea.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DepreciationArea.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationArea.PostingOfDepreciation = { valueOf: function(){return 'PostingOfDepreciation';}, Type: 'PostingOfDepreciationEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationArea.RetirementMethod = { valueOf: function(){return 'RetirementMethod';}, Type: 'RetirementMethodEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationArea.AreaType = { valueOf: function(){return 'AreaType';}, Type: 'AreaTypeEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationArea.DerivedArea = { valueOf: function(){return 'DerivedArea';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationArea.MainBookingArea = { valueOf: function(){return 'MainBookingArea';}, Type: 'BoYesNoEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationArea.DirectRevenuePosting = { valueOf: function(){return 'DirectRevenuePosting';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationArea.TaxCreditControl = { valueOf: function(){return 'TaxCreditControl';}, Type: 'BoYesNoEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationArea.TaxType = { valueOf: function(){return 'TaxType';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationArea.BPForTaxCorrection = { valueOf: function(){return 'BPForTaxCorrection';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationArea.ItemForTaxCorrection = { valueOf: function(){return 'ItemForTaxCorrection';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationArea.UsageForTaxCorrection = { valueOf: function(){return 'UsageForTaxCorrection';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationArea.prototype.Code = new String();
SAPB1.DepreciationArea.prototype.Description = new String();
SAPB1.DepreciationArea.prototype.PostingOfDepreciation = new String();
SAPB1.DepreciationArea.prototype.RetirementMethod = new String();
SAPB1.DepreciationArea.prototype.AreaType = new String();
SAPB1.DepreciationArea.prototype.DerivedArea = new String();
SAPB1.DepreciationArea.prototype.MainBookingArea = new String();
SAPB1.DepreciationArea.prototype.DirectRevenuePosting = new String();
SAPB1.DepreciationArea.prototype.TaxCreditControl = new String();
SAPB1.DepreciationArea.prototype.TaxType = new Number();
SAPB1.DepreciationArea.prototype.BPForTaxCorrection = new String();
SAPB1.DepreciationArea.prototype.ItemForTaxCorrection = new String();
SAPB1.DepreciationArea.prototype.UsageForTaxCorrection = new Number();


SAPB1.DepreciationArea.PostingOfDepreciationEnum = PostingOfDepreciationEnum
SAPB1.DepreciationArea.RetirementMethodEnum = RetirementMethodEnum
SAPB1.DepreciationArea.AreaTypeEnum = AreaTypeEnum
SAPB1.DepreciationArea.BoYesNoEnum = BoYesNoEnum

SAPB1.DepreciationArea.create = function (rawObject) {
    var instance = new SAPB1.DepreciationArea();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DepreciationArea.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DepreciationArea;
