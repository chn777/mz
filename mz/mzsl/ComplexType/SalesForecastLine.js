

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesForecastLine = function () {
}
SAPB1.SalesForecastLine.prototype = new SAPB1.ComplexType();
SAPB1.SalesForecastLine.prototype.constructor = SAPB1.SalesForecastLine;
SAPB1.SalesForecastLine.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesForecastLine.ForecastedDay = { valueOf: function(){return 'ForecastedDay';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesForecastLine.ItemNo = { valueOf: function(){return 'ItemNo';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesForecastLine.Warehouse = { valueOf: function(){return 'Warehouse';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesForecastLine.prototype.Quantity = new Number();
SAPB1.SalesForecastLine.prototype.ForecastedDay = new String();
SAPB1.SalesForecastLine.prototype.ItemNo = new String();
SAPB1.SalesForecastLine.prototype.Warehouse = new String();



SAPB1.SalesForecastLine.create = function (rawObject) {
    var instance = new SAPB1.SalesForecastLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesForecastLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesForecastLine;
