

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.FormattedSearchParams = function () {
}
SAPB1.FormattedSearchParams.prototype = new SAPB1.ComplexType();
SAPB1.FormattedSearchParams.prototype.constructor = SAPB1.FormattedSearchParams;
SAPB1.FormattedSearchParams.Index = { valueOf: function(){return 'Index';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FormattedSearchParams.prototype.Index = new Number();



SAPB1.FormattedSearchParams.create = function (rawObject) {
    var instance = new SAPB1.FormattedSearchParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.FormattedSearchParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.FormattedSearchParams;
