var SalesForecastLine = require('ComplexType/SalesForecastLine')
var SalesForecastLineCollection = require('ComplexType/SalesForecastLineCollection')

var BoForecastViewType = require('EnumType/BoForecastViewType')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesForecast = function () {
}
SAPB1.SalesForecast.prototype = new SAPB1.EntityType();
SAPB1.SalesForecast.prototype.constructor = SAPB1.SalesForecast;
SAPB1.SalesForecast.prototype.keys.push('Numerator');
SAPB1.SalesForecast.ForecastStartDate = { valueOf: function(){return 'ForecastStartDate';}, Type: 'Edm.DateTime', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesForecast.ForecastEndDate = { valueOf: function(){return 'ForecastEndDate';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesForecast.ForecastCode = { valueOf: function(){return 'ForecastCode';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesForecast.ForecastName = { valueOf: function(){return 'ForecastName';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesForecast.Numerator = { valueOf: function(){return 'Numerator';}, Type: 'Edm.Int32', Index: 4, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesForecast.View = { valueOf: function(){return 'View';}, Type: 'BoForecastViewType', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesForecast.SalesForecastLines = { valueOf: function(){return 'SalesForecastLines';}, Type: 'SalesForecastLine', Index: 6, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.SalesForecast.prototype.ForecastStartDate = new String();
SAPB1.SalesForecast.prototype.ForecastEndDate = new String();
SAPB1.SalesForecast.prototype.ForecastCode = new String();
SAPB1.SalesForecast.prototype.ForecastName = new String();
SAPB1.SalesForecast.prototype.Numerator = new Number();
SAPB1.SalesForecast.prototype.View = new String();
SAPB1.SalesForecast.prototype.SalesForecastLines = new SalesForecastLineCollection();

SAPB1.SalesForecast.SalesForecastLine = SalesForecastLine
SAPB1.SalesForecast.SalesForecastLineCollection = SalesForecastLineCollection

SAPB1.SalesForecast.BoForecastViewType = BoForecastViewType

SAPB1.SalesForecast.create = function (rawObject) {
    var instance = new SAPB1.SalesForecast();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesForecast.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesForecast;
