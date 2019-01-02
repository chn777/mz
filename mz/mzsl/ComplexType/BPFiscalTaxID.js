
var BoAddressType = require('EnumType/BoAddressType')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BPFiscalTaxID = function () {
}
SAPB1.BPFiscalTaxID.prototype = new SAPB1.ComplexType();
SAPB1.BPFiscalTaxID.prototype.constructor = SAPB1.BPFiscalTaxID;
SAPB1.BPFiscalTaxID.Address = { valueOf: function(){return 'Address';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPFiscalTaxID.CNAECode = { valueOf: function(){return 'CNAECode';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPFiscalTaxID.TaxId0 = { valueOf: function(){return 'TaxId0';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPFiscalTaxID.TaxId1 = { valueOf: function(){return 'TaxId1';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPFiscalTaxID.TaxId2 = { valueOf: function(){return 'TaxId2';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPFiscalTaxID.TaxId3 = { valueOf: function(){return 'TaxId3';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPFiscalTaxID.TaxId4 = { valueOf: function(){return 'TaxId4';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPFiscalTaxID.TaxId5 = { valueOf: function(){return 'TaxId5';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPFiscalTaxID.TaxId6 = { valueOf: function(){return 'TaxId6';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPFiscalTaxID.TaxId7 = { valueOf: function(){return 'TaxId7';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPFiscalTaxID.TaxId8 = { valueOf: function(){return 'TaxId8';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPFiscalTaxID.TaxId9 = { valueOf: function(){return 'TaxId9';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPFiscalTaxID.TaxId10 = { valueOf: function(){return 'TaxId10';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPFiscalTaxID.TaxId11 = { valueOf: function(){return 'TaxId11';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPFiscalTaxID.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 14, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BPFiscalTaxID.AddrType = { valueOf: function(){return 'AddrType';}, Type: 'BoAddressType', Index: 15, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BPFiscalTaxID.TaxId12 = { valueOf: function(){return 'TaxId12';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPFiscalTaxID.TaxId13 = { valueOf: function(){return 'TaxId13';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPFiscalTaxID.prototype.Address = new String();
SAPB1.BPFiscalTaxID.prototype.CNAECode = new Number();
SAPB1.BPFiscalTaxID.prototype.TaxId0 = new String();
SAPB1.BPFiscalTaxID.prototype.TaxId1 = new String();
SAPB1.BPFiscalTaxID.prototype.TaxId2 = new String();
SAPB1.BPFiscalTaxID.prototype.TaxId3 = new String();
SAPB1.BPFiscalTaxID.prototype.TaxId4 = new String();
SAPB1.BPFiscalTaxID.prototype.TaxId5 = new String();
SAPB1.BPFiscalTaxID.prototype.TaxId6 = new String();
SAPB1.BPFiscalTaxID.prototype.TaxId7 = new String();
SAPB1.BPFiscalTaxID.prototype.TaxId8 = new String();
SAPB1.BPFiscalTaxID.prototype.TaxId9 = new String();
SAPB1.BPFiscalTaxID.prototype.TaxId10 = new String();
SAPB1.BPFiscalTaxID.prototype.TaxId11 = new String();
SAPB1.BPFiscalTaxID.prototype.BPCode = new String();
SAPB1.BPFiscalTaxID.prototype.AddrType = new String();
SAPB1.BPFiscalTaxID.prototype.TaxId12 = new String();
SAPB1.BPFiscalTaxID.prototype.TaxId13 = new String();


SAPB1.BPFiscalTaxID.BoAddressType = BoAddressType

SAPB1.BPFiscalTaxID.create = function (rawObject) {
    var instance = new SAPB1.BPFiscalTaxID();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BPFiscalTaxID.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BPFiscalTaxID;
