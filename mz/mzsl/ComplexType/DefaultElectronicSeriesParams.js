

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DefaultElectronicSeriesParams = function () {
}
SAPB1.DefaultElectronicSeriesParams.prototype = new SAPB1.ComplexType();
SAPB1.DefaultElectronicSeriesParams.prototype.constructor = SAPB1.DefaultElectronicSeriesParams;
SAPB1.DefaultElectronicSeriesParams.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DefaultElectronicSeriesParams.ElectronicSeries = { valueOf: function(){return 'ElectronicSeries';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DefaultElectronicSeriesParams.prototype.Series = new Number();
SAPB1.DefaultElectronicSeriesParams.prototype.ElectronicSeries = new Number();



SAPB1.DefaultElectronicSeriesParams.create = function (rawObject) {
    var instance = new SAPB1.DefaultElectronicSeriesParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DefaultElectronicSeriesParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DefaultElectronicSeriesParams;
