

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UnitOfMeasurementParams = function () {
}
SAPB1.UnitOfMeasurementParams.prototype = new SAPB1.ComplexType();
SAPB1.UnitOfMeasurementParams.prototype.constructor = SAPB1.UnitOfMeasurementParams;
SAPB1.UnitOfMeasurementParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurementParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UnitOfMeasurementParams.prototype.AbsEntry = new Number();
SAPB1.UnitOfMeasurementParams.prototype.Code = new String();



SAPB1.UnitOfMeasurementParams.create = function (rawObject) {
    var instance = new SAPB1.UnitOfMeasurementParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UnitOfMeasurementParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UnitOfMeasurementParams;
