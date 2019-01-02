var LegalDataDetail = require('ComplexType/LegalDataDetail')
var LegalDataDetailCollection = require('ComplexType/LegalDataDetailCollection')

var BoAPARDocumentTypes = require('EnumType/BoAPARDocumentTypes')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.LegalData = function () {
}
SAPB1.LegalData.prototype = new SAPB1.EntityType();
SAPB1.LegalData.prototype.constructor = SAPB1.LegalData;
SAPB1.LegalData.prototype.keys.push('DocEntry');
SAPB1.LegalData.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LegalData.SourceObjectType = { valueOf: function(){return 'SourceObjectType';}, Type: 'BoAPARDocumentTypes', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LegalData.SourceObjectEntry = { valueOf: function(){return 'SourceObjectEntry';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LegalData.DateOfPrinting = { valueOf: function(){return 'DateOfPrinting';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LegalData.TimeOfPrinting = { valueOf: function(){return 'TimeOfPrinting';}, Type: 'Edm.Time', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LegalData.PrinterBrand = { valueOf: function(){return 'PrinterBrand';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LegalData.PrinterType = { valueOf: function(){return 'PrinterType';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LegalData.PrinterModel = { valueOf: function(){return 'PrinterModel';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LegalData.PrinterFirmwareVersion = { valueOf: function(){return 'PrinterFirmwareVersion';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LegalData.PrinterDllVersion = { valueOf: function(){return 'PrinterDllVersion';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LegalData.FiscalSeries = { valueOf: function(){return 'FiscalSeries';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LegalData.FiscalNumber = { valueOf: function(){return 'FiscalNumber';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LegalData.DocumentNumber = { valueOf: function(){return 'DocumentNumber';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LegalData.FiscalUserID = { valueOf: function(){return 'FiscalUserID';}, Type: 'Edm.Int32', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LegalData.LegalDataDetailCollection = { valueOf: function(){return 'LegalDataDetailCollection';}, Type: 'LegalDataDetail', Index: 14, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.LegalData.prototype.DocEntry = new Number();
SAPB1.LegalData.prototype.SourceObjectType = new String();
SAPB1.LegalData.prototype.SourceObjectEntry = new Number();
SAPB1.LegalData.prototype.DateOfPrinting = new String();
SAPB1.LegalData.prototype.TimeOfPrinting = new String();
SAPB1.LegalData.prototype.PrinterBrand = new String();
SAPB1.LegalData.prototype.PrinterType = new String();
SAPB1.LegalData.prototype.PrinterModel = new String();
SAPB1.LegalData.prototype.PrinterFirmwareVersion = new String();
SAPB1.LegalData.prototype.PrinterDllVersion = new String();
SAPB1.LegalData.prototype.FiscalSeries = new String();
SAPB1.LegalData.prototype.FiscalNumber = new String();
SAPB1.LegalData.prototype.DocumentNumber = new String();
SAPB1.LegalData.prototype.FiscalUserID = new Number();
SAPB1.LegalData.prototype.LegalDataDetailCollection = new LegalDataDetailCollection();

SAPB1.LegalData.LegalDataDetail = LegalDataDetail
SAPB1.LegalData.LegalDataDetailCollection = LegalDataDetailCollection

SAPB1.LegalData.BoAPARDocumentTypes = BoAPARDocumentTypes

SAPB1.LegalData.create = function (rawObject) {
    var instance = new SAPB1.LegalData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.LegalData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.LegalData;
