
var ResourceTypeEnum = require('EnumType/ResourceTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ResourceGroup = function () {
}
SAPB1.ResourceGroup.prototype = new SAPB1.EntityType();
SAPB1.ResourceGroup.prototype.constructor = SAPB1.ResourceGroup;
SAPB1.ResourceGroup.prototype.keys.push('Code');
SAPB1.ResourceGroup.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.Type = { valueOf: function(){return 'Type';}, Type: 'ResourceTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.CostName1 = { valueOf: function(){return 'CostName1';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.Cost1 = { valueOf: function(){return 'Cost1';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.CostName2 = { valueOf: function(){return 'CostName2';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.Cost2 = { valueOf: function(){return 'Cost2';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.CostName3 = { valueOf: function(){return 'CostName3';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.Cost3 = { valueOf: function(){return 'Cost3';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.CostName4 = { valueOf: function(){return 'CostName4';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.Cost4 = { valueOf: function(){return 'Cost4';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.CostName5 = { valueOf: function(){return 'CostName5';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.Cost5 = { valueOf: function(){return 'Cost5';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.CostName6 = { valueOf: function(){return 'CostName6';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.Cost6 = { valueOf: function(){return 'Cost6';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.CostName7 = { valueOf: function(){return 'CostName7';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.Cost7 = { valueOf: function(){return 'Cost7';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.CostName8 = { valueOf: function(){return 'CostName8';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.Cost8 = { valueOf: function(){return 'Cost8';}, Type: 'Edm.Double', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.CostName9 = { valueOf: function(){return 'CostName9';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.Cost9 = { valueOf: function(){return 'Cost9';}, Type: 'Edm.Double', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.CostName10 = { valueOf: function(){return 'CostName10';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.Cost10 = { valueOf: function(){return 'Cost10';}, Type: 'Edm.Double', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.NumOfUnitsText = { valueOf: function(){return 'NumOfUnitsText';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceGroup.prototype.Code = new Number();
SAPB1.ResourceGroup.prototype.Name = new String();
SAPB1.ResourceGroup.prototype.Type = new String();
SAPB1.ResourceGroup.prototype.CostName1 = new String();
SAPB1.ResourceGroup.prototype.Cost1 = new Number();
SAPB1.ResourceGroup.prototype.CostName2 = new String();
SAPB1.ResourceGroup.prototype.Cost2 = new Number();
SAPB1.ResourceGroup.prototype.CostName3 = new String();
SAPB1.ResourceGroup.prototype.Cost3 = new Number();
SAPB1.ResourceGroup.prototype.CostName4 = new String();
SAPB1.ResourceGroup.prototype.Cost4 = new Number();
SAPB1.ResourceGroup.prototype.CostName5 = new String();
SAPB1.ResourceGroup.prototype.Cost5 = new Number();
SAPB1.ResourceGroup.prototype.CostName6 = new String();
SAPB1.ResourceGroup.prototype.Cost6 = new Number();
SAPB1.ResourceGroup.prototype.CostName7 = new String();
SAPB1.ResourceGroup.prototype.Cost7 = new Number();
SAPB1.ResourceGroup.prototype.CostName8 = new String();
SAPB1.ResourceGroup.prototype.Cost8 = new Number();
SAPB1.ResourceGroup.prototype.CostName9 = new String();
SAPB1.ResourceGroup.prototype.Cost9 = new Number();
SAPB1.ResourceGroup.prototype.CostName10 = new String();
SAPB1.ResourceGroup.prototype.Cost10 = new Number();
SAPB1.ResourceGroup.prototype.NumOfUnitsText = new String();


SAPB1.ResourceGroup.ResourceTypeEnum = ResourceTypeEnum

SAPB1.ResourceGroup.create = function (rawObject) {
    var instance = new SAPB1.ResourceGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ResourceGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ResourceGroup;
