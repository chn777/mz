

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DeductionTaxHierarchies_Line = function () {
}
SAPB1.DeductionTaxHierarchies_Line.prototype = new SAPB1.ComplexType();
SAPB1.DeductionTaxHierarchies_Line.prototype.constructor = SAPB1.DeductionTaxHierarchies_Line;
SAPB1.DeductionTaxHierarchies_Line.RowNumber = { valueOf: function(){return 'RowNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxHierarchies_Line.DeductionPercent = { valueOf: function(){return 'DeductionPercent';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxHierarchies_Line.MaximumTotal = { valueOf: function(){return 'MaximumTotal';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxHierarchies_Line.prototype.RowNumber = new Number();
SAPB1.DeductionTaxHierarchies_Line.prototype.DeductionPercent = new Number();
SAPB1.DeductionTaxHierarchies_Line.prototype.MaximumTotal = new Number();



SAPB1.DeductionTaxHierarchies_Line.create = function (rawObject) {
    var instance = new SAPB1.DeductionTaxHierarchies_Line();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DeductionTaxHierarchies_Line.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DeductionTaxHierarchies_Line;
