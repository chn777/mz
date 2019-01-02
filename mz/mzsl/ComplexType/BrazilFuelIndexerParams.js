

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BrazilFuelIndexerParams = function () {
}
SAPB1.BrazilFuelIndexerParams.prototype = new SAPB1.ComplexType();
SAPB1.BrazilFuelIndexerParams.prototype.constructor = SAPB1.BrazilFuelIndexerParams;
SAPB1.BrazilFuelIndexerParams.FuelID = { valueOf: function(){return 'FuelID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BrazilFuelIndexerParams.FuelGroupCode = { valueOf: function(){return 'FuelGroupCode';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BrazilFuelIndexerParams.FuelCode = { valueOf: function(){return 'FuelCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BrazilFuelIndexerParams.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BrazilFuelIndexerParams.prototype.FuelID = new Number();
SAPB1.BrazilFuelIndexerParams.prototype.FuelGroupCode = new Number();
SAPB1.BrazilFuelIndexerParams.prototype.FuelCode = new String();
SAPB1.BrazilFuelIndexerParams.prototype.Description = new String();



SAPB1.BrazilFuelIndexerParams.create = function (rawObject) {
    var instance = new SAPB1.BrazilFuelIndexerParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BrazilFuelIndexerParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BrazilFuelIndexerParams;
