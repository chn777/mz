

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Relationship = function () {
}
SAPB1.Relationship.prototype = new SAPB1.EntityType();
SAPB1.Relationship.prototype.constructor = SAPB1.Relationship;
SAPB1.Relationship.prototype.keys.push('RelationshipCode');
SAPB1.Relationship.RelationshipDescription = { valueOf: function(){return 'RelationshipDescription';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Relationship.RelationshipCode = { valueOf: function(){return 'RelationshipCode';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Relationship.prototype.RelationshipDescription = new String();
SAPB1.Relationship.prototype.RelationshipCode = new Number();



SAPB1.Relationship.create = function (rawObject) {
    var instance = new SAPB1.Relationship();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Relationship.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Relationship;
