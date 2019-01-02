

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TechnicianSettings = function () {
}
SAPB1.TechnicianSettings.prototype = new SAPB1.ComplexType();
SAPB1.TechnicianSettings.prototype.constructor = SAPB1.TechnicianSettings;
SAPB1.TechnicianSettings.Technician = { valueOf: function(){return 'Technician';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSettings.GroupCode = { valueOf: function(){return 'GroupCode';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSettings.prototype.Technician = new Number();
SAPB1.TechnicianSettings.prototype.GroupCode = new Number();



SAPB1.TechnicianSettings.create = function (rawObject) {
    var instance = new SAPB1.TechnicianSettings();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TechnicianSettings.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TechnicianSettings;
