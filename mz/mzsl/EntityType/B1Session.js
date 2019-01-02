

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.B1Session = function () {
}
SAPB1.B1Session.prototype = new SAPB1.EntityType();
SAPB1.B1Session.prototype.constructor = SAPB1.B1Session;
SAPB1.B1Session.prototype.keys.push('SessionId');
SAPB1.B1Session.SessionId = { valueOf: function(){return 'SessionId';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.B1Session.Version = { valueOf: function(){return 'Version';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.B1Session.SessionTimeout = { valueOf: function(){return 'SessionTimeout';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.B1Session.prototype.SessionId = new String();
SAPB1.B1Session.prototype.Version = new String();
SAPB1.B1Session.prototype.SessionTimeout = new Number();



SAPB1.B1Session.create = function (rawObject) {
    var instance = new SAPB1.B1Session();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.B1Session.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.B1Session;
