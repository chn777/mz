

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BusinessPartnerProperty = function () {
}
SAPB1.BusinessPartnerProperty.prototype = new SAPB1.EntityType();
SAPB1.BusinessPartnerProperty.prototype.constructor = SAPB1.BusinessPartnerProperty;
SAPB1.BusinessPartnerProperty.prototype.keys.push('PropertyCode');
SAPB1.BusinessPartnerProperty.PropertyCode = { valueOf: function(){return 'PropertyCode';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BusinessPartnerProperty.PropertyName = { valueOf: function(){return 'PropertyName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BusinessPartnerProperty.prototype.PropertyCode = new Number();
SAPB1.BusinessPartnerProperty.prototype.PropertyName = new String();



SAPB1.BusinessPartnerProperty.create = function (rawObject) {
    var instance = new SAPB1.BusinessPartnerProperty();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BusinessPartnerProperty.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BusinessPartnerProperty;
