

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceGroup = function () {
}
SAPB1.ServiceGroup.prototype = new SAPB1.EntityType();
SAPB1.ServiceGroup.prototype.constructor = SAPB1.ServiceGroup;
SAPB1.ServiceGroup.prototype.keys.push('AbsEntry');
SAPB1.ServiceGroup.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceGroup.ServiceGroupCode = { valueOf: function(){return 'ServiceGroupCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceGroup.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceGroup.prototype.AbsEntry = new Number();
SAPB1.ServiceGroup.prototype.ServiceGroupCode = new String();
SAPB1.ServiceGroup.prototype.Description = new String();



SAPB1.ServiceGroup.create = function (rawObject) {
    var instance = new SAPB1.ServiceGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceGroup;
