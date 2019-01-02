

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.RouteStageParams = function () {
}
SAPB1.RouteStageParams.prototype = new SAPB1.ComplexType();
SAPB1.RouteStageParams.prototype.constructor = SAPB1.RouteStageParams;
SAPB1.RouteStageParams.InternalNumber = { valueOf: function(){return 'InternalNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RouteStageParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.RouteStageParams.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RouteStageParams.CreationDate = { valueOf: function(){return 'CreationDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RouteStageParams.GenerationTime = { valueOf: function(){return 'GenerationTime';}, Type: 'Edm.Time', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RouteStageParams.DateOfUpdate = { valueOf: function(){return 'DateOfUpdate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RouteStageParams.prototype.InternalNumber = new Number();
SAPB1.RouteStageParams.prototype.Code = new String();
SAPB1.RouteStageParams.prototype.Description = new String();
SAPB1.RouteStageParams.prototype.CreationDate = new String();
SAPB1.RouteStageParams.prototype.GenerationTime = new String();
SAPB1.RouteStageParams.prototype.DateOfUpdate = new String();



SAPB1.RouteStageParams.create = function (rawObject) {
    var instance = new SAPB1.RouteStageParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.RouteStageParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.RouteStageParams;
