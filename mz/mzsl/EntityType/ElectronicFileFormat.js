

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ElectronicFileFormat = function () {
}
SAPB1.ElectronicFileFormat.prototype = new SAPB1.EntityType();
SAPB1.ElectronicFileFormat.prototype.constructor = SAPB1.ElectronicFileFormat;
SAPB1.ElectronicFileFormat.prototype.keys.push('FormatID');
SAPB1.ElectronicFileFormat.FormatID = { valueOf: function(){return 'FormatID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ElectronicFileFormat.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ElectronicFileFormat.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicFileFormat.Version = { valueOf: function(){return 'Version';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicFileFormat.SchemaVersion = { valueOf: function(){return 'SchemaVersion';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicFileFormat.OutputFilePath = { valueOf: function(){return 'OutputFilePath';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicFileFormat.MenuName = { valueOf: function(){return 'MenuName';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicFileFormat.MenuPath = { valueOf: function(){return 'MenuPath';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicFileFormat.prototype.FormatID = new Number();
SAPB1.ElectronicFileFormat.prototype.Name = new String();
SAPB1.ElectronicFileFormat.prototype.Description = new String();
SAPB1.ElectronicFileFormat.prototype.Version = new String();
SAPB1.ElectronicFileFormat.prototype.SchemaVersion = new String();
SAPB1.ElectronicFileFormat.prototype.OutputFilePath = new String();
SAPB1.ElectronicFileFormat.prototype.MenuName = new String();
SAPB1.ElectronicFileFormat.prototype.MenuPath = new String();



SAPB1.ElectronicFileFormat.create = function (rawObject) {
    var instance = new SAPB1.ElectronicFileFormat();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ElectronicFileFormat.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ElectronicFileFormat;
