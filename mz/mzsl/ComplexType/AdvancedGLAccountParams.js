
var InventoryAccountTypeEnum = require('EnumType/InventoryAccountTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AdvancedGLAccountParams = function () {
}
SAPB1.AdvancedGLAccountParams.prototype = new SAPB1.ComplexType();
SAPB1.AdvancedGLAccountParams.prototype.constructor = SAPB1.AdvancedGLAccountParams;
SAPB1.AdvancedGLAccountParams.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdvancedGLAccountParams.Warehouse = { valueOf: function(){return 'Warehouse';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdvancedGLAccountParams.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdvancedGLAccountParams.FederalTaxID = { valueOf: function(){return 'FederalTaxID';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdvancedGLAccountParams.ShipToCountry = { valueOf: function(){return 'ShipToCountry';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdvancedGLAccountParams.ShipToState = { valueOf: function(){return 'ShipToState';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdvancedGLAccountParams.VatGroup = { valueOf: function(){return 'VatGroup';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdvancedGLAccountParams.PostingDate = { valueOf: function(){return 'PostingDate';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdvancedGLAccountParams.AccountType = { valueOf: function(){return 'AccountType';}, Type: 'InventoryAccountTypeEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdvancedGLAccountParams.Usage = { valueOf: function(){return 'Usage';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdvancedGLAccountParams.UDF1 = { valueOf: function(){return 'UDF1';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdvancedGLAccountParams.UDF2 = { valueOf: function(){return 'UDF2';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdvancedGLAccountParams.UDF3 = { valueOf: function(){return 'UDF3';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdvancedGLAccountParams.UDF4 = { valueOf: function(){return 'UDF4';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdvancedGLAccountParams.UDF5 = { valueOf: function(){return 'UDF5';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AdvancedGLAccountParams.prototype.ItemCode = new String();
SAPB1.AdvancedGLAccountParams.prototype.Warehouse = new String();
SAPB1.AdvancedGLAccountParams.prototype.BPCode = new String();
SAPB1.AdvancedGLAccountParams.prototype.FederalTaxID = new String();
SAPB1.AdvancedGLAccountParams.prototype.ShipToCountry = new String();
SAPB1.AdvancedGLAccountParams.prototype.ShipToState = new String();
SAPB1.AdvancedGLAccountParams.prototype.VatGroup = new String();
SAPB1.AdvancedGLAccountParams.prototype.PostingDate = new String();
SAPB1.AdvancedGLAccountParams.prototype.AccountType = new String();
SAPB1.AdvancedGLAccountParams.prototype.Usage = new Number();
SAPB1.AdvancedGLAccountParams.prototype.UDF1 = new String();
SAPB1.AdvancedGLAccountParams.prototype.UDF2 = new String();
SAPB1.AdvancedGLAccountParams.prototype.UDF3 = new String();
SAPB1.AdvancedGLAccountParams.prototype.UDF4 = new String();
SAPB1.AdvancedGLAccountParams.prototype.UDF5 = new String();


SAPB1.AdvancedGLAccountParams.InventoryAccountTypeEnum = InventoryAccountTypeEnum

SAPB1.AdvancedGLAccountParams.create = function (rawObject) {
    var instance = new SAPB1.AdvancedGLAccountParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AdvancedGLAccountParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AdvancedGLAccountParams;
