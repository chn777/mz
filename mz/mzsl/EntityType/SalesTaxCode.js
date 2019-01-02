var SalesTaxCodes_Line = require('ComplexType/SalesTaxCodes_Line')
var SalesTaxCodes_LineCollection = require('ComplexType/SalesTaxCodes_LineCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesTaxCode = function () {
}
SAPB1.SalesTaxCode.prototype = new SAPB1.EntityType();
SAPB1.SalesTaxCode.prototype.constructor = SAPB1.SalesTaxCode;
SAPB1.SalesTaxCode.prototype.keys.push('Code');
SAPB1.SalesTaxCode.ValidForAR = { valueOf: function(){return 'ValidForAR';}, Type: 'BoYesNoEnum', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxCode.ValidForAP = { valueOf: function(){return 'ValidForAP';}, Type: 'BoYesNoEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxCode.UserSignature = { valueOf: function(){return 'UserSignature';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxCode.Rate = { valueOf: function(){return 'Rate';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxCode.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxCode.Freight = { valueOf: function(){return 'Freight';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxCode.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 6, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesTaxCode.IsItemLevel = { valueOf: function(){return 'IsItemLevel';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxCode.Inactive = { valueOf: function(){return 'Inactive';}, Type: 'BoYesNoEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxCode.FADebit = { valueOf: function(){return 'FADebit';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxCode.SalesTaxCodes_Lines = { valueOf: function(){return 'SalesTaxCodes_Lines';}, Type: 'SalesTaxCodes_Line', Index: 10, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.SalesTaxCode.prototype.ValidForAR = new String();
SAPB1.SalesTaxCode.prototype.ValidForAP = new String();
SAPB1.SalesTaxCode.prototype.UserSignature = new Number();
SAPB1.SalesTaxCode.prototype.Rate = new Number();
SAPB1.SalesTaxCode.prototype.Name = new String();
SAPB1.SalesTaxCode.prototype.Freight = new String();
SAPB1.SalesTaxCode.prototype.Code = new String();
SAPB1.SalesTaxCode.prototype.IsItemLevel = new String();
SAPB1.SalesTaxCode.prototype.Inactive = new String();
SAPB1.SalesTaxCode.prototype.FADebit = new String();
SAPB1.SalesTaxCode.prototype.SalesTaxCodes_Lines = new SalesTaxCodes_LineCollection();

SAPB1.SalesTaxCode.SalesTaxCodes_Line = SalesTaxCodes_Line
SAPB1.SalesTaxCode.SalesTaxCodes_LineCollection = SalesTaxCodes_LineCollection

SAPB1.SalesTaxCode.BoYesNoEnum = BoYesNoEnum

SAPB1.SalesTaxCode.create = function (rawObject) {
    var instance = new SAPB1.SalesTaxCode();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesTaxCode.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesTaxCode;
