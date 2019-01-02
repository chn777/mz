

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SensitiveDataAccess = function () {
}
SAPB1.SensitiveDataAccess.prototype = new SAPB1.ComplexType();
SAPB1.SensitiveDataAccess.prototype.constructor = SAPB1.SensitiveDataAccess;
SAPB1.SensitiveDataAccess.Table = { valueOf: function(){return 'Table';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SensitiveDataAccess.Key1 = { valueOf: function(){return 'Key1';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SensitiveDataAccess.Key2 = { valueOf: function(){return 'Key2';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SensitiveDataAccess.Key3 = { valueOf: function(){return 'Key3';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SensitiveDataAccess.Key4 = { valueOf: function(){return 'Key4';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SensitiveDataAccess.PropertyName = { valueOf: function(){return 'PropertyName';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SensitiveDataAccess.PropertyID = { valueOf: function(){return 'PropertyID';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SensitiveDataAccess.PropertyValue = { valueOf: function(){return 'PropertyValue';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SensitiveDataAccess.prototype.Table = new String();
SAPB1.SensitiveDataAccess.prototype.Key1 = new String();
SAPB1.SensitiveDataAccess.prototype.Key2 = new String();
SAPB1.SensitiveDataAccess.prototype.Key3 = new String();
SAPB1.SensitiveDataAccess.prototype.Key4 = new String();
SAPB1.SensitiveDataAccess.prototype.PropertyName = new String();
SAPB1.SensitiveDataAccess.prototype.PropertyID = new Number();
SAPB1.SensitiveDataAccess.prototype.PropertyValue = new String();



SAPB1.SensitiveDataAccess.create = function (rawObject) {
    var instance = new SAPB1.SensitiveDataAccess();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SensitiveDataAccess.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SensitiveDataAccess;
