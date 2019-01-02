

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.RecordsetParams = function () {
}
SAPB1.RecordsetParams.prototype = new SAPB1.ComplexType();
SAPB1.RecordsetParams.prototype.constructor = SAPB1.RecordsetParams;
SAPB1.RecordsetParams.Query = { valueOf: function(){return 'Query';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RecordsetParams.prototype.Query = new String();



SAPB1.RecordsetParams.create = function (rawObject) {
    var instance = new SAPB1.RecordsetParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.RecordsetParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.RecordsetParams;
