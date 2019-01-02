
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BPIntrastatExtension = function () {
}
SAPB1.BPIntrastatExtension.prototype = new SAPB1.ComplexType();
SAPB1.BPIntrastatExtension.prototype.constructor = SAPB1.BPIntrastatExtension;
SAPB1.BPIntrastatExtension.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BPIntrastatExtension.TransportMode = { valueOf: function(){return 'TransportMode';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPIntrastatExtension.Incoterms = { valueOf: function(){return 'Incoterms';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPIntrastatExtension.NatureOfTransactions = { valueOf: function(){return 'NatureOfTransactions';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPIntrastatExtension.StatisticalProcedure = { valueOf: function(){return 'StatisticalProcedure';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPIntrastatExtension.CustomsProcedure = { valueOf: function(){return 'CustomsProcedure';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPIntrastatExtension.PortOfEntryOrExit = { valueOf: function(){return 'PortOfEntryOrExit';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPIntrastatExtension.DomesticOrForeignID = { valueOf: function(){return 'DomesticOrForeignID';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPIntrastatExtension.IntrastatRelevant = { valueOf: function(){return 'IntrastatRelevant';}, Type: 'BoYesNoEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPIntrastatExtension.prototype.CardCode = new String();
SAPB1.BPIntrastatExtension.prototype.TransportMode = new Number();
SAPB1.BPIntrastatExtension.prototype.Incoterms = new Number();
SAPB1.BPIntrastatExtension.prototype.NatureOfTransactions = new Number();
SAPB1.BPIntrastatExtension.prototype.StatisticalProcedure = new Number();
SAPB1.BPIntrastatExtension.prototype.CustomsProcedure = new Number();
SAPB1.BPIntrastatExtension.prototype.PortOfEntryOrExit = new Number();
SAPB1.BPIntrastatExtension.prototype.DomesticOrForeignID = new String();
SAPB1.BPIntrastatExtension.prototype.IntrastatRelevant = new String();


SAPB1.BPIntrastatExtension.BoYesNoEnum = BoYesNoEnum

SAPB1.BPIntrastatExtension.create = function (rawObject) {
    var instance = new SAPB1.BPIntrastatExtension();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BPIntrastatExtension.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BPIntrastatExtension;
