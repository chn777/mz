

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceCallOrigin = function () {
}
SAPB1.ServiceCallOrigin.prototype = new SAPB1.EntityType();
SAPB1.ServiceCallOrigin.prototype.constructor = SAPB1.ServiceCallOrigin;
SAPB1.ServiceCallOrigin.prototype.keys.push('OriginID');
SAPB1.ServiceCallOrigin.OriginID = { valueOf: function(){return 'OriginID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceCallOrigin.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallOrigin.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallOrigin.prototype.OriginID = new Number();
SAPB1.ServiceCallOrigin.prototype.Name = new String();
SAPB1.ServiceCallOrigin.prototype.Description = new String();



SAPB1.ServiceCallOrigin.create = function (rawObject) {
    var instance = new SAPB1.ServiceCallOrigin();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceCallOrigin.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceCallOrigin;
