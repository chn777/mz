

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ActivityInstancesListParams = function () {
}
SAPB1.ActivityInstancesListParams.prototype = new SAPB1.ComplexType();
SAPB1.ActivityInstancesListParams.prototype.constructor = SAPB1.ActivityInstancesListParams;
SAPB1.ActivityInstancesListParams.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ActivityInstancesListParams.InstanceCount = { valueOf: function(){return 'InstanceCount';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ActivityInstancesListParams.prototype.StartDate = new String();
SAPB1.ActivityInstancesListParams.prototype.InstanceCount = new Number();



SAPB1.ActivityInstancesListParams.create = function (rawObject) {
    var instance = new SAPB1.ActivityInstancesListParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ActivityInstancesListParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ActivityInstancesListParams;
