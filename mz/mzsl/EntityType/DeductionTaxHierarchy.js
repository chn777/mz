var DeductionTaxHierarchies_Line = require('ComplexType/DeductionTaxHierarchies_Line')
var DeductionTaxHierarchies_LineCollection = require('ComplexType/DeductionTaxHierarchies_LineCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DeductionTaxHierarchy = function () {
}
SAPB1.DeductionTaxHierarchy.prototype = new SAPB1.EntityType();
SAPB1.DeductionTaxHierarchy.prototype.constructor = SAPB1.DeductionTaxHierarchy;
SAPB1.DeductionTaxHierarchy.prototype.keys.push('AbsEntry');
SAPB1.DeductionTaxHierarchy.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxHierarchy.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxHierarchy.HierarchyCode = { valueOf: function(){return 'HierarchyCode';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxHierarchy.HierarchyName = { valueOf: function(){return 'HierarchyName';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxHierarchy.ValidFrom = { valueOf: function(){return 'ValidFrom';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxHierarchy.ValidUntil = { valueOf: function(){return 'ValidUntil';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxHierarchy.DeductionPercent = { valueOf: function(){return 'DeductionPercent';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxHierarchy.MaximumTotal = { valueOf: function(){return 'MaximumTotal';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxHierarchy.LastUpdated = { valueOf: function(){return 'LastUpdated';}, Type: 'Edm.DateTime', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxHierarchy.DeductionTaxHierarchies_Lines = { valueOf: function(){return 'DeductionTaxHierarchies_Lines';}, Type: 'DeductionTaxHierarchies_Line', Index: 9, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.DeductionTaxHierarchy.prototype.AbsEntry = new Number();
SAPB1.DeductionTaxHierarchy.prototype.BPCode = new String();
SAPB1.DeductionTaxHierarchy.prototype.HierarchyCode = new String();
SAPB1.DeductionTaxHierarchy.prototype.HierarchyName = new String();
SAPB1.DeductionTaxHierarchy.prototype.ValidFrom = new String();
SAPB1.DeductionTaxHierarchy.prototype.ValidUntil = new String();
SAPB1.DeductionTaxHierarchy.prototype.DeductionPercent = new Number();
SAPB1.DeductionTaxHierarchy.prototype.MaximumTotal = new Number();
SAPB1.DeductionTaxHierarchy.prototype.LastUpdated = new String();
SAPB1.DeductionTaxHierarchy.prototype.DeductionTaxHierarchies_Lines = new DeductionTaxHierarchies_LineCollection();

SAPB1.DeductionTaxHierarchy.DeductionTaxHierarchies_Line = DeductionTaxHierarchies_Line
SAPB1.DeductionTaxHierarchy.DeductionTaxHierarchies_LineCollection = DeductionTaxHierarchies_LineCollection


SAPB1.DeductionTaxHierarchy.create = function (rawObject) {
    var instance = new SAPB1.DeductionTaxHierarchy();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DeductionTaxHierarchy.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DeductionTaxHierarchy;
