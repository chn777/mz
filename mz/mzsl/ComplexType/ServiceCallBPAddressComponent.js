

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceCallBPAddressComponent = function () {
}
SAPB1.ServiceCallBPAddressComponent.prototype = new SAPB1.ComplexType();
SAPB1.ServiceCallBPAddressComponent.prototype.constructor = SAPB1.ServiceCallBPAddressComponent;
SAPB1.ServiceCallBPAddressComponent.ShipToStreet = { valueOf: function(){return 'ShipToStreet';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.ShipToStreetNo = { valueOf: function(){return 'ShipToStreetNo';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.ShipToBlock = { valueOf: function(){return 'ShipToBlock';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.ShipToBuilding = { valueOf: function(){return 'ShipToBuilding';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.ShipToCity = { valueOf: function(){return 'ShipToCity';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.ShipToZipCode = { valueOf: function(){return 'ShipToZipCode';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.ShipToState = { valueOf: function(){return 'ShipToState';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.ShipToCounty = { valueOf: function(){return 'ShipToCounty';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.ShipToCountry = { valueOf: function(){return 'ShipToCountry';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.ShipToAddressType = { valueOf: function(){return 'ShipToAddressType';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.ShipToAddress2 = { valueOf: function(){return 'ShipToAddress2';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.ShipToAddress3 = { valueOf: function(){return 'ShipToAddress3';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.ShipToGlobalLocationNumber = { valueOf: function(){return 'ShipToGlobalLocationNumber';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.BillToStreet = { valueOf: function(){return 'BillToStreet';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.BillToStreetNo = { valueOf: function(){return 'BillToStreetNo';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.BillToBlock = { valueOf: function(){return 'BillToBlock';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.BillToBuilding = { valueOf: function(){return 'BillToBuilding';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.BillToCity = { valueOf: function(){return 'BillToCity';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.BillToZipCode = { valueOf: function(){return 'BillToZipCode';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.BillToState = { valueOf: function(){return 'BillToState';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.BillToCounty = { valueOf: function(){return 'BillToCounty';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.BillToCountry = { valueOf: function(){return 'BillToCountry';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.BillToAddressType = { valueOf: function(){return 'BillToAddressType';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.BillToAddress2 = { valueOf: function(){return 'BillToAddress2';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.BillToAddress3 = { valueOf: function(){return 'BillToAddress3';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.BillToGlobalLocationNumber = { valueOf: function(){return 'BillToGlobalLocationNumber';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallBPAddressComponent.prototype.ShipToStreet = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.ShipToStreetNo = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.ShipToBlock = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.ShipToBuilding = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.ShipToCity = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.ShipToZipCode = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.ShipToState = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.ShipToCounty = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.ShipToCountry = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.ShipToAddressType = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.ShipToAddress2 = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.ShipToAddress3 = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.ShipToGlobalLocationNumber = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.BillToStreet = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.BillToStreetNo = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.BillToBlock = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.BillToBuilding = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.BillToCity = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.BillToZipCode = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.BillToState = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.BillToCounty = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.BillToCountry = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.BillToAddressType = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.BillToAddress2 = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.BillToAddress3 = new String();
SAPB1.ServiceCallBPAddressComponent.prototype.BillToGlobalLocationNumber = new String();



SAPB1.ServiceCallBPAddressComponent.create = function (rawObject) {
    var instance = new SAPB1.ServiceCallBPAddressComponent();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceCallBPAddressComponent.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceCallBPAddressComponent;
