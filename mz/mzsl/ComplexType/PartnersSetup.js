

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PartnersSetup = function () {
}
SAPB1.PartnersSetup.prototype = new SAPB1.ComplexType();
SAPB1.PartnersSetup.prototype.constructor = SAPB1.PartnersSetup;
SAPB1.PartnersSetup.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PartnersSetup.DefaultRelationship = { valueOf: function(){return 'DefaultRelationship';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PartnersSetup.RelatedBP = { valueOf: function(){return 'RelatedBP';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PartnersSetup.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PartnersSetup.prototype.Name = new String();
SAPB1.PartnersSetup.prototype.DefaultRelationship = new Number();
SAPB1.PartnersSetup.prototype.RelatedBP = new String();
SAPB1.PartnersSetup.prototype.Details = new String();



SAPB1.PartnersSetup.create = function (rawObject) {
    var instance = new SAPB1.PartnersSetup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PartnersSetup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PartnersSetup;
