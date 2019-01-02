
var ResourceDailyCapacityWeekdayEnum = require('EnumType/ResourceDailyCapacityWeekdayEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ResourceDailyCapacity = function () {
}
SAPB1.ResourceDailyCapacity.prototype = new SAPB1.ComplexType();
SAPB1.ResourceDailyCapacity.prototype.constructor = SAPB1.ResourceDailyCapacity;
SAPB1.ResourceDailyCapacity.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ResourceDailyCapacity.Weekday = { valueOf: function(){return 'Weekday';}, Type: 'ResourceDailyCapacityWeekdayEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceDailyCapacity.Factor1 = { valueOf: function(){return 'Factor1';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceDailyCapacity.Factor2 = { valueOf: function(){return 'Factor2';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceDailyCapacity.Factor3 = { valueOf: function(){return 'Factor3';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceDailyCapacity.Factor4 = { valueOf: function(){return 'Factor4';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceDailyCapacity.Total = { valueOf: function(){return 'Total';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceDailyCapacity.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceDailyCapacity.SingleRun = { valueOf: function(){return 'SingleRun';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceDailyCapacity.prototype.Code = new String();
SAPB1.ResourceDailyCapacity.prototype.Weekday = new String();
SAPB1.ResourceDailyCapacity.prototype.Factor1 = new Number();
SAPB1.ResourceDailyCapacity.prototype.Factor2 = new Number();
SAPB1.ResourceDailyCapacity.prototype.Factor3 = new Number();
SAPB1.ResourceDailyCapacity.prototype.Factor4 = new Number();
SAPB1.ResourceDailyCapacity.prototype.Total = new Number();
SAPB1.ResourceDailyCapacity.prototype.Remarks = new String();
SAPB1.ResourceDailyCapacity.prototype.SingleRun = new Number();


SAPB1.ResourceDailyCapacity.ResourceDailyCapacityWeekdayEnum = ResourceDailyCapacityWeekdayEnum

SAPB1.ResourceDailyCapacity.create = function (rawObject) {
    var instance = new SAPB1.ResourceDailyCapacity();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ResourceDailyCapacity.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ResourceDailyCapacity;
