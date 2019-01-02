
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.State = function () {
}
SAPB1.State.prototype = new SAPB1.EntityType();
SAPB1.State.prototype.constructor = SAPB1.State;
SAPB1.State.prototype.keys.push('Country','Code');
SAPB1.State.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.State.Country = { valueOf: function(){return 'Country';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.State.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.State.GSTCode = { valueOf: function(){return 'GSTCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.State.IsUnionTerritory = { valueOf: function(){return 'IsUnionTerritory';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.State.prototype.Code = new String();
SAPB1.State.prototype.Country = new String();
SAPB1.State.prototype.Name = new String();
SAPB1.State.prototype.GSTCode = new String();
SAPB1.State.prototype.IsUnionTerritory = new String();


SAPB1.State.BoYesNoEnum = BoYesNoEnum

SAPB1.State.create = function (rawObject) {
    var instance = new SAPB1.State();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.State.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.State;
