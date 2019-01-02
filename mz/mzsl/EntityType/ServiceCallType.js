

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceCallType = function () {
}
SAPB1.ServiceCallType.prototype = new SAPB1.EntityType();
SAPB1.ServiceCallType.prototype.constructor = SAPB1.ServiceCallType;
SAPB1.ServiceCallType.prototype.keys.push('CallTypeID');
SAPB1.ServiceCallType.CallTypeID = { valueOf: function(){return 'CallTypeID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceCallType.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceCallType.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallType.prototype.CallTypeID = new Number();
SAPB1.ServiceCallType.prototype.Name = new String();
SAPB1.ServiceCallType.prototype.Description = new String();



SAPB1.ServiceCallType.create = function (rawObject) {
    var instance = new SAPB1.ServiceCallType();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceCallType.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceCallType;
