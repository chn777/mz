var DownPaymentToDrawDetails = require('ComplexType/DownPaymentToDrawDetails')
var DownPaymentToDrawDetailsCollection = require('ComplexType/DownPaymentToDrawDetailsCollection')

var DownPaymentTypeEnum = require('EnumType/DownPaymentTypeEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DownPaymentToDraw = function () {
}
SAPB1.DownPaymentToDraw.prototype = new SAPB1.ComplexType();
SAPB1.DownPaymentToDraw.prototype.constructor = SAPB1.DownPaymentToDraw;
SAPB1.DownPaymentToDraw.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.PostingDate = { valueOf: function(){return 'PostingDate';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.AmountToDraw = { valueOf: function(){return 'AmountToDraw';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.DownPaymentType = { valueOf: function(){return 'DownPaymentType';}, Type: 'DownPaymentTypeEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.AmountToDrawFC = { valueOf: function(){return 'AmountToDrawFC';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.AmountToDrawSC = { valueOf: function(){return 'AmountToDrawSC';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.DocInternalID = { valueOf: function(){return 'DocInternalID';}, Type: 'Edm.Int32', Index: 9, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.RowNum = { valueOf: function(){return 'RowNum';}, Type: 'Edm.Int32', Index: 10, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.DocNumber = { valueOf: function(){return 'DocNumber';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.Tax = { valueOf: function(){return 'Tax';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.TaxFC = { valueOf: function(){return 'TaxFC';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.TaxSC = { valueOf: function(){return 'TaxSC';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.GrossAmountToDraw = { valueOf: function(){return 'GrossAmountToDraw';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.GrossAmountToDrawFC = { valueOf: function(){return 'GrossAmountToDrawFC';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.GrossAmountToDrawSC = { valueOf: function(){return 'GrossAmountToDrawSC';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.IsGrossLine = { valueOf: function(){return 'IsGrossLine';}, Type: 'BoYesNoEnum', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DownPaymentToDraw.DownPaymentsToDrawDetails = { valueOf: function(){return 'DownPaymentsToDrawDetails';}, Type: 'DownPaymentToDrawDetails', Index: 19, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.DownPaymentToDraw.prototype.DocEntry = new Number();
SAPB1.DownPaymentToDraw.prototype.PostingDate = new String();
SAPB1.DownPaymentToDraw.prototype.DueDate = new String();
SAPB1.DownPaymentToDraw.prototype.Name = new String();
SAPB1.DownPaymentToDraw.prototype.Details = new String();
SAPB1.DownPaymentToDraw.prototype.AmountToDraw = new Number();
SAPB1.DownPaymentToDraw.prototype.DownPaymentType = new String();
SAPB1.DownPaymentToDraw.prototype.AmountToDrawFC = new Number();
SAPB1.DownPaymentToDraw.prototype.AmountToDrawSC = new Number();
SAPB1.DownPaymentToDraw.prototype.DocInternalID = new Number();
SAPB1.DownPaymentToDraw.prototype.RowNum = new Number();
SAPB1.DownPaymentToDraw.prototype.DocNumber = new Number();
SAPB1.DownPaymentToDraw.prototype.Tax = new Number();
SAPB1.DownPaymentToDraw.prototype.TaxFC = new Number();
SAPB1.DownPaymentToDraw.prototype.TaxSC = new Number();
SAPB1.DownPaymentToDraw.prototype.GrossAmountToDraw = new Number();
SAPB1.DownPaymentToDraw.prototype.GrossAmountToDrawFC = new Number();
SAPB1.DownPaymentToDraw.prototype.GrossAmountToDrawSC = new Number();
SAPB1.DownPaymentToDraw.prototype.IsGrossLine = new String();
SAPB1.DownPaymentToDraw.prototype.DownPaymentsToDrawDetails = new DownPaymentToDrawDetailsCollection();

SAPB1.DownPaymentToDraw.DownPaymentToDrawDetails = DownPaymentToDrawDetails
SAPB1.DownPaymentToDraw.DownPaymentToDrawDetailsCollection = DownPaymentToDrawDetailsCollection

SAPB1.DownPaymentToDraw.DownPaymentTypeEnum = DownPaymentTypeEnum
SAPB1.DownPaymentToDraw.BoYesNoEnum = BoYesNoEnum

SAPB1.DownPaymentToDraw.create = function (rawObject) {
    var instance = new SAPB1.DownPaymentToDraw();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DownPaymentToDraw.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DownPaymentToDraw;
