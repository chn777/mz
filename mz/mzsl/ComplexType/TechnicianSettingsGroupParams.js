

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TechnicianSettingsGroupParams = function () {
}
SAPB1.TechnicianSettingsGroupParams.prototype = new SAPB1.ComplexType();
SAPB1.TechnicianSettingsGroupParams.prototype.constructor = SAPB1.TechnicianSettingsGroupParams;
SAPB1.TechnicianSettingsGroupParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSettingsGroupParams.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSettingsGroupParams.prototype.Code = new Number();
SAPB1.TechnicianSettingsGroupParams.prototype.Name = new String();



SAPB1.TechnicianSettingsGroupParams.create = function (rawObject) {
    var instance = new SAPB1.TechnicianSettingsGroupParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TechnicianSettingsGroupParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TechnicianSettingsGroupParams;
