var ProgressiveTax_Line = require('ComplexType/ProgressiveTax_Line')
var ProgressiveTax_LineCollection = require('ComplexType/ProgressiveTax_LineCollection')
var WithholdingTaxCodes_ValueRange_Line = require('ComplexType/WithholdingTaxCodes_ValueRange_Line')
var WithholdingTaxCodes_ValueRange_LineCollection = require('ComplexType/WithholdingTaxCodes_ValueRange_LineCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WithholdingTaxCodes_Line = function () {
}
SAPB1.WithholdingTaxCodes_Line.prototype = new SAPB1.ComplexType();
SAPB1.WithholdingTaxCodes_Line.prototype.constructor = SAPB1.WithholdingTaxCodes_Line;
SAPB1.WithholdingTaxCodes_Line.Effectivefrom = { valueOf: function(){return 'Effectivefrom';}, Type: 'Edm.DateTime', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCodes_Line.Rate = { valueOf: function(){return 'Rate';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCodes_Line.TDSRate = { valueOf: function(){return 'TDSRate';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCodes_Line.SurchargeRate = { valueOf: function(){return 'SurchargeRate';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCodes_Line.CessRate = { valueOf: function(){return 'CessRate';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCodes_Line.HSCRate = { valueOf: function(){return 'HSCRate';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCodes_Line.IGSTRate = { valueOf: function(){return 'IGSTRate';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCodes_Line.CGSTRate = { valueOf: function(){return 'CGSTRate';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCodes_Line.SGSTRate = { valueOf: function(){return 'SGSTRate';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCodes_Line.UTGSTRate = { valueOf: function(){return 'UTGSTRate';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCodes_Line.CessGSTRate = { valueOf: function(){return 'CessGSTRate';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCodes_Line.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 11, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCodes_Line.ProgressiveTax_Lines = { valueOf: function(){return 'ProgressiveTax_Lines';}, Type: 'ProgressiveTax_Line', Index: 12, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.WithholdingTaxCodes_Line.WithholdingTaxCodes_ValueRange_Lines = { valueOf: function(){return 'WithholdingTaxCodes_ValueRange_Lines';}, Type: 'WithholdingTaxCodes_ValueRange_Line', Index: 13, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.WithholdingTaxCodes_Line.prototype.Effectivefrom = new String();
SAPB1.WithholdingTaxCodes_Line.prototype.Rate = new Number();
SAPB1.WithholdingTaxCodes_Line.prototype.TDSRate = new Number();
SAPB1.WithholdingTaxCodes_Line.prototype.SurchargeRate = new Number();
SAPB1.WithholdingTaxCodes_Line.prototype.CessRate = new Number();
SAPB1.WithholdingTaxCodes_Line.prototype.HSCRate = new Number();
SAPB1.WithholdingTaxCodes_Line.prototype.IGSTRate = new Number();
SAPB1.WithholdingTaxCodes_Line.prototype.CGSTRate = new Number();
SAPB1.WithholdingTaxCodes_Line.prototype.SGSTRate = new Number();
SAPB1.WithholdingTaxCodes_Line.prototype.UTGSTRate = new Number();
SAPB1.WithholdingTaxCodes_Line.prototype.CessGSTRate = new Number();
SAPB1.WithholdingTaxCodes_Line.prototype.LineNum = new Number();
SAPB1.WithholdingTaxCodes_Line.prototype.ProgressiveTax_Lines = new ProgressiveTax_LineCollection();
SAPB1.WithholdingTaxCodes_Line.prototype.WithholdingTaxCodes_ValueRange_Lines = new WithholdingTaxCodes_ValueRange_LineCollection();

SAPB1.WithholdingTaxCodes_Line.ProgressiveTax_Line = ProgressiveTax_Line
SAPB1.WithholdingTaxCodes_Line.ProgressiveTax_LineCollection = ProgressiveTax_LineCollection
SAPB1.WithholdingTaxCodes_Line.WithholdingTaxCodes_ValueRange_Line = WithholdingTaxCodes_ValueRange_Line
SAPB1.WithholdingTaxCodes_Line.WithholdingTaxCodes_ValueRange_LineCollection = WithholdingTaxCodes_ValueRange_LineCollection


SAPB1.WithholdingTaxCodes_Line.create = function (rawObject) {
    var instance = new SAPB1.WithholdingTaxCodes_Line();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WithholdingTaxCodes_Line.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WithholdingTaxCodes_Line;
