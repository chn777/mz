

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WithholdingTaxCodes_ValueRange_Line = function () {
}
SAPB1.WithholdingTaxCodes_ValueRange_Line.prototype = new SAPB1.ComplexType();
SAPB1.WithholdingTaxCodes_ValueRange_Line.prototype.constructor = SAPB1.WithholdingTaxCodes_ValueRange_Line;
SAPB1.WithholdingTaxCodes_ValueRange_Line.ValueFrom = { valueOf: function(){return 'ValueFrom';}, Type: 'Edm.Double', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCodes_ValueRange_Line.WTaxToBeDeductible = { valueOf: function(){return 'WTaxToBeDeductible';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCodes_ValueRange_Line.Rate = { valueOf: function(){return 'Rate';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxCodes_ValueRange_Line.prototype.ValueFrom = new Number();
SAPB1.WithholdingTaxCodes_ValueRange_Line.prototype.WTaxToBeDeductible = new Number();
SAPB1.WithholdingTaxCodes_ValueRange_Line.prototype.Rate = new Number();



SAPB1.WithholdingTaxCodes_ValueRange_Line.create = function (rawObject) {
    var instance = new SAPB1.WithholdingTaxCodes_ValueRange_Line();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WithholdingTaxCodes_ValueRange_Line.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WithholdingTaxCodes_ValueRange_Line;
