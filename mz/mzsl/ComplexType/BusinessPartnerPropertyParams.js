

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BusinessPartnerPropertyParams = function () {
}
SAPB1.BusinessPartnerPropertyParams.prototype = new SAPB1.ComplexType();
SAPB1.BusinessPartnerPropertyParams.prototype.constructor = SAPB1.BusinessPartnerPropertyParams;
SAPB1.BusinessPartnerPropertyParams.PropertyCode = { valueOf: function(){return 'PropertyCode';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPartnerPropertyParams.PropertyName = { valueOf: function(){return 'PropertyName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BusinessPartnerPropertyParams.prototype.PropertyCode = new Number();
SAPB1.BusinessPartnerPropertyParams.prototype.PropertyName = new String();



SAPB1.BusinessPartnerPropertyParams.create = function (rawObject) {
    var instance = new SAPB1.BusinessPartnerPropertyParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BusinessPartnerPropertyParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BusinessPartnerPropertyParams;
