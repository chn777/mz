

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ActivityInstanceParams = function () {
}
SAPB1.ActivityInstanceParams.prototype = new SAPB1.ComplexType();
SAPB1.ActivityInstanceParams.prototype.constructor = SAPB1.ActivityInstanceParams;
SAPB1.ActivityInstanceParams.ActivityCode = { valueOf: function(){return 'ActivityCode';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ActivityInstanceParams.InstanceDate = { valueOf: function(){return 'InstanceDate';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ActivityInstanceParams.prototype.ActivityCode = new Number();
SAPB1.ActivityInstanceParams.prototype.InstanceDate = new String();



SAPB1.ActivityInstanceParams.create = function (rawObject) {
    var instance = new SAPB1.ActivityInstanceParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ActivityInstanceParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ActivityInstanceParams;
