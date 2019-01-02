

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemDepreciationParameter = function () {
}
SAPB1.ItemDepreciationParameter.prototype = new SAPB1.ComplexType();
SAPB1.ItemDepreciationParameter.prototype.constructor = SAPB1.ItemDepreciationParameter;
SAPB1.ItemDepreciationParameter.FiscalYear = { valueOf: function(){return 'FiscalYear';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemDepreciationParameter.DepreciationArea = { valueOf: function(){return 'DepreciationArea';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemDepreciationParameter.DepreciationStartDate = { valueOf: function(){return 'DepreciationStartDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemDepreciationParameter.DepreciationEndDate = { valueOf: function(){return 'DepreciationEndDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemDepreciationParameter.UsefulLife = { valueOf: function(){return 'UsefulLife';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemDepreciationParameter.RemainingLife = { valueOf: function(){return 'RemainingLife';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemDepreciationParameter.DepreciationType = { valueOf: function(){return 'DepreciationType';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemDepreciationParameter.TotalUnitsInUsefulLife = { valueOf: function(){return 'TotalUnitsInUsefulLife';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemDepreciationParameter.RemainingUnits = { valueOf: function(){return 'RemainingUnits';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemDepreciationParameter.StandardUnits = { valueOf: function(){return 'StandardUnits';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemDepreciationParameter.prototype.FiscalYear = new String();
SAPB1.ItemDepreciationParameter.prototype.DepreciationArea = new String();
SAPB1.ItemDepreciationParameter.prototype.DepreciationStartDate = new String();
SAPB1.ItemDepreciationParameter.prototype.DepreciationEndDate = new String();
SAPB1.ItemDepreciationParameter.prototype.UsefulLife = new Number();
SAPB1.ItemDepreciationParameter.prototype.RemainingLife = new Number();
SAPB1.ItemDepreciationParameter.prototype.DepreciationType = new String();
SAPB1.ItemDepreciationParameter.prototype.TotalUnitsInUsefulLife = new Number();
SAPB1.ItemDepreciationParameter.prototype.RemainingUnits = new Number();
SAPB1.ItemDepreciationParameter.prototype.StandardUnits = new Number();



SAPB1.ItemDepreciationParameter.create = function (rawObject) {
    var instance = new SAPB1.ItemDepreciationParameter();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemDepreciationParameter.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ItemDepreciationParameter;
