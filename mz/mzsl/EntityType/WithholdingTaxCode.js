var WithholdingTaxCodes_Line = require('ComplexType/WithholdingTaxCodes_Line')
var WithholdingTaxCodes_LineCollection = require('ComplexType/WithholdingTaxCodes_LineCollection')

var WithholdingTaxCodeCategoryEnum = require('EnumType/WithholdingTaxCodeCategoryEnum')
var WithholdingTaxCodeBaseTypeEnum = require('EnumType/WithholdingTaxCodeBaseTypeEnum')
var WithholdingTypeEnum = require('EnumType/WithholdingTypeEnum')
var RoundingTypeEnum = require('EnumType/RoundingTypeEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var ReturnTypeEnum = require('EnumType/ReturnTypeEnum')
var TdsTypeEnum = require('EnumType/TdsTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WithholdingTaxCode = function () {
}
SAPB1.WithholdingTaxCode.prototype = new SAPB1.EntityType();
SAPB1.WithholdingTaxCode.prototype.constructor = SAPB1.WithholdingTaxCode;
SAPB1.WithholdingTaxCode.prototype.keys.push('WTCode');
SAPB1.WithholdingTaxCode.WTCode = { valueOf: function(){return 'WTCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.WTName = { valueOf: function(){return 'WTName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.Category = { valueOf: function(){return 'Category';}, Type: 'WithholdingTaxCodeCategoryEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.BaseType = { valueOf: function(){return 'BaseType';}, Type: 'WithholdingTaxCodeBaseTypeEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.BaseAmount = { valueOf: function(){return 'BaseAmount';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.OfficialCode = { valueOf: function(){return 'OfficialCode';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.Account = { valueOf: function(){return 'Account';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.WithholdingType = { valueOf: function(){return 'WithholdingType';}, Type: 'WithholdingTypeEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.RoundingType = { valueOf: function(){return 'RoundingType';}, Type: 'RoundingTypeEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.Section = { valueOf: function(){return 'Section';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.Threshold = { valueOf: function(){return 'Threshold';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.Surcharge = { valueOf: function(){return 'Surcharge';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.Concessional = { valueOf: function(){return 'Concessional';}, Type: 'BoYesNoEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.Assessee = { valueOf: function(){return 'Assessee';}, Type: 'Edm.Int32', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.APTDSAccount = { valueOf: function(){return 'APTDSAccount';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.APSurchargeAccount = { valueOf: function(){return 'APSurchargeAccount';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.APCessAccount = { valueOf: function(){return 'APCessAccount';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.APHSCAccount = { valueOf: function(){return 'APHSCAccount';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.APIGSTAccount = { valueOf: function(){return 'APIGSTAccount';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.APCGSTAccount = { valueOf: function(){return 'APCGSTAccount';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.APSGSTAccount = { valueOf: function(){return 'APSGSTAccount';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.APUTGSTAccount = { valueOf: function(){return 'APUTGSTAccount';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.APCessGSTAccount = { valueOf: function(){return 'APCessGSTAccount';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.ARTDSAccount = { valueOf: function(){return 'ARTDSAccount';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.ARSurchargeAccount = { valueOf: function(){return 'ARSurchargeAccount';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.ARCessAccount = { valueOf: function(){return 'ARCessAccount';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.ARHSCAccount = { valueOf: function(){return 'ARHSCAccount';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.ARIGSTAccount = { valueOf: function(){return 'ARIGSTAccount';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.ARCGSTAccount = { valueOf: function(){return 'ARCGSTAccount';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.ARSGSTAccount = { valueOf: function(){return 'ARSGSTAccount';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.ARUTGSTAccount = { valueOf: function(){return 'ARUTGSTAccount';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.ARCessGSTAccount = { valueOf: function(){return 'ARCessGSTAccount';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.Int32', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.ReturnType = { valueOf: function(){return 'ReturnType';}, Type: 'ReturnTypeEnum', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.Inactive = { valueOf: function(){return 'Inactive';}, Type: 'BoYesNoEnum', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.CSTCodeIncomingID = { valueOf: function(){return 'CSTCodeIncomingID';}, Type: 'Edm.Int32', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.CSTCodeOutgoingID = { valueOf: function(){return 'CSTCodeOutgoingID';}, Type: 'Edm.Int32', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.NatureOfCalculationBaseCode = { valueOf: function(){return 'NatureOfCalculationBaseCode';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.TypeID = { valueOf: function(){return 'TypeID';}, Type: 'Edm.Int32', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.Rate = { valueOf: function(){return 'Rate';}, Type: 'Edm.Double', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.EffectiveFrom = { valueOf: function(){return 'EffectiveFrom';}, Type: 'Edm.DateTime', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.MinimumTaxableAmount = { valueOf: function(){return 'MinimumTaxableAmount';}, Type: 'Edm.Double', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.IsProgressiveTax = { valueOf: function(){return 'IsProgressiveTax';}, Type: 'BoYesNoEnum', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.Currency = { valueOf: function(){return 'Currency';}, Type: 'Edm.String', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.TdsType = { valueOf: function(){return 'TdsType';}, Type: 'TdsTypeEnum', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCode.WithholdingTaxCodes_Lines = { valueOf: function(){return 'WithholdingTaxCodes_Lines';}, Type: 'WithholdingTaxCodes_Line', Index: 45, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.WithholdingTaxCode.prototype.WTCode = new String();
SAPB1.WithholdingTaxCode.prototype.WTName = new String();
SAPB1.WithholdingTaxCode.prototype.Category = new String();
SAPB1.WithholdingTaxCode.prototype.BaseType = new String();
SAPB1.WithholdingTaxCode.prototype.BaseAmount = new Number();
SAPB1.WithholdingTaxCode.prototype.OfficialCode = new String();
SAPB1.WithholdingTaxCode.prototype.Account = new String();
SAPB1.WithholdingTaxCode.prototype.WithholdingType = new String();
SAPB1.WithholdingTaxCode.prototype.RoundingType = new String();
SAPB1.WithholdingTaxCode.prototype.Section = new Number();
SAPB1.WithholdingTaxCode.prototype.Threshold = new Number();
SAPB1.WithholdingTaxCode.prototype.Surcharge = new Number();
SAPB1.WithholdingTaxCode.prototype.Concessional = new String();
SAPB1.WithholdingTaxCode.prototype.Assessee = new Number();
SAPB1.WithholdingTaxCode.prototype.APTDSAccount = new String();
SAPB1.WithholdingTaxCode.prototype.APSurchargeAccount = new String();
SAPB1.WithholdingTaxCode.prototype.APCessAccount = new String();
SAPB1.WithholdingTaxCode.prototype.APHSCAccount = new String();
SAPB1.WithholdingTaxCode.prototype.APIGSTAccount = new String();
SAPB1.WithholdingTaxCode.prototype.APCGSTAccount = new String();
SAPB1.WithholdingTaxCode.prototype.APSGSTAccount = new String();
SAPB1.WithholdingTaxCode.prototype.APUTGSTAccount = new String();
SAPB1.WithholdingTaxCode.prototype.APCessGSTAccount = new String();
SAPB1.WithholdingTaxCode.prototype.ARTDSAccount = new String();
SAPB1.WithholdingTaxCode.prototype.ARSurchargeAccount = new String();
SAPB1.WithholdingTaxCode.prototype.ARCessAccount = new String();
SAPB1.WithholdingTaxCode.prototype.ARHSCAccount = new String();
SAPB1.WithholdingTaxCode.prototype.ARIGSTAccount = new String();
SAPB1.WithholdingTaxCode.prototype.ARCGSTAccount = new String();
SAPB1.WithholdingTaxCode.prototype.ARSGSTAccount = new String();
SAPB1.WithholdingTaxCode.prototype.ARUTGSTAccount = new String();
SAPB1.WithholdingTaxCode.prototype.ARCessGSTAccount = new String();
SAPB1.WithholdingTaxCode.prototype.Location = new Number();
SAPB1.WithholdingTaxCode.prototype.ReturnType = new String();
SAPB1.WithholdingTaxCode.prototype.Inactive = new String();
SAPB1.WithholdingTaxCode.prototype.CSTCodeIncomingID = new Number();
SAPB1.WithholdingTaxCode.prototype.CSTCodeOutgoingID = new Number();
SAPB1.WithholdingTaxCode.prototype.NatureOfCalculationBaseCode = new String();
SAPB1.WithholdingTaxCode.prototype.TypeID = new Number();
SAPB1.WithholdingTaxCode.prototype.Rate = new Number();
SAPB1.WithholdingTaxCode.prototype.EffectiveFrom = new String();
SAPB1.WithholdingTaxCode.prototype.MinimumTaxableAmount = new Number();
SAPB1.WithholdingTaxCode.prototype.IsProgressiveTax = new String();
SAPB1.WithholdingTaxCode.prototype.Currency = new String();
SAPB1.WithholdingTaxCode.prototype.TdsType = new String();
SAPB1.WithholdingTaxCode.prototype.WithholdingTaxCodes_Lines = new WithholdingTaxCodes_LineCollection();

SAPB1.WithholdingTaxCode.WithholdingTaxCodes_Line = WithholdingTaxCodes_Line
SAPB1.WithholdingTaxCode.WithholdingTaxCodes_LineCollection = WithholdingTaxCodes_LineCollection

SAPB1.WithholdingTaxCode.WithholdingTaxCodeCategoryEnum = WithholdingTaxCodeCategoryEnum
SAPB1.WithholdingTaxCode.WithholdingTaxCodeBaseTypeEnum = WithholdingTaxCodeBaseTypeEnum
SAPB1.WithholdingTaxCode.WithholdingTypeEnum = WithholdingTypeEnum
SAPB1.WithholdingTaxCode.RoundingTypeEnum = RoundingTypeEnum
SAPB1.WithholdingTaxCode.BoYesNoEnum = BoYesNoEnum
SAPB1.WithholdingTaxCode.ReturnTypeEnum = ReturnTypeEnum
SAPB1.WithholdingTaxCode.TdsTypeEnum = TdsTypeEnum

SAPB1.WithholdingTaxCode.create = function (rawObject) {
    var instance = new SAPB1.WithholdingTaxCode();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WithholdingTaxCode.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WithholdingTaxCode;
