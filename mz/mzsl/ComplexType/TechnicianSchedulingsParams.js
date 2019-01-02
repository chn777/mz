

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TechnicianSchedulingsParams = function () {
}
SAPB1.TechnicianSchedulingsParams.prototype = new SAPB1.ComplexType();
SAPB1.TechnicianSchedulingsParams.prototype.constructor = SAPB1.TechnicianSchedulingsParams;
SAPB1.TechnicianSchedulingsParams.Technician = { valueOf: function(){return 'Technician';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSchedulingsParams.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSchedulingsParams.EndDate = { valueOf: function(){return 'EndDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSchedulingsParams.prototype.Technician = new Number();
SAPB1.TechnicianSchedulingsParams.prototype.StartDate = new String();
SAPB1.TechnicianSchedulingsParams.prototype.EndDate = new String();



SAPB1.TechnicianSchedulingsParams.create = function (rawObject) {
    var instance = new SAPB1.TechnicianSchedulingsParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TechnicianSchedulingsParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TechnicianSchedulingsParams;
