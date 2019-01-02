

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesTaxCodes_Line = function () {
}
SAPB1.SalesTaxCodes_Line.prototype = new SAPB1.ComplexType();
SAPB1.SalesTaxCodes_Line.prototype.constructor = SAPB1.SalesTaxCodes_Line;
SAPB1.SalesTaxCodes_Line.STATaxOnTaxType = { valueOf: function(){return 'STATaxOnTaxType';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxCodes_Line.STATaxonTaxCode = { valueOf: function(){return 'STATaxonTaxCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxCodes_Line.STCCode = { valueOf: function(){return 'STCCode';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesTaxCodes_Line.STAType = { valueOf: function(){return 'STAType';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxCodes_Line.STACode = { valueOf: function(){return 'STACode';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxCodes_Line.RowNumber = { valueOf: function(){return 'RowNumber';}, Type: 'Edm.Int32', Index: 5, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesTaxCodes_Line.EffectiveRate = { valueOf: function(){return 'EffectiveRate';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxCodes_Line.prototype.STATaxOnTaxType = new Number();
SAPB1.SalesTaxCodes_Line.prototype.STATaxonTaxCode = new String();
SAPB1.SalesTaxCodes_Line.prototype.STCCode = new String();
SAPB1.SalesTaxCodes_Line.prototype.STAType = new Number();
SAPB1.SalesTaxCodes_Line.prototype.STACode = new String();
SAPB1.SalesTaxCodes_Line.prototype.RowNumber = new Number();
SAPB1.SalesTaxCodes_Line.prototype.EffectiveRate = new Number();



SAPB1.SalesTaxCodes_Line.create = function (rawObject) {
    var instance = new SAPB1.SalesTaxCodes_Line();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesTaxCodes_Line.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesTaxCodes_Line;
