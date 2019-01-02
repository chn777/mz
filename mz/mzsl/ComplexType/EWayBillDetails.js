
var EWBSupplyTypeEnum = require('EnumType/EWBSupplyTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EWayBillDetails = function () {
}
SAPB1.EWayBillDetails.prototype = new SAPB1.ComplexType();
SAPB1.EWayBillDetails.prototype.constructor = SAPB1.EWayBillDetails;
SAPB1.EWayBillDetails.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.SupplyType = { valueOf: function(){return 'SupplyType';}, Type: 'EWBSupplyTypeEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.SubType = { valueOf: function(){return 'SubType';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.DocumentType = { valueOf: function(){return 'DocumentType';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.TransportationMode = { valueOf: function(){return 'TransportationMode';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.Distance = { valueOf: function(){return 'Distance';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.TransporterDocNo = { valueOf: function(){return 'TransporterDocNo';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.TransporterDocDate = { valueOf: function(){return 'TransporterDocDate';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.VehicleType = { valueOf: function(){return 'VehicleType';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.VehicleNo = { valueOf: function(){return 'VehicleNo';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.EWayBillNo = { valueOf: function(){return 'EWayBillNo';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.EWayBillDate = { valueOf: function(){return 'EWayBillDate';}, Type: 'Edm.DateTime', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.BillFromName = { valueOf: function(){return 'BillFromName';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.BillFromGSTIN = { valueOf: function(){return 'BillFromGSTIN';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.BillFromStateGSTCode = { valueOf: function(){return 'BillFromStateGSTCode';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.DispatchFromAddress1 = { valueOf: function(){return 'DispatchFromAddress1';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.DispatchFromAddress2 = { valueOf: function(){return 'DispatchFromAddress2';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.DispatchFromZipCode = { valueOf: function(){return 'DispatchFromZipCode';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.DispatchFromStateGSTCode = { valueOf: function(){return 'DispatchFromStateGSTCode';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.BillToName = { valueOf: function(){return 'BillToName';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.BillToGSTIN = { valueOf: function(){return 'BillToGSTIN';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.BillToStateGSTCode = { valueOf: function(){return 'BillToStateGSTCode';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.ShipToAddress1 = { valueOf: function(){return 'ShipToAddress1';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.ShipToAddress2 = { valueOf: function(){return 'ShipToAddress2';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.ShipToZipCode = { valueOf: function(){return 'ShipToZipCode';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.ShipToStateGSTCode = { valueOf: function(){return 'ShipToStateGSTCode';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.MainHSNEntry = { valueOf: function(){return 'MainHSNEntry';}, Type: 'Edm.Int32', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.DispatchFromPlace = { valueOf: function(){return 'DispatchFromPlace';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.ShipToPlace = { valueOf: function(){return 'ShipToPlace';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.TransporterID = { valueOf: function(){return 'TransporterID';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.TransporterName = { valueOf: function(){return 'TransporterName';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.EWayBillExpirationDate = { valueOf: function(){return 'EWayBillExpirationDate';}, Type: 'Edm.DateTime', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EWayBillDetails.prototype.DocEntry = new Number();
SAPB1.EWayBillDetails.prototype.SupplyType = new String();
SAPB1.EWayBillDetails.prototype.SubType = new Number();
SAPB1.EWayBillDetails.prototype.DocumentType = new String();
SAPB1.EWayBillDetails.prototype.TransportationMode = new Number();
SAPB1.EWayBillDetails.prototype.Distance = new Number();
SAPB1.EWayBillDetails.prototype.TransporterDocNo = new String();
SAPB1.EWayBillDetails.prototype.TransporterDocDate = new String();
SAPB1.EWayBillDetails.prototype.VehicleType = new String();
SAPB1.EWayBillDetails.prototype.VehicleNo = new String();
SAPB1.EWayBillDetails.prototype.EWayBillNo = new String();
SAPB1.EWayBillDetails.prototype.EWayBillDate = new String();
SAPB1.EWayBillDetails.prototype.BillFromName = new String();
SAPB1.EWayBillDetails.prototype.BillFromGSTIN = new String();
SAPB1.EWayBillDetails.prototype.BillFromStateGSTCode = new String();
SAPB1.EWayBillDetails.prototype.DispatchFromAddress1 = new String();
SAPB1.EWayBillDetails.prototype.DispatchFromAddress2 = new String();
SAPB1.EWayBillDetails.prototype.DispatchFromZipCode = new String();
SAPB1.EWayBillDetails.prototype.DispatchFromStateGSTCode = new String();
SAPB1.EWayBillDetails.prototype.BillToName = new String();
SAPB1.EWayBillDetails.prototype.BillToGSTIN = new String();
SAPB1.EWayBillDetails.prototype.BillToStateGSTCode = new String();
SAPB1.EWayBillDetails.prototype.ShipToAddress1 = new String();
SAPB1.EWayBillDetails.prototype.ShipToAddress2 = new String();
SAPB1.EWayBillDetails.prototype.ShipToZipCode = new String();
SAPB1.EWayBillDetails.prototype.ShipToStateGSTCode = new String();
SAPB1.EWayBillDetails.prototype.MainHSNEntry = new Number();
SAPB1.EWayBillDetails.prototype.DispatchFromPlace = new String();
SAPB1.EWayBillDetails.prototype.ShipToPlace = new String();
SAPB1.EWayBillDetails.prototype.TransporterID = new String();
SAPB1.EWayBillDetails.prototype.TransporterName = new String();
SAPB1.EWayBillDetails.prototype.EWayBillExpirationDate = new String();


SAPB1.EWayBillDetails.EWBSupplyTypeEnum = EWBSupplyTypeEnum

SAPB1.EWayBillDetails.create = function (rawObject) {
    var instance = new SAPB1.EWayBillDetails();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EWayBillDetails.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EWayBillDetails;
