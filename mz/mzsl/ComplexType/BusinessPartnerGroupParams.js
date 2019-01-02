

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BusinessPartnerGroupParams = function () {
}
SAPB1.BusinessPartnerGroupParams.prototype = new SAPB1.ComplexType();
SAPB1.BusinessPartnerGroupParams.prototype.constructor = SAPB1.BusinessPartnerGroupParams;
SAPB1.BusinessPartnerGroupParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPartnerGroupParams.prototype.Code = new Number();



SAPB1.BusinessPartnerGroupParams.create = function (rawObject) {
    var instance = new SAPB1.BusinessPartnerGroupParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BusinessPartnerGroupParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BusinessPartnerGroupParams;
