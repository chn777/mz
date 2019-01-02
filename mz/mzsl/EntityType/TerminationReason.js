

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TerminationReason = function () {
}
SAPB1.TerminationReason.prototype = new SAPB1.EntityType();
SAPB1.TerminationReason.prototype.constructor = SAPB1.TerminationReason;
SAPB1.TerminationReason.prototype.keys.push('ReasonID');
SAPB1.TerminationReason.ReasonID = { valueOf: function(){return 'ReasonID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TerminationReason.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TerminationReason.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TerminationReason.prototype.ReasonID = new Number();
SAPB1.TerminationReason.prototype.Name = new String();
SAPB1.TerminationReason.prototype.Description = new String();



SAPB1.TerminationReason.create = function (rawObject) {
    var instance = new SAPB1.TerminationReason();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TerminationReason.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TerminationReason;
