

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceContract_Line = function () {
}
SAPB1.ServiceContract_Line.prototype = new SAPB1.ComplexType();
SAPB1.ServiceContract_Line.prototype.constructor = SAPB1.ServiceContract_Line;
SAPB1.ServiceContract_Line.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract_Line.ManufacturerSerialNum = { valueOf: function(){return 'ManufacturerSerialNum';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract_Line.InternalSerialNum = { valueOf: function(){return 'InternalSerialNum';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract_Line.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract_Line.ItemName = { valueOf: function(){return 'ItemName';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract_Line.ItemGroup = { valueOf: function(){return 'ItemGroup';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract_Line.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract_Line.EndDate = { valueOf: function(){return 'EndDate';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract_Line.ItemGroupName = { valueOf: function(){return 'ItemGroupName';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract_Line.TerminationDate = { valueOf: function(){return 'TerminationDate';}, Type: 'Edm.DateTime', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceContract_Line.prototype.LineNum = new Number();
SAPB1.ServiceContract_Line.prototype.ManufacturerSerialNum = new String();
SAPB1.ServiceContract_Line.prototype.InternalSerialNum = new String();
SAPB1.ServiceContract_Line.prototype.ItemCode = new String();
SAPB1.ServiceContract_Line.prototype.ItemName = new String();
SAPB1.ServiceContract_Line.prototype.ItemGroup = new Number();
SAPB1.ServiceContract_Line.prototype.StartDate = new String();
SAPB1.ServiceContract_Line.prototype.EndDate = new String();
SAPB1.ServiceContract_Line.prototype.ItemGroupName = new String();
SAPB1.ServiceContract_Line.prototype.TerminationDate = new String();



SAPB1.ServiceContract_Line.create = function (rawObject) {
    var instance = new SAPB1.ServiceContract_Line();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceContract_Line.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceContract_Line;
