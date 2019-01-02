
var BoDocSpecialLineType = require('EnumType/BoDocSpecialLineType')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DocumentSpecialLine = function () {
}
SAPB1.DocumentSpecialLine.prototype = new SAPB1.ComplexType();
SAPB1.DocumentSpecialLine.prototype.constructor = SAPB1.DocumentSpecialLine;
SAPB1.DocumentSpecialLine.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.AfterLineNumber = { valueOf: function(){return 'AfterLineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.OrderNumber = { valueOf: function(){return 'OrderNumber';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.LineType = { valueOf: function(){return 'LineType';}, Type: 'BoDocSpecialLineType', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.Subtotal = { valueOf: function(){return 'Subtotal';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.LineText = { valueOf: function(){return 'LineText';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.SubtotalFC = { valueOf: function(){return 'SubtotalFC';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.SubtotalSC = { valueOf: function(){return 'SubtotalSC';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.TaxAmount = { valueOf: function(){return 'TaxAmount';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.TaxAmountFC = { valueOf: function(){return 'TaxAmountFC';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.TaxAmountSC = { valueOf: function(){return 'TaxAmountSC';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.Freight1 = { valueOf: function(){return 'Freight1';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.Freight1FC = { valueOf: function(){return 'Freight1FC';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.Freight1SC = { valueOf: function(){return 'Freight1SC';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.Freight2 = { valueOf: function(){return 'Freight2';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.Freight2FC = { valueOf: function(){return 'Freight2FC';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.Freight2SC = { valueOf: function(){return 'Freight2SC';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.Freight3 = { valueOf: function(){return 'Freight3';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.Freight3FC = { valueOf: function(){return 'Freight3FC';}, Type: 'Edm.Double', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.Freight3SC = { valueOf: function(){return 'Freight3SC';}, Type: 'Edm.Double', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.GrossTotal = { valueOf: function(){return 'GrossTotal';}, Type: 'Edm.Double', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.GrossTotalFC = { valueOf: function(){return 'GrossTotalFC';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.GrossTotalSC = { valueOf: function(){return 'GrossTotalSC';}, Type: 'Edm.Double', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSpecialLine.prototype.LineNum = new Number();
SAPB1.DocumentSpecialLine.prototype.AfterLineNumber = new Number();
SAPB1.DocumentSpecialLine.prototype.OrderNumber = new Number();
SAPB1.DocumentSpecialLine.prototype.LineType = new String();
SAPB1.DocumentSpecialLine.prototype.Subtotal = new Number();
SAPB1.DocumentSpecialLine.prototype.LineText = new String();
SAPB1.DocumentSpecialLine.prototype.SubtotalFC = new Number();
SAPB1.DocumentSpecialLine.prototype.SubtotalSC = new Number();
SAPB1.DocumentSpecialLine.prototype.TaxAmount = new Number();
SAPB1.DocumentSpecialLine.prototype.TaxAmountFC = new Number();
SAPB1.DocumentSpecialLine.prototype.TaxAmountSC = new Number();
SAPB1.DocumentSpecialLine.prototype.Freight1 = new Number();
SAPB1.DocumentSpecialLine.prototype.Freight1FC = new Number();
SAPB1.DocumentSpecialLine.prototype.Freight1SC = new Number();
SAPB1.DocumentSpecialLine.prototype.Freight2 = new Number();
SAPB1.DocumentSpecialLine.prototype.Freight2FC = new Number();
SAPB1.DocumentSpecialLine.prototype.Freight2SC = new Number();
SAPB1.DocumentSpecialLine.prototype.Freight3 = new Number();
SAPB1.DocumentSpecialLine.prototype.Freight3FC = new Number();
SAPB1.DocumentSpecialLine.prototype.Freight3SC = new Number();
SAPB1.DocumentSpecialLine.prototype.GrossTotal = new Number();
SAPB1.DocumentSpecialLine.prototype.GrossTotalFC = new Number();
SAPB1.DocumentSpecialLine.prototype.GrossTotalSC = new Number();


SAPB1.DocumentSpecialLine.BoDocSpecialLineType = BoDocSpecialLineType

SAPB1.DocumentSpecialLine.create = function (rawObject) {
    var instance = new SAPB1.DocumentSpecialLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DocumentSpecialLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DocumentSpecialLine;
