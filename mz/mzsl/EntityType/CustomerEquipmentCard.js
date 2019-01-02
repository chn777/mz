
var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var BoSerialNumberStatus = require('EnumType/BoSerialNumberStatus')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CustomerEquipmentCard = function () {
}
SAPB1.CustomerEquipmentCard.prototype = new SAPB1.EntityType();
SAPB1.CustomerEquipmentCard.prototype.constructor = SAPB1.CustomerEquipmentCard;
SAPB1.CustomerEquipmentCard.prototype.keys.push('EquipmentCardNum');
SAPB1.CustomerEquipmentCard.EquipmentCardNum = { valueOf: function(){return 'EquipmentCardNum';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.CustomerCode = { valueOf: function(){return 'CustomerCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.CustomerName = { valueOf: function(){return 'CustomerName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.ContactEmployeeCode = { valueOf: function(){return 'ContactEmployeeCode';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.DirectCustomerCode = { valueOf: function(){return 'DirectCustomerCode';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.DirectCustomerName = { valueOf: function(){return 'DirectCustomerName';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.ManufacturerSerialNum = { valueOf: function(){return 'ManufacturerSerialNum';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.InternalSerialNum = { valueOf: function(){return 'InternalSerialNum';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.ItemDescription = { valueOf: function(){return 'ItemDescription';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.InvoiceCode = { valueOf: function(){return 'InvoiceCode';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.InvoiceNumber = { valueOf: function(){return 'InvoiceNumber';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.DeliveryDate = { valueOf: function(){return 'DeliveryDate';}, Type: 'Edm.DateTime', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.ContactPhone = { valueOf: function(){return 'ContactPhone';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.Street = { valueOf: function(){return 'Street';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.Block = { valueOf: function(){return 'Block';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.ZipCode = { valueOf: function(){return 'ZipCode';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.City = { valueOf: function(){return 'City';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.County = { valueOf: function(){return 'County';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.CountryCode = { valueOf: function(){return 'CountryCode';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.StateCode = { valueOf: function(){return 'StateCode';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.InstallLocation = { valueOf: function(){return 'InstallLocation';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.DeliveryCode = { valueOf: function(){return 'DeliveryCode';}, Type: 'Edm.Int32', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.DeliveryNumber = { valueOf: function(){return 'DeliveryNumber';}, Type: 'Edm.Int32', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.StatusOfSerialNumber = { valueOf: function(){return 'StatusOfSerialNumber';}, Type: 'BoSerialNumberStatus', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.ReplaceSN = { valueOf: function(){return 'ReplaceSN';}, Type: 'Edm.Int32', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.DefaultTechnician = { valueOf: function(){return 'DefaultTechnician';}, Type: 'Edm.Int32', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.ReplacedBySN = { valueOf: function(){return 'ReplacedBySN';}, Type: 'Edm.Int32', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.Defaultterritory = { valueOf: function(){return 'Defaultterritory';}, Type: 'Edm.Int32', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.BuildingFloorRoom = { valueOf: function(){return 'BuildingFloorRoom';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.AttachmentEntry = { valueOf: function(){return 'AttachmentEntry';}, Type: 'Edm.Int32', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomerEquipmentCard.prototype.EquipmentCardNum = new Number();
SAPB1.CustomerEquipmentCard.prototype.CustomerCode = new String();
SAPB1.CustomerEquipmentCard.prototype.CustomerName = new String();
SAPB1.CustomerEquipmentCard.prototype.ContactEmployeeCode = new String();
SAPB1.CustomerEquipmentCard.prototype.DirectCustomerCode = new String();
SAPB1.CustomerEquipmentCard.prototype.DirectCustomerName = new String();
SAPB1.CustomerEquipmentCard.prototype.ManufacturerSerialNum = new String();
SAPB1.CustomerEquipmentCard.prototype.InternalSerialNum = new String();
SAPB1.CustomerEquipmentCard.prototype.ItemCode = new String();
SAPB1.CustomerEquipmentCard.prototype.ItemDescription = new String();
SAPB1.CustomerEquipmentCard.prototype.InvoiceCode = new Number();
SAPB1.CustomerEquipmentCard.prototype.InvoiceNumber = new Number();
SAPB1.CustomerEquipmentCard.prototype.DeliveryDate = new String();
SAPB1.CustomerEquipmentCard.prototype.ContactPhone = new String();
SAPB1.CustomerEquipmentCard.prototype.Street = new String();
SAPB1.CustomerEquipmentCard.prototype.Block = new String();
SAPB1.CustomerEquipmentCard.prototype.ZipCode = new String();
SAPB1.CustomerEquipmentCard.prototype.City = new String();
SAPB1.CustomerEquipmentCard.prototype.County = new String();
SAPB1.CustomerEquipmentCard.prototype.CountryCode = new String();
SAPB1.CustomerEquipmentCard.prototype.StateCode = new String();
SAPB1.CustomerEquipmentCard.prototype.InstallLocation = new String();
SAPB1.CustomerEquipmentCard.prototype.DeliveryCode = new Number();
SAPB1.CustomerEquipmentCard.prototype.DeliveryNumber = new Number();
SAPB1.CustomerEquipmentCard.prototype.StatusOfSerialNumber = new String();
SAPB1.CustomerEquipmentCard.prototype.ReplaceSN = new Number();
SAPB1.CustomerEquipmentCard.prototype.DefaultTechnician = new Number();
SAPB1.CustomerEquipmentCard.prototype.ReplacedBySN = new Number();
SAPB1.CustomerEquipmentCard.prototype.Defaultterritory = new Number();
SAPB1.CustomerEquipmentCard.prototype.BuildingFloorRoom = new String();
SAPB1.CustomerEquipmentCard.prototype.AttachmentEntry = new Number();


SAPB1.CustomerEquipmentCard.BoYesNoEnum = BoYesNoEnum
SAPB1.CustomerEquipmentCard.BoSerialNumberStatus = BoSerialNumberStatus

SAPB1.CustomerEquipmentCard.create = function (rawObject) {
    var instance = new SAPB1.CustomerEquipmentCard();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CustomerEquipmentCard.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CustomerEquipmentCard;
