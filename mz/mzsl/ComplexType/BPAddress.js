
var BoAddressType = require('EnumType/BoAddressType')
var BoGSTRegnTypeEnum = require('EnumType/BoGSTRegnTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BPAddress = function () {
}
SAPB1.BPAddress.prototype = new SAPB1.ComplexType();
SAPB1.BPAddress.prototype.constructor = SAPB1.BPAddress;
SAPB1.BPAddress.AddressName = { valueOf: function(){return 'AddressName';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.Street = { valueOf: function(){return 'Street';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.Block = { valueOf: function(){return 'Block';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.ZipCode = { valueOf: function(){return 'ZipCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.City = { valueOf: function(){return 'City';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.County = { valueOf: function(){return 'County';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.Country = { valueOf: function(){return 'Country';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.State = { valueOf: function(){return 'State';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.FederalTaxID = { valueOf: function(){return 'FederalTaxID';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.TaxCode = { valueOf: function(){return 'TaxCode';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.BuildingFloorRoom = { valueOf: function(){return 'BuildingFloorRoom';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.AddressType = { valueOf: function(){return 'AddressType';}, Type: 'BoAddressType', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.AddressName2 = { valueOf: function(){return 'AddressName2';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.AddressName3 = { valueOf: function(){return 'AddressName3';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.TypeOfAddress = { valueOf: function(){return 'TypeOfAddress';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.StreetNo = { valueOf: function(){return 'StreetNo';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 16, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BPAddress.RowNum = { valueOf: function(){return 'RowNum';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.GlobalLocationNumber = { valueOf: function(){return 'GlobalLocationNumber';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.Nationality = { valueOf: function(){return 'Nationality';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.TaxOffice = { valueOf: function(){return 'TaxOffice';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.GSTIN = { valueOf: function(){return 'GSTIN';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.GstType = { valueOf: function(){return 'GstType';}, Type: 'BoGSTRegnTypeEnum', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.CreateDate = { valueOf: function(){return 'CreateDate';}, Type: 'Edm.DateTime', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.CreateTime = { valueOf: function(){return 'CreateTime';}, Type: 'Edm.Time', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAddress.prototype.AddressName = new String();
SAPB1.BPAddress.prototype.Street = new String();
SAPB1.BPAddress.prototype.Block = new String();
SAPB1.BPAddress.prototype.ZipCode = new String();
SAPB1.BPAddress.prototype.City = new String();
SAPB1.BPAddress.prototype.County = new String();
SAPB1.BPAddress.prototype.Country = new String();
SAPB1.BPAddress.prototype.State = new String();
SAPB1.BPAddress.prototype.FederalTaxID = new String();
SAPB1.BPAddress.prototype.TaxCode = new String();
SAPB1.BPAddress.prototype.BuildingFloorRoom = new String();
SAPB1.BPAddress.prototype.AddressType = new String();
SAPB1.BPAddress.prototype.AddressName2 = new String();
SAPB1.BPAddress.prototype.AddressName3 = new String();
SAPB1.BPAddress.prototype.TypeOfAddress = new String();
SAPB1.BPAddress.prototype.StreetNo = new String();
SAPB1.BPAddress.prototype.BPCode = new String();
SAPB1.BPAddress.prototype.RowNum = new Number();
SAPB1.BPAddress.prototype.GlobalLocationNumber = new String();
SAPB1.BPAddress.prototype.Nationality = new String();
SAPB1.BPAddress.prototype.TaxOffice = new String();
SAPB1.BPAddress.prototype.GSTIN = new String();
SAPB1.BPAddress.prototype.GstType = new String();
SAPB1.BPAddress.prototype.CreateDate = new String();
SAPB1.BPAddress.prototype.CreateTime = new String();


SAPB1.BPAddress.BoAddressType = BoAddressType
SAPB1.BPAddress.BoGSTRegnTypeEnum = BoGSTRegnTypeEnum

SAPB1.BPAddress.create = function (rawObject) {
    var instance = new SAPB1.BPAddress();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BPAddress.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BPAddress;
