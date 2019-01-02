
var BoBusinessPartnerGroupTypes = require('EnumType/BoBusinessPartnerGroupTypes')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BusinessPartnerGroup = function () {
}
SAPB1.BusinessPartnerGroup.prototype = new SAPB1.EntityType();
SAPB1.BusinessPartnerGroup.prototype.constructor = SAPB1.BusinessPartnerGroup;
SAPB1.BusinessPartnerGroup.prototype.keys.push('Code');
SAPB1.BusinessPartnerGroup.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BusinessPartnerGroup.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BusinessPartnerGroup.Type = { valueOf: function(){return 'Type';}, Type: 'BoBusinessPartnerGroupTypes', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPartnerGroup.prototype.Code = new Number();
SAPB1.BusinessPartnerGroup.prototype.Name = new String();
SAPB1.BusinessPartnerGroup.prototype.Type = new String();


SAPB1.BusinessPartnerGroup.BoBusinessPartnerGroupTypes = BoBusinessPartnerGroupTypes

SAPB1.BusinessPartnerGroup.create = function (rawObject) {
    var instance = new SAPB1.BusinessPartnerGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BusinessPartnerGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BusinessPartnerGroup;
