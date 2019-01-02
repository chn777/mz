

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesOpportunitiesPartner = function () {
}
SAPB1.SalesOpportunitiesPartner.prototype = new SAPB1.ComplexType();
SAPB1.SalesOpportunitiesPartner.prototype.constructor = SAPB1.SalesOpportunitiesPartner;
SAPB1.SalesOpportunitiesPartner.RowNo = { valueOf: function(){return 'RowNo';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesPartner.Partners = { valueOf: function(){return 'Partners';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesPartner.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesPartner.RelationshipCode = { valueOf: function(){return 'RelationshipCode';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesPartner.SequenceNo = { valueOf: function(){return 'SequenceNo';}, Type: 'Edm.Int32', Index: 4, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesPartner.prototype.RowNo = new Number();
SAPB1.SalesOpportunitiesPartner.prototype.Partners = new Number();
SAPB1.SalesOpportunitiesPartner.prototype.Details = new String();
SAPB1.SalesOpportunitiesPartner.prototype.RelationshipCode = new Number();
SAPB1.SalesOpportunitiesPartner.prototype.SequenceNo = new Number();



SAPB1.SalesOpportunitiesPartner.create = function (rawObject) {
    var instance = new SAPB1.SalesOpportunitiesPartner();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesOpportunitiesPartner.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesOpportunitiesPartner;
