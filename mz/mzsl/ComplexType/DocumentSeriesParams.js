

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DocumentSeriesParams = function () {
}
SAPB1.DocumentSeriesParams.prototype = new SAPB1.ComplexType();
SAPB1.DocumentSeriesParams.prototype.constructor = SAPB1.DocumentSeriesParams;
SAPB1.DocumentSeriesParams.Document = { valueOf: function(){return 'Document';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSeriesParams.DocumentSubType = { valueOf: function(){return 'DocumentSubType';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSeriesParams.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSeriesParams.prototype.Document = new String();
SAPB1.DocumentSeriesParams.prototype.DocumentSubType = new String();
SAPB1.DocumentSeriesParams.prototype.Series = new Number();



SAPB1.DocumentSeriesParams.create = function (rawObject) {
    var instance = new SAPB1.DocumentSeriesParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DocumentSeriesParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DocumentSeriesParams;
