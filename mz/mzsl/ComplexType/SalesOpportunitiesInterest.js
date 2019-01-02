
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesOpportunitiesInterest = function () {
}
SAPB1.SalesOpportunitiesInterest.prototype = new SAPB1.ComplexType();
SAPB1.SalesOpportunitiesInterest.prototype.constructor = SAPB1.SalesOpportunitiesInterest;
SAPB1.SalesOpportunitiesInterest.RowNo = { valueOf: function(){return 'RowNo';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesInterest.SequenceNo = { valueOf: function(){return 'SequenceNo';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesInterest.PrimaryInterest = { valueOf: function(){return 'PrimaryInterest';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesInterest.InterestId = { valueOf: function(){return 'InterestId';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesOpportunitiesInterest.prototype.RowNo = new Number();
SAPB1.SalesOpportunitiesInterest.prototype.SequenceNo = new Number();
SAPB1.SalesOpportunitiesInterest.prototype.PrimaryInterest = new String();
SAPB1.SalesOpportunitiesInterest.prototype.InterestId = new Number();


SAPB1.SalesOpportunitiesInterest.BoYesNoEnum = BoYesNoEnum

SAPB1.SalesOpportunitiesInterest.create = function (rawObject) {
    var instance = new SAPB1.SalesOpportunitiesInterest();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesOpportunitiesInterest.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesOpportunitiesInterest;
