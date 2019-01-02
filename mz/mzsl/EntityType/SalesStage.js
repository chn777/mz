
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesStage = function () {
}
SAPB1.SalesStage.prototype = new SAPB1.EntityType();
SAPB1.SalesStage.prototype.constructor = SAPB1.SalesStage;
SAPB1.SalesStage.prototype.keys.push('SequenceNo');
SAPB1.SalesStage.SequenceNo = { valueOf: function(){return 'SequenceNo';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesStage.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesStage.Stageno = { valueOf: function(){return 'Stageno';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesStage.ClosingPercentage = { valueOf: function(){return 'ClosingPercentage';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesStage.Cancelled = { valueOf: function(){return 'Cancelled';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesStage.IsSales = { valueOf: function(){return 'IsSales';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesStage.IsPurchasing = { valueOf: function(){return 'IsPurchasing';}, Type: 'BoYesNoEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesStage.prototype.SequenceNo = new Number();
SAPB1.SalesStage.prototype.Name = new String();
SAPB1.SalesStage.prototype.Stageno = new Number();
SAPB1.SalesStage.prototype.ClosingPercentage = new Number();
SAPB1.SalesStage.prototype.Cancelled = new String();
SAPB1.SalesStage.prototype.IsSales = new String();
SAPB1.SalesStage.prototype.IsPurchasing = new String();


SAPB1.SalesStage.BoYesNoEnum = BoYesNoEnum

SAPB1.SalesStage.create = function (rawObject) {
    var instance = new SAPB1.SalesStage();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesStage.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesStage;
