

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MaterialGroupParams = function () {
}
SAPB1.MaterialGroupParams.prototype = new SAPB1.ComplexType();
SAPB1.MaterialGroupParams.prototype.constructor = SAPB1.MaterialGroupParams;
SAPB1.MaterialGroupParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialGroupParams.MaterialGroupCode = { valueOf: function(){return 'MaterialGroupCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MaterialGroupParams.prototype.AbsEntry = new Number();
SAPB1.MaterialGroupParams.prototype.MaterialGroupCode = new String();



SAPB1.MaterialGroupParams.create = function (rawObject) {
    var instance = new SAPB1.MaterialGroupParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MaterialGroupParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MaterialGroupParams;
