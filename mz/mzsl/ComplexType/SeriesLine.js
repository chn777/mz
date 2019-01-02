

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SeriesLine = function () {
}
SAPB1.SeriesLine.prototype = new SAPB1.ComplexType();
SAPB1.SeriesLine.prototype.constructor = SAPB1.SeriesLine;
SAPB1.SeriesLine.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SeriesLine.Prefix = { valueOf: function(){return 'Prefix';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SeriesLine.FirstNum = { valueOf: function(){return 'FirstNum';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SeriesLine.NextNum = { valueOf: function(){return 'NextNum';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SeriesLine.LastNum = { valueOf: function(){return 'LastNum';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SeriesLine.prototype.Series = new Number();
SAPB1.SeriesLine.prototype.Prefix = new String();
SAPB1.SeriesLine.prototype.FirstNum = new Number();
SAPB1.SeriesLine.prototype.NextNum = new Number();
SAPB1.SeriesLine.prototype.LastNum = new Number();



SAPB1.SeriesLine.create = function (rawObject) {
    var instance = new SAPB1.SeriesLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SeriesLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SeriesLine;
