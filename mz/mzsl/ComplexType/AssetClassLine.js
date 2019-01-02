
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AssetClassLine = function () {
}
SAPB1.AssetClassLine.prototype = new SAPB1.ComplexType();
SAPB1.AssetClassLine.prototype.constructor = SAPB1.AssetClassLine;
SAPB1.AssetClassLine.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AssetClassLine.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AssetClassLine.DepreciationAreaID = { valueOf: function(){return 'DepreciationAreaID';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetClassLine.ActiveStatus = { valueOf: function(){return 'ActiveStatus';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetClassLine.AccountDetermination = { valueOf: function(){return 'AccountDetermination';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetClassLine.DepreciationTypeID = { valueOf: function(){return 'DepreciationTypeID';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetClassLine.UseLife = { valueOf: function(){return 'UseLife';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetClassLine.prototype.Code = new String();
SAPB1.AssetClassLine.prototype.LineNumber = new Number();
SAPB1.AssetClassLine.prototype.DepreciationAreaID = new String();
SAPB1.AssetClassLine.prototype.ActiveStatus = new String();
SAPB1.AssetClassLine.prototype.AccountDetermination = new String();
SAPB1.AssetClassLine.prototype.DepreciationTypeID = new String();
SAPB1.AssetClassLine.prototype.UseLife = new Number();


SAPB1.AssetClassLine.BoYesNoEnum = BoYesNoEnum

SAPB1.AssetClassLine.create = function (rawObject) {
    var instance = new SAPB1.AssetClassLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AssetClassLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AssetClassLine;
