
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TechnicianSchedulings = function () {
}
SAPB1.TechnicianSchedulings.prototype = new SAPB1.ComplexType();
SAPB1.TechnicianSchedulings.prototype.constructor = SAPB1.TechnicianSchedulings;
SAPB1.TechnicianSchedulings.ServiceCallID = { valueOf: function(){return 'ServiceCallID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TechnicianSchedulings.SchedulingLineNum = { valueOf: function(){return 'SchedulingLineNum';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TechnicianSchedulings.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSchedulings.EndDate = { valueOf: function(){return 'EndDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSchedulings.IsClosed = { valueOf: function(){return 'IsClosed';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSchedulings.prototype.ServiceCallID = new Number();
SAPB1.TechnicianSchedulings.prototype.SchedulingLineNum = new Number();
SAPB1.TechnicianSchedulings.prototype.StartDate = new String();
SAPB1.TechnicianSchedulings.prototype.EndDate = new String();
SAPB1.TechnicianSchedulings.prototype.IsClosed = new String();


SAPB1.TechnicianSchedulings.BoYesNoEnum = BoYesNoEnum

SAPB1.TechnicianSchedulings.create = function (rawObject) {
    var instance = new SAPB1.TechnicianSchedulings();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TechnicianSchedulings.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TechnicianSchedulings;
