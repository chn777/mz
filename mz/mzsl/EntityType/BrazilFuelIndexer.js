

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BrazilFuelIndexer = function () {
}
SAPB1.BrazilFuelIndexer.prototype = new SAPB1.EntityType();
SAPB1.BrazilFuelIndexer.prototype.constructor = SAPB1.BrazilFuelIndexer;
SAPB1.BrazilFuelIndexer.prototype.keys.push('FuelID');
SAPB1.BrazilFuelIndexer.FuelID = { valueOf: function(){return 'FuelID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BrazilFuelIndexer.FuelGroupCode = { valueOf: function(){return 'FuelGroupCode';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BrazilFuelIndexer.FuelCode = { valueOf: function(){return 'FuelCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BrazilFuelIndexer.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BrazilFuelIndexer.prototype.FuelID = new Number();
SAPB1.BrazilFuelIndexer.prototype.FuelGroupCode = new Number();
SAPB1.BrazilFuelIndexer.prototype.FuelCode = new String();
SAPB1.BrazilFuelIndexer.prototype.Description = new String();



SAPB1.BrazilFuelIndexer.create = function (rawObject) {
    var instance = new SAPB1.BrazilFuelIndexer();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BrazilFuelIndexer.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BrazilFuelIndexer;
