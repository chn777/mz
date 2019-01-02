var UoMGroupDefinition = require('ComplexType/UoMGroupDefinition')
var UoMGroupDefinitionCollection = require('ComplexType/UoMGroupDefinitionCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UnitOfMeasurementGroup = function () {
}
SAPB1.UnitOfMeasurementGroup.prototype = new SAPB1.EntityType();
SAPB1.UnitOfMeasurementGroup.prototype.constructor = SAPB1.UnitOfMeasurementGroup;
SAPB1.UnitOfMeasurementGroup.prototype.keys.push('AbsEntry');
SAPB1.UnitOfMeasurementGroup.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurementGroup.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurementGroup.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurementGroup.BaseUoM = { valueOf: function(){return 'BaseUoM';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurementGroup.UoMGroupDefinitionCollection = { valueOf: function(){return 'UoMGroupDefinitionCollection';}, Type: 'UoMGroupDefinition', Index: 4, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.UnitOfMeasurementGroup.prototype.AbsEntry = new Number();
SAPB1.UnitOfMeasurementGroup.prototype.Code = new String();
SAPB1.UnitOfMeasurementGroup.prototype.Name = new String();
SAPB1.UnitOfMeasurementGroup.prototype.BaseUoM = new Number();
SAPB1.UnitOfMeasurementGroup.prototype.UoMGroupDefinitionCollection = new UoMGroupDefinitionCollection();

SAPB1.UnitOfMeasurementGroup.UoMGroupDefinition = UoMGroupDefinition
SAPB1.UnitOfMeasurementGroup.UoMGroupDefinitionCollection = UoMGroupDefinitionCollection


SAPB1.UnitOfMeasurementGroup.create = function (rawObject) {
    var instance = new SAPB1.UnitOfMeasurementGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UnitOfMeasurementGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UnitOfMeasurementGroup;
