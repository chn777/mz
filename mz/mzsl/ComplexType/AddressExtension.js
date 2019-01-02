

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AddressExtension = function () {
}
SAPB1.AddressExtension.prototype = new SAPB1.ComplexType();
SAPB1.AddressExtension.prototype.constructor = SAPB1.AddressExtension;
SAPB1.AddressExtension.ShipToStreet = { valueOf: function(){return 'ShipToStreet';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.ShipToStreetNo = { valueOf: function(){return 'ShipToStreetNo';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.ShipToBlock = { valueOf: function(){return 'ShipToBlock';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.ShipToBuilding = { valueOf: function(){return 'ShipToBuilding';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.ShipToCity = { valueOf: function(){return 'ShipToCity';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.ShipToZipCode = { valueOf: function(){return 'ShipToZipCode';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.ShipToCounty = { valueOf: function(){return 'ShipToCounty';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.ShipToState = { valueOf: function(){return 'ShipToState';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.ShipToCountry = { valueOf: function(){return 'ShipToCountry';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.ShipToAddressType = { valueOf: function(){return 'ShipToAddressType';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.BillToStreet = { valueOf: function(){return 'BillToStreet';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.BillToStreetNo = { valueOf: function(){return 'BillToStreetNo';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.BillToBlock = { valueOf: function(){return 'BillToBlock';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.BillToBuilding = { valueOf: function(){return 'BillToBuilding';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.BillToCity = { valueOf: function(){return 'BillToCity';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.BillToZipCode = { valueOf: function(){return 'BillToZipCode';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.BillToCounty = { valueOf: function(){return 'BillToCounty';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.BillToState = { valueOf: function(){return 'BillToState';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.BillToCountry = { valueOf: function(){return 'BillToCountry';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.BillToAddressType = { valueOf: function(){return 'BillToAddressType';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.ShipToGlobalLocationNumber = { valueOf: function(){return 'ShipToGlobalLocationNumber';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.BillToGlobalLocationNumber = { valueOf: function(){return 'BillToGlobalLocationNumber';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.ShipToAddress2 = { valueOf: function(){return 'ShipToAddress2';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.ShipToAddress3 = { valueOf: function(){return 'ShipToAddress3';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.BillToAddress2 = { valueOf: function(){return 'BillToAddress2';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.BillToAddress3 = { valueOf: function(){return 'BillToAddress3';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.PlaceOfSupply = { valueOf: function(){return 'PlaceOfSupply';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.PurchasePlaceOfSupply = { valueOf: function(){return 'PurchasePlaceOfSupply';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 28, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AddressExtension.prototype.ShipToStreet = new String();
SAPB1.AddressExtension.prototype.ShipToStreetNo = new String();
SAPB1.AddressExtension.prototype.ShipToBlock = new String();
SAPB1.AddressExtension.prototype.ShipToBuilding = new String();
SAPB1.AddressExtension.prototype.ShipToCity = new String();
SAPB1.AddressExtension.prototype.ShipToZipCode = new String();
SAPB1.AddressExtension.prototype.ShipToCounty = new String();
SAPB1.AddressExtension.prototype.ShipToState = new String();
SAPB1.AddressExtension.prototype.ShipToCountry = new String();
SAPB1.AddressExtension.prototype.ShipToAddressType = new String();
SAPB1.AddressExtension.prototype.BillToStreet = new String();
SAPB1.AddressExtension.prototype.BillToStreetNo = new String();
SAPB1.AddressExtension.prototype.BillToBlock = new String();
SAPB1.AddressExtension.prototype.BillToBuilding = new String();
SAPB1.AddressExtension.prototype.BillToCity = new String();
SAPB1.AddressExtension.prototype.BillToZipCode = new String();
SAPB1.AddressExtension.prototype.BillToCounty = new String();
SAPB1.AddressExtension.prototype.BillToState = new String();
SAPB1.AddressExtension.prototype.BillToCountry = new String();
SAPB1.AddressExtension.prototype.BillToAddressType = new String();
SAPB1.AddressExtension.prototype.ShipToGlobalLocationNumber = new String();
SAPB1.AddressExtension.prototype.BillToGlobalLocationNumber = new String();
SAPB1.AddressExtension.prototype.ShipToAddress2 = new String();
SAPB1.AddressExtension.prototype.ShipToAddress3 = new String();
SAPB1.AddressExtension.prototype.BillToAddress2 = new String();
SAPB1.AddressExtension.prototype.BillToAddress3 = new String();
SAPB1.AddressExtension.prototype.PlaceOfSupply = new String();
SAPB1.AddressExtension.prototype.PurchasePlaceOfSupply = new String();
SAPB1.AddressExtension.prototype.DocEntry = new Number();



SAPB1.AddressExtension.create = function (rawObject) {
    var instance = new SAPB1.AddressExtension();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AddressExtension.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AddressExtension;
