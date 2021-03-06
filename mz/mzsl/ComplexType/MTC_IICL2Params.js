

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MTC_IICL2Params = function () {
}
SAPB1.MTC_IICL2Params.prototype = new SAPB1.ComplexType();
SAPB1.MTC_IICL2Params.prototype.constructor = SAPB1.MTC_IICL2Params;
SAPB1.MTC_IICL2Params.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_IICL2Params.prototype.Code = new String();



SAPB1.MTC_IICL2Params.create = function (rawObject) {
    var instance = new SAPB1.MTC_IICL2Params();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MTC_IICL2Params.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MTC_IICL2Params;
