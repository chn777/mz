

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ActivityStatus = function () {
}
SAPB1.ActivityStatus.prototype = new SAPB1.EntityType();
SAPB1.ActivityStatus.prototype.constructor = SAPB1.ActivityStatus;
SAPB1.ActivityStatus.prototype.keys.push('StatusId');
SAPB1.ActivityStatus.StatusDescription = { valueOf: function(){return 'StatusDescription';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ActivityStatus.StatusId = { valueOf: function(){return 'StatusId';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ActivityStatus.StatusName = { valueOf: function(){return 'StatusName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ActivityStatus.prototype.StatusDescription = new String();
SAPB1.ActivityStatus.prototype.StatusId = new Number();
SAPB1.ActivityStatus.prototype.StatusName = new String();



SAPB1.ActivityStatus.create = function (rawObject) {
    var instance = new SAPB1.ActivityStatus();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ActivityStatus.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ActivityStatus;
