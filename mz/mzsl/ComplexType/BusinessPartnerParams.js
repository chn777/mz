

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BusinessPartnerParams = function () {
}
SAPB1.BusinessPartnerParams.prototype = new SAPB1.ComplexType();
SAPB1.BusinessPartnerParams.prototype.constructor = SAPB1.BusinessPartnerParams;
SAPB1.BusinessPartnerParams.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPartnerParams.prototype.CardCode = new String();



SAPB1.BusinessPartnerParams.create = function (rawObject) {
    var instance = new SAPB1.BusinessPartnerParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BusinessPartnerParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BusinessPartnerParams;
