var TransportationDocumentLineData = require('ComplexType/TransportationDocumentLineData')
var TransportationDocumentLineDataCollection = require('ComplexType/TransportationDocumentLineDataCollection')

var ElectronicDocGenTypeEnum = require('EnumType/ElectronicDocGenTypeEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TransportationDocumentData = function () {
}
SAPB1.TransportationDocumentData.prototype = new SAPB1.EntityType();
SAPB1.TransportationDocumentData.prototype.constructor = SAPB1.TransportationDocumentData;
SAPB1.TransportationDocumentData.prototype.keys.push('TranspDocNumber');
SAPB1.TransportationDocumentData.TranspDocNumber = { valueOf: function(){return 'TranspDocNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentData.NextNumber = { valueOf: function(){return 'NextNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentData.PostDate = { valueOf: function(){return 'PostDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentData.ElDocGenType = { valueOf: function(){return 'ElDocGenType';}, Type: 'ElectronicDocGenTypeEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentData.ElDocExportFormat = { valueOf: function(){return 'ElDocExportFormat';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentData.TransportationNumber = { valueOf: function(){return 'TransportationNumber';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentData.ExpirationDate = { valueOf: function(){return 'ExpirationDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentData.VehicleID = { valueOf: function(){return 'VehicleID';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentData.TrailerID = { valueOf: function(){return 'TrailerID';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentData.CarrierCode = { valueOf: function(){return 'CarrierCode';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentData.IssueGate = { valueOf: function(){return 'IssueGate';}, Type: 'Edm.Int32', Index: 10, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentData.AttachmentEntry = { valueOf: function(){return 'AttachmentEntry';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentData.Canceled = { valueOf: function(){return 'Canceled';}, Type: 'BoYesNoEnum', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentData.Weight = { valueOf: function(){return 'Weight';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentData.WeightUnit = { valueOf: function(){return 'WeightUnit';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentData.TransportedTotalLC = { valueOf: function(){return 'TransportedTotalLC';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentData.WarehouseCode = { valueOf: function(){return 'WarehouseCode';}, Type: 'Edm.String', Index: 16, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TransportationDocumentData.TransportationDocumentLineDataCollection = { valueOf: function(){return 'TransportationDocumentLineDataCollection';}, Type: 'TransportationDocumentLineData', Index: 17, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.TransportationDocumentData.prototype.TranspDocNumber = new Number();
SAPB1.TransportationDocumentData.prototype.NextNumber = new Number();
SAPB1.TransportationDocumentData.prototype.PostDate = new String();
SAPB1.TransportationDocumentData.prototype.ElDocGenType = new String();
SAPB1.TransportationDocumentData.prototype.ElDocExportFormat = new Number();
SAPB1.TransportationDocumentData.prototype.TransportationNumber = new String();
SAPB1.TransportationDocumentData.prototype.ExpirationDate = new String();
SAPB1.TransportationDocumentData.prototype.VehicleID = new String();
SAPB1.TransportationDocumentData.prototype.TrailerID = new String();
SAPB1.TransportationDocumentData.prototype.CarrierCode = new String();
SAPB1.TransportationDocumentData.prototype.IssueGate = new Number();
SAPB1.TransportationDocumentData.prototype.AttachmentEntry = new Number();
SAPB1.TransportationDocumentData.prototype.Canceled = new String();
SAPB1.TransportationDocumentData.prototype.Weight = new Number();
SAPB1.TransportationDocumentData.prototype.WeightUnit = new Number();
SAPB1.TransportationDocumentData.prototype.TransportedTotalLC = new Number();
SAPB1.TransportationDocumentData.prototype.WarehouseCode = new String();
SAPB1.TransportationDocumentData.prototype.TransportationDocumentLineDataCollection = new TransportationDocumentLineDataCollection();

SAPB1.TransportationDocumentData.TransportationDocumentLineData = TransportationDocumentLineData
SAPB1.TransportationDocumentData.TransportationDocumentLineDataCollection = TransportationDocumentLineDataCollection

SAPB1.TransportationDocumentData.ElectronicDocGenTypeEnum = ElectronicDocGenTypeEnum
SAPB1.TransportationDocumentData.BoYesNoEnum = BoYesNoEnum

SAPB1.TransportationDocumentData.create = function (rawObject) {
    var instance = new SAPB1.TransportationDocumentData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TransportationDocumentData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TransportationDocumentData;
