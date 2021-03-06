

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UnitOfMeasurementGroupParams = function () {
}
SAPB1.UnitOfMeasurementGroupParams.prototype = new SAPB1.ComplexType();
SAPB1.UnitOfMeasurementGroupParams.prototype.constructor = SAPB1.UnitOfMeasurementGroupParams;
SAPB1.UnitOfMeasurementGroupParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurementGroupParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurementGroupParams.prototype.AbsEntry = new Number();
SAPB1.UnitOfMeasurementGroupParams.prototype.Code = new String();



SAPB1.UnitOfMeasurementGroupParams.create = function (rawObject) {
    var instance = new SAPB1.UnitOfMeasurementGroupParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UnitOfMeasurementGroupParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UnitOfMeasurementGroupParams;
