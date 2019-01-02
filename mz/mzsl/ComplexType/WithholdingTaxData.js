
var BoStatus = require('EnumType/BoStatus')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WithholdingTaxData = function () {
}
SAPB1.WithholdingTaxData.prototype = new SAPB1.ComplexType();
SAPB1.WithholdingTaxData.prototype.constructor = SAPB1.WithholdingTaxData;
SAPB1.WithholdingTaxData.WTCode = { valueOf: function(){return 'WTCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.WTAmountSys = { valueOf: function(){return 'WTAmountSys';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.WTAmountFC = { valueOf: function(){return 'WTAmountFC';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.WTAmount = { valueOf: function(){return 'WTAmount';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.WithholdingType = { valueOf: function(){return 'WithholdingType';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.TaxableAmountinSys = { valueOf: function(){return 'TaxableAmountinSys';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.TaxableAmountFC = { valueOf: function(){return 'TaxableAmountFC';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.TaxableAmount = { valueOf: function(){return 'TaxableAmount';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.RoundingType = { valueOf: function(){return 'RoundingType';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.Rate = { valueOf: function(){return 'Rate';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.Criteria = { valueOf: function(){return 'Criteria';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.Category = { valueOf: function(){return 'Category';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.BaseType = { valueOf: function(){return 'BaseType';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.AppliedWTAmountSys = { valueOf: function(){return 'AppliedWTAmountSys';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.AppliedWTAmountFC = { valueOf: function(){return 'AppliedWTAmountFC';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.AppliedWTAmount = { valueOf: function(){return 'AppliedWTAmount';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.GLAccount = { valueOf: function(){return 'GLAccount';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 17, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.BaseDocEntry = { valueOf: function(){return 'BaseDocEntry';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.BaseDocLine = { valueOf: function(){return 'BaseDocLine';}, Type: 'Edm.Int32', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.BaseDocType = { valueOf: function(){return 'BaseDocType';}, Type: 'Edm.Int32', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.BaseDocumentReference = { valueOf: function(){return 'BaseDocumentReference';}, Type: 'Edm.Int32', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.Status = { valueOf: function(){return 'Status';}, Type: 'BoStatus', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.TargetAbsEntry = { valueOf: function(){return 'TargetAbsEntry';}, Type: 'Edm.Int32', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.TargetDocumentType = { valueOf: function(){return 'TargetDocumentType';}, Type: 'Edm.Int32', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WithholdingTaxData.prototype.WTCode = new String();
SAPB1.WithholdingTaxData.prototype.WTAmountSys = new Number();
SAPB1.WithholdingTaxData.prototype.WTAmountFC = new Number();
SAPB1.WithholdingTaxData.prototype.WTAmount = new Number();
SAPB1.WithholdingTaxData.prototype.WithholdingType = new String();
SAPB1.WithholdingTaxData.prototype.TaxableAmountinSys = new Number();
SAPB1.WithholdingTaxData.prototype.TaxableAmountFC = new Number();
SAPB1.WithholdingTaxData.prototype.TaxableAmount = new Number();
SAPB1.WithholdingTaxData.prototype.RoundingType = new String();
SAPB1.WithholdingTaxData.prototype.Rate = new Number();
SAPB1.WithholdingTaxData.prototype.Criteria = new String();
SAPB1.WithholdingTaxData.prototype.Category = new String();
SAPB1.WithholdingTaxData.prototype.BaseType = new String();
SAPB1.WithholdingTaxData.prototype.AppliedWTAmountSys = new Number();
SAPB1.WithholdingTaxData.prototype.AppliedWTAmountFC = new Number();
SAPB1.WithholdingTaxData.prototype.AppliedWTAmount = new Number();
SAPB1.WithholdingTaxData.prototype.GLAccount = new String();
SAPB1.WithholdingTaxData.prototype.LineNum = new Number();
SAPB1.WithholdingTaxData.prototype.BaseDocEntry = new Number();
SAPB1.WithholdingTaxData.prototype.BaseDocLine = new Number();
SAPB1.WithholdingTaxData.prototype.BaseDocType = new Number();
SAPB1.WithholdingTaxData.prototype.BaseDocumentReference = new Number();
SAPB1.WithholdingTaxData.prototype.Status = new String();
SAPB1.WithholdingTaxData.prototype.TargetAbsEntry = new Number();
SAPB1.WithholdingTaxData.prototype.TargetDocumentType = new Number();


SAPB1.WithholdingTaxData.BoStatus = BoStatus

SAPB1.WithholdingTaxData.create = function (rawObject) {
    var instance = new SAPB1.WithholdingTaxData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WithholdingTaxData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WithholdingTaxData;
