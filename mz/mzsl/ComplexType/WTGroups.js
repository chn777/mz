var DocsInWTGroups = require('ComplexType/DocsInWTGroups')
var DocsInWTGroupsCollection = require('ComplexType/DocsInWTGroupsCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WTGroups = function () {
}
SAPB1.WTGroups.prototype = new SAPB1.ComplexType();
SAPB1.WTGroups.prototype.constructor = SAPB1.WTGroups;
SAPB1.WTGroups.WTAbsEntry = { valueOf: function(){return 'WTAbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTGroups.Percent = { valueOf: function(){return 'Percent';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTGroups.SumVATAmount = { valueOf: function(){return 'SumVATAmount';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTGroups.SumDocTotal = { valueOf: function(){return 'SumDocTotal';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTGroups.SumBaseAmount = { valueOf: function(){return 'SumBaseAmount';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTGroups.SumAccumAmount = { valueOf: function(){return 'SumAccumAmount';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTGroups.SumPerceptAmount = { valueOf: function(){return 'SumPerceptAmount';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTGroups.DocsInWTGroupsCollection = { valueOf: function(){return 'DocsInWTGroupsCollection';}, Type: 'DocsInWTGroups', Index: 7, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.WTGroups.prototype.WTAbsEntry = new Number();
SAPB1.WTGroups.prototype.Percent = new Number();
SAPB1.WTGroups.prototype.SumVATAmount = new Number();
SAPB1.WTGroups.prototype.SumDocTotal = new Number();
SAPB1.WTGroups.prototype.SumBaseAmount = new Number();
SAPB1.WTGroups.prototype.SumAccumAmount = new Number();
SAPB1.WTGroups.prototype.SumPerceptAmount = new Number();
SAPB1.WTGroups.prototype.DocsInWTGroupsCollection = new DocsInWTGroupsCollection();

SAPB1.WTGroups.DocsInWTGroups = DocsInWTGroups
SAPB1.WTGroups.DocsInWTGroupsCollection = DocsInWTGroupsCollection


SAPB1.WTGroups.create = function (rawObject) {
    var instance = new SAPB1.WTGroups();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WTGroups.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WTGroups;
