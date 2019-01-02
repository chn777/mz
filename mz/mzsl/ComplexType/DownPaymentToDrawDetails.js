
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var LineTypeEnum = require('EnumType/LineTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DownPaymentToDrawDetails = function () {
}
SAPB1.DownPaymentToDrawDetails.prototype = new SAPB1.ComplexType();
SAPB1.DownPaymentToDrawDetails.prototype.constructor = SAPB1.DownPaymentToDrawDetails;
SAPB1.DownPaymentToDrawDetails.DocInternalID = { valueOf: function(){return 'DocInternalID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDrawDetails.RowNum = { valueOf: function(){return 'RowNum';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDrawDetails.SeqNum = { valueOf: function(){return 'SeqNum';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDrawDetails.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDrawDetails.VatGroupCode = { valueOf: function(){return 'VatGroupCode';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDrawDetails.VatPercent = { valueOf: function(){return 'VatPercent';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDrawDetails.AmountToDraw = { valueOf: function(){return 'AmountToDraw';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDrawDetails.AmountToDrawFC = { valueOf: function(){return 'AmountToDrawFC';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDrawDetails.AmountToDrawSC = { valueOf: function(){return 'AmountToDrawSC';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDrawDetails.Tax = { valueOf: function(){return 'Tax';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDrawDetails.TaxFC = { valueOf: function(){return 'TaxFC';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDrawDetails.TaxSC = { valueOf: function(){return 'TaxSC';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDrawDetails.IsGrossLine = { valueOf: function(){return 'IsGrossLine';}, Type: 'BoYesNoEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDrawDetails.GrossAmountToDraw = { valueOf: function(){return 'GrossAmountToDraw';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDrawDetails.GrossAmountToDrawFC = { valueOf: function(){return 'GrossAmountToDrawFC';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDrawDetails.GrossAmountToDrawSC = { valueOf: function(){return 'GrossAmountToDrawSC';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDrawDetails.LineType = { valueOf: function(){return 'LineType';}, Type: 'LineTypeEnum', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDrawDetails.TaxAdjust = { valueOf: function(){return 'TaxAdjust';}, Type: 'BoYesNoEnum', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDrawDetails.prototype.DocInternalID = new Number();
SAPB1.DownPaymentToDrawDetails.prototype.RowNum = new Number();
SAPB1.DownPaymentToDrawDetails.prototype.SeqNum = new Number();
SAPB1.DownPaymentToDrawDetails.prototype.DocEntry = new Number();
SAPB1.DownPaymentToDrawDetails.prototype.VatGroupCode = new String();
SAPB1.DownPaymentToDrawDetails.prototype.VatPercent = new Number();
SAPB1.DownPaymentToDrawDetails.prototype.AmountToDraw = new Number();
SAPB1.DownPaymentToDrawDetails.prototype.AmountToDrawFC = new Number();
SAPB1.DownPaymentToDrawDetails.prototype.AmountToDrawSC = new Number();
SAPB1.DownPaymentToDrawDetails.prototype.Tax = new Number();
SAPB1.DownPaymentToDrawDetails.prototype.TaxFC = new Number();
SAPB1.DownPaymentToDrawDetails.prototype.TaxSC = new Number();
SAPB1.DownPaymentToDrawDetails.prototype.IsGrossLine = new String();
SAPB1.DownPaymentToDrawDetails.prototype.GrossAmountToDraw = new Number();
SAPB1.DownPaymentToDrawDetails.prototype.GrossAmountToDrawFC = new Number();
SAPB1.DownPaymentToDrawDetails.prototype.GrossAmountToDrawSC = new Number();
SAPB1.DownPaymentToDrawDetails.prototype.LineType = new String();
SAPB1.DownPaymentToDrawDetails.prototype.TaxAdjust = new String();


SAPB1.DownPaymentToDrawDetails.BoYesNoEnum = BoYesNoEnum
SAPB1.DownPaymentToDrawDetails.LineTypeEnum = LineTypeEnum

SAPB1.DownPaymentToDrawDetails.create = function (rawObject) {
    var instance = new SAPB1.DownPaymentToDrawDetails();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DownPaymentToDrawDetails.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DownPaymentToDrawDetails;
