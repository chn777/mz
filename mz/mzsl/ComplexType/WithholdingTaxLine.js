
var BoStatus = require('EnumType/BoStatus')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WithholdingTaxLine = function () {
}
SAPB1.WithholdingTaxLine.prototype = new SAPB1.ComplexType();
SAPB1.WithholdingTaxLine.prototype.constructor = SAPB1.WithholdingTaxLine;
SAPB1.WithholdingTaxLine.WTCode = { valueOf: function(){return 'WTCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.WTAmountSys = { valueOf: function(){return 'WTAmountSys';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.WTAmountFC = { valueOf: function(){return 'WTAmountFC';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.WTAmount = { valueOf: function(){return 'WTAmount';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.WithholdingType = { valueOf: function(){return 'WithholdingType';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.TaxableAmountinSys = { valueOf: function(){return 'TaxableAmountinSys';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.TaxableAmountFC = { valueOf: function(){return 'TaxableAmountFC';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.TaxableAmount = { valueOf: function(){return 'TaxableAmount';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.RoundingType = { valueOf: function(){return 'RoundingType';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.Rate = { valueOf: function(){return 'Rate';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.Criteria = { valueOf: function(){return 'Criteria';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.Category = { valueOf: function(){return 'Category';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.BaseType = { valueOf: function(){return 'BaseType';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.AppliedWTAmountSys = { valueOf: function(){return 'AppliedWTAmountSys';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.AppliedWTAmountFC = { valueOf: function(){return 'AppliedWTAmountFC';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.AppliedWTAmount = { valueOf: function(){return 'AppliedWTAmount';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.GLAccount = { valueOf: function(){return 'GLAccount';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 17, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.BaseDocEntry = { valueOf: function(){return 'BaseDocEntry';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.BaseDocLine = { valueOf: function(){return 'BaseDocLine';}, Type: 'Edm.Int32', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.BaseDocType = { valueOf: function(){return 'BaseDocType';}, Type: 'Edm.Int32', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.BaseDocumentReference = { valueOf: function(){return 'BaseDocumentReference';}, Type: 'Edm.Int32', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.Status = { valueOf: function(){return 'Status';}, Type: 'BoStatus', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.TargetAbsEntry = { valueOf: function(){return 'TargetAbsEntry';}, Type: 'Edm.Int32', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.TargetDocumentType = { valueOf: function(){return 'TargetDocumentType';}, Type: 'Edm.Int32', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.CSTCodeIncoming = { valueOf: function(){return 'CSTCodeIncoming';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.CSTCodeOutgoing = { valueOf: function(){return 'CSTCodeOutgoing';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxLine.prototype.WTCode = new String();
SAPB1.WithholdingTaxLine.prototype.WTAmountSys = new Number();
SAPB1.WithholdingTaxLine.prototype.WTAmountFC = new Number();
SAPB1.WithholdingTaxLine.prototype.WTAmount = new Number();
SAPB1.WithholdingTaxLine.prototype.WithholdingType = new String();
SAPB1.WithholdingTaxLine.prototype.TaxableAmountinSys = new Number();
SAPB1.WithholdingTaxLine.prototype.TaxableAmountFC = new Number();
SAPB1.WithholdingTaxLine.prototype.TaxableAmount = new Number();
SAPB1.WithholdingTaxLine.prototype.RoundingType = new String();
SAPB1.WithholdingTaxLine.prototype.Rate = new Number();
SAPB1.WithholdingTaxLine.prototype.Criteria = new String();
SAPB1.WithholdingTaxLine.prototype.Category = new String();
SAPB1.WithholdingTaxLine.prototype.BaseType = new String();
SAPB1.WithholdingTaxLine.prototype.AppliedWTAmountSys = new Number();
SAPB1.WithholdingTaxLine.prototype.AppliedWTAmountFC = new Number();
SAPB1.WithholdingTaxLine.prototype.AppliedWTAmount = new Number();
SAPB1.WithholdingTaxLine.prototype.GLAccount = new String();
SAPB1.WithholdingTaxLine.prototype.LineNum = new Number();
SAPB1.WithholdingTaxLine.prototype.BaseDocEntry = new Number();
SAPB1.WithholdingTaxLine.prototype.BaseDocLine = new Number();
SAPB1.WithholdingTaxLine.prototype.BaseDocType = new Number();
SAPB1.WithholdingTaxLine.prototype.BaseDocumentReference = new Number();
SAPB1.WithholdingTaxLine.prototype.Status = new String();
SAPB1.WithholdingTaxLine.prototype.TargetAbsEntry = new Number();
SAPB1.WithholdingTaxLine.prototype.TargetDocumentType = new Number();
SAPB1.WithholdingTaxLine.prototype.CSTCodeIncoming = new String();
SAPB1.WithholdingTaxLine.prototype.CSTCodeOutgoing = new String();


SAPB1.WithholdingTaxLine.BoStatus = BoStatus

SAPB1.WithholdingTaxLine.create = function (rawObject) {
    var instance = new SAPB1.WithholdingTaxLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WithholdingTaxLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WithholdingTaxLine;
