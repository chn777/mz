

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CheckInParams = function () {
}
SAPB1.CheckInParams.prototype = new SAPB1.ComplexType();
SAPB1.CheckInParams.prototype.constructor = SAPB1.CheckInParams;
SAPB1.CheckInParams.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CheckInParams.Date = { valueOf: function(){return 'Date';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckInParams.Time = { valueOf: function(){return 'Time';}, Type: 'Edm.Time', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckInParams.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckInParams.Latitude = { valueOf: function(){return 'Latitude';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckInParams.Longitude = { valueOf: function(){return 'Longitude';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckInParams.HandledBy = { valueOf: function(){return 'HandledBy';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckInParams.HandledByEmployee = { valueOf: function(){return 'HandledByEmployee';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CheckInParams.prototype.LineNumber = new Number();
SAPB1.CheckInParams.prototype.Date = new String();
SAPB1.CheckInParams.prototype.Time = new String();
SAPB1.CheckInParams.prototype.Location = new String();
SAPB1.CheckInParams.prototype.Latitude = new String();
SAPB1.CheckInParams.prototype.Longitude = new String();
SAPB1.CheckInParams.prototype.HandledBy = new Number();
SAPB1.CheckInParams.prototype.HandledByEmployee = new Number();



SAPB1.CheckInParams.create = function (rawObject) {
    var instance = new SAPB1.CheckInParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CheckInParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CheckInParams;
