
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var ImportOrExportTypeEnum = require('EnumType/ImportOrExportTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxExtension = function () {
}
SAPB1.TaxExtension.prototype = new SAPB1.ComplexType();
SAPB1.TaxExtension.prototype.constructor = SAPB1.TaxExtension;
SAPB1.TaxExtension.TaxId0 = { valueOf: function(){return 'TaxId0';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.TaxId1 = { valueOf: function(){return 'TaxId1';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.TaxId2 = { valueOf: function(){return 'TaxId2';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.TaxId3 = { valueOf: function(){return 'TaxId3';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.TaxId4 = { valueOf: function(){return 'TaxId4';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.TaxId5 = { valueOf: function(){return 'TaxId5';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.TaxId6 = { valueOf: function(){return 'TaxId6';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.TaxId7 = { valueOf: function(){return 'TaxId7';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.TaxId8 = { valueOf: function(){return 'TaxId8';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.TaxId9 = { valueOf: function(){return 'TaxId9';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.State = { valueOf: function(){return 'State';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.County = { valueOf: function(){return 'County';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.Incoterms = { valueOf: function(){return 'Incoterms';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.Vehicle = { valueOf: function(){return 'Vehicle';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.VehicleState = { valueOf: function(){return 'VehicleState';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.NFRef = { valueOf: function(){return 'NFRef';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.Carrier = { valueOf: function(){return 'Carrier';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.PackQuantity = { valueOf: function(){return 'PackQuantity';}, Type: 'Edm.Int32', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.PackDescription = { valueOf: function(){return 'PackDescription';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.Brand = { valueOf: function(){return 'Brand';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.ShipUnitNo = { valueOf: function(){return 'ShipUnitNo';}, Type: 'Edm.Int32', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.NetWeight = { valueOf: function(){return 'NetWeight';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.GrossWeight = { valueOf: function(){return 'GrossWeight';}, Type: 'Edm.Double', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.StreetS = { valueOf: function(){return 'StreetS';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.BlockS = { valueOf: function(){return 'BlockS';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.BuildingS = { valueOf: function(){return 'BuildingS';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.CityS = { valueOf: function(){return 'CityS';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.ZipCodeS = { valueOf: function(){return 'ZipCodeS';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.CountyS = { valueOf: function(){return 'CountyS';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.StateS = { valueOf: function(){return 'StateS';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.CountryS = { valueOf: function(){return 'CountryS';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.StreetB = { valueOf: function(){return 'StreetB';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.BlockB = { valueOf: function(){return 'BlockB';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.BuildingB = { valueOf: function(){return 'BuildingB';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.CityB = { valueOf: function(){return 'CityB';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.ZipCodeB = { valueOf: function(){return 'ZipCodeB';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.CountyB = { valueOf: function(){return 'CountyB';}, Type: 'Edm.String', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.StateB = { valueOf: function(){return 'StateB';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.CountryB = { valueOf: function(){return 'CountryB';}, Type: 'Edm.String', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.ImportOrExport = { valueOf: function(){return 'ImportOrExport';}, Type: 'BoYesNoEnum', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.MainUsage = { valueOf: function(){return 'MainUsage';}, Type: 'Edm.Int32', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.GlobalLocationNumberS = { valueOf: function(){return 'GlobalLocationNumberS';}, Type: 'Edm.String', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.GlobalLocationNumberB = { valueOf: function(){return 'GlobalLocationNumberB';}, Type: 'Edm.String', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.TaxId12 = { valueOf: function(){return 'TaxId12';}, Type: 'Edm.String', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.TaxId13 = { valueOf: function(){return 'TaxId13';}, Type: 'Edm.String', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.BillOfEntryNo = { valueOf: function(){return 'BillOfEntryNo';}, Type: 'Edm.String', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.BillOfEntryDate = { valueOf: function(){return 'BillOfEntryDate';}, Type: 'Edm.DateTime', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.OriginalBillOfEntryNo = { valueOf: function(){return 'OriginalBillOfEntryNo';}, Type: 'Edm.String', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.OriginalBillOfEntryDate = { valueOf: function(){return 'OriginalBillOfEntryDate';}, Type: 'Edm.DateTime', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.ImportOrExportType = { valueOf: function(){return 'ImportOrExportType';}, Type: 'ImportOrExportTypeEnum', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.PortCode = { valueOf: function(){return 'PortCode';}, Type: 'Edm.String', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 51, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TaxExtension.prototype.TaxId0 = new String();
SAPB1.TaxExtension.prototype.TaxId1 = new String();
SAPB1.TaxExtension.prototype.TaxId2 = new String();
SAPB1.TaxExtension.prototype.TaxId3 = new String();
SAPB1.TaxExtension.prototype.TaxId4 = new String();
SAPB1.TaxExtension.prototype.TaxId5 = new String();
SAPB1.TaxExtension.prototype.TaxId6 = new String();
SAPB1.TaxExtension.prototype.TaxId7 = new String();
SAPB1.TaxExtension.prototype.TaxId8 = new String();
SAPB1.TaxExtension.prototype.TaxId9 = new String();
SAPB1.TaxExtension.prototype.State = new String();
SAPB1.TaxExtension.prototype.County = new String();
SAPB1.TaxExtension.prototype.Incoterms = new String();
SAPB1.TaxExtension.prototype.Vehicle = new String();
SAPB1.TaxExtension.prototype.VehicleState = new String();
SAPB1.TaxExtension.prototype.NFRef = new String();
SAPB1.TaxExtension.prototype.Carrier = new String();
SAPB1.TaxExtension.prototype.PackQuantity = new Number();
SAPB1.TaxExtension.prototype.PackDescription = new String();
SAPB1.TaxExtension.prototype.Brand = new String();
SAPB1.TaxExtension.prototype.ShipUnitNo = new Number();
SAPB1.TaxExtension.prototype.NetWeight = new Number();
SAPB1.TaxExtension.prototype.GrossWeight = new Number();
SAPB1.TaxExtension.prototype.StreetS = new String();
SAPB1.TaxExtension.prototype.BlockS = new String();
SAPB1.TaxExtension.prototype.BuildingS = new String();
SAPB1.TaxExtension.prototype.CityS = new String();
SAPB1.TaxExtension.prototype.ZipCodeS = new String();
SAPB1.TaxExtension.prototype.CountyS = new String();
SAPB1.TaxExtension.prototype.StateS = new String();
SAPB1.TaxExtension.prototype.CountryS = new String();
SAPB1.TaxExtension.prototype.StreetB = new String();
SAPB1.TaxExtension.prototype.BlockB = new String();
SAPB1.TaxExtension.prototype.BuildingB = new String();
SAPB1.TaxExtension.prototype.CityB = new String();
SAPB1.TaxExtension.prototype.ZipCodeB = new String();
SAPB1.TaxExtension.prototype.CountyB = new String();
SAPB1.TaxExtension.prototype.StateB = new String();
SAPB1.TaxExtension.prototype.CountryB = new String();
SAPB1.TaxExtension.prototype.ImportOrExport = new String();
SAPB1.TaxExtension.prototype.MainUsage = new Number();
SAPB1.TaxExtension.prototype.GlobalLocationNumberS = new String();
SAPB1.TaxExtension.prototype.GlobalLocationNumberB = new String();
SAPB1.TaxExtension.prototype.TaxId12 = new String();
SAPB1.TaxExtension.prototype.TaxId13 = new String();
SAPB1.TaxExtension.prototype.BillOfEntryNo = new String();
SAPB1.TaxExtension.prototype.BillOfEntryDate = new String();
SAPB1.TaxExtension.prototype.OriginalBillOfEntryNo = new String();
SAPB1.TaxExtension.prototype.OriginalBillOfEntryDate = new String();
SAPB1.TaxExtension.prototype.ImportOrExportType = new String();
SAPB1.TaxExtension.prototype.PortCode = new String();
SAPB1.TaxExtension.prototype.DocEntry = new Number();


SAPB1.TaxExtension.BoYesNoEnum = BoYesNoEnum
SAPB1.TaxExtension.ImportOrExportTypeEnum = ImportOrExportTypeEnum

SAPB1.TaxExtension.create = function (rawObject) {
    var instance = new SAPB1.TaxExtension();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxExtension.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxExtension;
