

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DocumentSeriesUserParams = function () {
}
SAPB1.DocumentSeriesUserParams.prototype = new SAPB1.ComplexType();
SAPB1.DocumentSeriesUserParams.prototype.constructor = SAPB1.DocumentSeriesUserParams;
SAPB1.DocumentSeriesUserParams.Document = { valueOf: function(){return 'Document';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSeriesUserParams.DocumentSubType = { valueOf: function(){return 'DocumentSubType';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSeriesUserParams.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSeriesUserParams.User = { valueOf: function(){return 'User';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentSeriesUserParams.prototype.Document = new String();
SAPB1.DocumentSeriesUserParams.prototype.DocumentSubType = new String();
SAPB1.DocumentSeriesUserParams.prototype.Series = new Number();
SAPB1.DocumentSeriesUserParams.prototype.User = new Number();



SAPB1.DocumentSeriesUserParams.create = function (rawObject) {
    var instance = new SAPB1.DocumentSeriesUserParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DocumentSeriesUserParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DocumentSeriesUserParams;
