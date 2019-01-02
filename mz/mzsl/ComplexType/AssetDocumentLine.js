
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AssetDocumentLine = function () {
}
SAPB1.AssetDocumentLine.prototype = new SAPB1.ComplexType();
SAPB1.AssetDocumentLine.prototype.constructor = SAPB1.AssetDocumentLine;
SAPB1.AssetDocumentLine.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.AssetNumber = { valueOf: function(){return 'AssetNumber';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.GLAccount = { valueOf: function(){return 'GLAccount';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.TotalLC = { valueOf: function(){return 'TotalLC';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.TotalFC = { valueOf: function(){return 'TotalFC';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.TotalSC = { valueOf: function(){return 'TotalSC';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.DepreciationArea = { valueOf: function(){return 'DepreciationArea';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.NewAssetNumber = { valueOf: function(){return 'NewAssetNumber';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.Partial = { valueOf: function(){return 'Partial';}, Type: 'BoYesNoEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.APC = { valueOf: function(){return 'APC';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.NewAssetClass = { valueOf: function(){return 'NewAssetClass';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.DistributionRule = { valueOf: function(){return 'DistributionRule';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.DistributionRule2 = { valueOf: function(){return 'DistributionRule2';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.DistributionRule3 = { valueOf: function(){return 'DistributionRule3';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.DistributionRule4 = { valueOf: function(){return 'DistributionRule4';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.DistributionRule5 = { valueOf: function(){return 'DistributionRule5';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.Project = { valueOf: function(){return 'Project';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentLine.prototype.DocEntry = new Number();
SAPB1.AssetDocumentLine.prototype.LineNumber = new Number();
SAPB1.AssetDocumentLine.prototype.AssetNumber = new String();
SAPB1.AssetDocumentLine.prototype.GLAccount = new String();
SAPB1.AssetDocumentLine.prototype.Quantity = new Number();
SAPB1.AssetDocumentLine.prototype.TotalLC = new Number();
SAPB1.AssetDocumentLine.prototype.TotalFC = new Number();
SAPB1.AssetDocumentLine.prototype.TotalSC = new Number();
SAPB1.AssetDocumentLine.prototype.DepreciationArea = new String();
SAPB1.AssetDocumentLine.prototype.Remarks = new String();
SAPB1.AssetDocumentLine.prototype.NewAssetNumber = new String();
SAPB1.AssetDocumentLine.prototype.Partial = new String();
SAPB1.AssetDocumentLine.prototype.APC = new Number();
SAPB1.AssetDocumentLine.prototype.NewAssetClass = new String();
SAPB1.AssetDocumentLine.prototype.DistributionRule = new String();
SAPB1.AssetDocumentLine.prototype.DistributionRule2 = new String();
SAPB1.AssetDocumentLine.prototype.DistributionRule3 = new String();
SAPB1.AssetDocumentLine.prototype.DistributionRule4 = new String();
SAPB1.AssetDocumentLine.prototype.DistributionRule5 = new String();
SAPB1.AssetDocumentLine.prototype.Project = new String();


SAPB1.AssetDocumentLine.BoYesNoEnum = BoYesNoEnum

SAPB1.AssetDocumentLine.create = function (rawObject) {
    var instance = new SAPB1.AssetDocumentLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AssetDocumentLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AssetDocumentLine;
