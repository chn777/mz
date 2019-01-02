

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.RouteStage = function () {
}
SAPB1.RouteStage.prototype = new SAPB1.EntityType();
SAPB1.RouteStage.prototype.constructor = SAPB1.RouteStage;
SAPB1.RouteStage.prototype.keys.push('InternalNumber');
SAPB1.RouteStage.InternalNumber = { valueOf: function(){return 'InternalNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.RouteStage.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.RouteStage.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RouteStage.CreationDate = { valueOf: function(){return 'CreationDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RouteStage.GenerationTime = { valueOf: function(){return 'GenerationTime';}, Type: 'Edm.Time', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RouteStage.DateOfUpdate = { valueOf: function(){return 'DateOfUpdate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RouteStage.prototype.InternalNumber = new Number();
SAPB1.RouteStage.prototype.Code = new String();
SAPB1.RouteStage.prototype.Description = new String();
SAPB1.RouteStage.prototype.CreationDate = new String();
SAPB1.RouteStage.prototype.GenerationTime = new String();
SAPB1.RouteStage.prototype.DateOfUpdate = new String();



SAPB1.RouteStage.create = function (rawObject) {
    var instance = new SAPB1.RouteStage();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.RouteStage.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.RouteStage;
