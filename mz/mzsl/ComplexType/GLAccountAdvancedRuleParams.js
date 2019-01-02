

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.GLAccountAdvancedRuleParams = function () {
}
SAPB1.GLAccountAdvancedRuleParams.prototype = new SAPB1.ComplexType();
SAPB1.GLAccountAdvancedRuleParams.prototype.constructor = SAPB1.GLAccountAdvancedRuleParams;
SAPB1.GLAccountAdvancedRuleParams.AbsoluteEntry = { valueOf: function(){return 'AbsoluteEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRuleParams.Period = { valueOf: function(){return 'Period';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRuleParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRuleParams.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRuleParams.ItemGroup = { valueOf: function(){return 'ItemGroup';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRuleParams.Warehouse = { valueOf: function(){return 'Warehouse';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRuleParams.BPGroup = { valueOf: function(){return 'BPGroup';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRuleParams.FederalTaxID = { valueOf: function(){return 'FederalTaxID';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRuleParams.ShipToCountry = { valueOf: function(){return 'ShipToCountry';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRuleParams.ShipToState = { valueOf: function(){return 'ShipToState';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GLAccountAdvancedRuleParams.prototype.AbsoluteEntry = new Number();
SAPB1.GLAccountAdvancedRuleParams.prototype.Period = new String();
SAPB1.GLAccountAdvancedRuleParams.prototype.Code = new String();
SAPB1.GLAccountAdvancedRuleParams.prototype.ItemCode = new String();
SAPB1.GLAccountAdvancedRuleParams.prototype.ItemGroup = new Number();
SAPB1.GLAccountAdvancedRuleParams.prototype.Warehouse = new String();
SAPB1.GLAccountAdvancedRuleParams.prototype.BPGroup = new Number();
SAPB1.GLAccountAdvancedRuleParams.prototype.FederalTaxID = new String();
SAPB1.GLAccountAdvancedRuleParams.prototype.ShipToCountry = new String();
SAPB1.GLAccountAdvancedRuleParams.prototype.ShipToState = new String();



SAPB1.GLAccountAdvancedRuleParams.create = function (rawObject) {
    var instance = new SAPB1.GLAccountAdvancedRuleParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.GLAccountAdvancedRuleParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.GLAccountAdvancedRuleParams;
