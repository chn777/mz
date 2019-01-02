

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.IndiaSacCode = function () {
}
SAPB1.IndiaSacCode.prototype = new SAPB1.EntityType();
SAPB1.IndiaSacCode.prototype.constructor = SAPB1.IndiaSacCode;
SAPB1.IndiaSacCode.prototype.keys.push('AbsEntry');
SAPB1.IndiaSacCode.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.IndiaSacCode.ServiceCode = { valueOf: function(){return 'ServiceCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.IndiaSacCode.ServiceName = { valueOf: function(){return 'ServiceName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IndiaSacCode.prototype.AbsEntry = new Number();
SAPB1.IndiaSacCode.prototype.ServiceCode = new String();
SAPB1.IndiaSacCode.prototype.ServiceName = new String();



SAPB1.IndiaSacCode.create = function (rawObject) {
    var instance = new SAPB1.IndiaSacCode();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.IndiaSacCode.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.IndiaSacCode;
