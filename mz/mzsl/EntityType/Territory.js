
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Territory = function () {
}
SAPB1.Territory.prototype = new SAPB1.EntityType();
SAPB1.Territory.prototype.constructor = SAPB1.Territory;
SAPB1.Territory.prototype.keys.push('TerritoryID');
SAPB1.Territory.TerritoryID = { valueOf: function(){return 'TerritoryID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Territory.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Territory.LocationIndex = { valueOf: function(){return 'LocationIndex';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Territory.Inactive = { valueOf: function(){return 'Inactive';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Territory.Parent = { valueOf: function(){return 'Parent';}, Type: 'Edm.Int32', Index: 4, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Territory.prototype.TerritoryID = new Number();
SAPB1.Territory.prototype.Description = new String();
SAPB1.Territory.prototype.LocationIndex = new Number();
SAPB1.Territory.prototype.Inactive = new String();
SAPB1.Territory.prototype.Parent = new Number();


SAPB1.Territory.BoYesNoEnum = BoYesNoEnum

SAPB1.Territory.create = function (rawObject) {
    var instance = new SAPB1.Territory();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Territory.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Territory;
