
var BoGSTRegnTypeEnum = require('EnumType/BoGSTRegnTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WarehouseLocation = function () {
}
SAPB1.WarehouseLocation.prototype = new SAPB1.EntityType();
SAPB1.WarehouseLocation.prototype.constructor = SAPB1.WarehouseLocation;
SAPB1.WarehouseLocation.prototype.keys.push('Code');
SAPB1.WarehouseLocation.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.LSTVATNumber = { valueOf: function(){return 'LSTVATNumber';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.CSTNumber = { valueOf: function(){return 'CSTNumber';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.ExemptionNumber = { valueOf: function(){return 'ExemptionNumber';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.TANNumber = { valueOf: function(){return 'TANNumber';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.ServiceTaxNumber = { valueOf: function(){return 'ServiceTaxNumber';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.AssesseeType = { valueOf: function(){return 'AssesseeType';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.CompanyType = { valueOf: function(){return 'CompanyType';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.NatureOfBusiness = { valueOf: function(){return 'NatureOfBusiness';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.TINNumber = { valueOf: function(){return 'TINNumber';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.RegistrationType = { valueOf: function(){return 'RegistrationType';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.EccNumber = { valueOf: function(){return 'EccNumber';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.CERange = { valueOf: function(){return 'CERange';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.CEDivision = { valueOf: function(){return 'CEDivision';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.CECommissionerate = { valueOf: function(){return 'CECommissionerate';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.ManufacturerCode = { valueOf: function(){return 'ManufacturerCode';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.Jurisdiction = { valueOf: function(){return 'Jurisdiction';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.Street = { valueOf: function(){return 'Street';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.Block = { valueOf: function(){return 'Block';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.ZipCode = { valueOf: function(){return 'ZipCode';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.City = { valueOf: function(){return 'City';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.County = { valueOf: function(){return 'County';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.Country = { valueOf: function(){return 'Country';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.State = { valueOf: function(){return 'State';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.PANNumber = { valueOf: function(){return 'PANNumber';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.CERegisterNumber = { valueOf: function(){return 'CERegisterNumber';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.BuildingFloorRoom = { valueOf: function(){return 'BuildingFloorRoom';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.GSTIN = { valueOf: function(){return 'GSTIN';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.GstType = { valueOf: function(){return 'GstType';}, Type: 'BoGSTRegnTypeEnum', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.GSTTDS = { valueOf: function(){return 'GSTTDS';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.GSTISD = { valueOf: function(){return 'GSTISD';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseLocation.prototype.Code = new Number();
SAPB1.WarehouseLocation.prototype.Name = new String();
SAPB1.WarehouseLocation.prototype.LSTVATNumber = new String();
SAPB1.WarehouseLocation.prototype.CSTNumber = new String();
SAPB1.WarehouseLocation.prototype.ExemptionNumber = new String();
SAPB1.WarehouseLocation.prototype.TANNumber = new String();
SAPB1.WarehouseLocation.prototype.ServiceTaxNumber = new String();
SAPB1.WarehouseLocation.prototype.AssesseeType = new String();
SAPB1.WarehouseLocation.prototype.CompanyType = new String();
SAPB1.WarehouseLocation.prototype.NatureOfBusiness = new String();
SAPB1.WarehouseLocation.prototype.TINNumber = new String();
SAPB1.WarehouseLocation.prototype.RegistrationType = new String();
SAPB1.WarehouseLocation.prototype.EccNumber = new String();
SAPB1.WarehouseLocation.prototype.CERange = new String();
SAPB1.WarehouseLocation.prototype.CEDivision = new String();
SAPB1.WarehouseLocation.prototype.CECommissionerate = new String();
SAPB1.WarehouseLocation.prototype.ManufacturerCode = new String();
SAPB1.WarehouseLocation.prototype.Jurisdiction = new String();
SAPB1.WarehouseLocation.prototype.Street = new String();
SAPB1.WarehouseLocation.prototype.Block = new String();
SAPB1.WarehouseLocation.prototype.ZipCode = new String();
SAPB1.WarehouseLocation.prototype.City = new String();
SAPB1.WarehouseLocation.prototype.County = new String();
SAPB1.WarehouseLocation.prototype.Country = new String();
SAPB1.WarehouseLocation.prototype.State = new String();
SAPB1.WarehouseLocation.prototype.PANNumber = new String();
SAPB1.WarehouseLocation.prototype.CERegisterNumber = new String();
SAPB1.WarehouseLocation.prototype.BuildingFloorRoom = new String();
SAPB1.WarehouseLocation.prototype.GSTIN = new String();
SAPB1.WarehouseLocation.prototype.GstType = new String();
SAPB1.WarehouseLocation.prototype.GSTTDS = new String();
SAPB1.WarehouseLocation.prototype.GSTISD = new String();


SAPB1.WarehouseLocation.BoGSTRegnTypeEnum = BoGSTRegnTypeEnum

SAPB1.WarehouseLocation.create = function (rawObject) {
    var instance = new SAPB1.WarehouseLocation();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WarehouseLocation.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WarehouseLocation;
