var POSTotalizer = require('ComplexType/POSTotalizer')
var POSTotalizerCollection = require('ComplexType/POSTotalizerCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.POSDailySummary = function () {
}
SAPB1.POSDailySummary.prototype = new SAPB1.EntityType();
SAPB1.POSDailySummary.prototype.constructor = SAPB1.POSDailySummary;
SAPB1.POSDailySummary.prototype.keys.push('AbsEntry');
SAPB1.POSDailySummary.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.POSDailySummary.Date = { valueOf: function(){return 'Date';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.POSDailySummary.EquipmentNo = { valueOf: function(){return 'EquipmentNo';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.POSDailySummary.CounterPosition = { valueOf: function(){return 'CounterPosition';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.POSDailySummary.ResetCounterPosition = { valueOf: function(){return 'ResetCounterPosition';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.POSDailySummary.OperationCounter = { valueOf: function(){return 'OperationCounter';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.POSDailySummary.Total = { valueOf: function(){return 'Total';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.POSDailySummary.GrossSales = { valueOf: function(){return 'GrossSales';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.POSDailySummary.PISTotal = { valueOf: function(){return 'PISTotal';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.POSDailySummary.COFINSTotal = { valueOf: function(){return 'COFINSTotal';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.POSDailySummary.POSTotalizerCollection = { valueOf: function(){return 'POSTotalizerCollection';}, Type: 'POSTotalizer', Index: 10, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.POSDailySummary.prototype.AbsEntry = new Number();
SAPB1.POSDailySummary.prototype.Date = new String();
SAPB1.POSDailySummary.prototype.EquipmentNo = new String();
SAPB1.POSDailySummary.prototype.CounterPosition = new Number();
SAPB1.POSDailySummary.prototype.ResetCounterPosition = new Number();
SAPB1.POSDailySummary.prototype.OperationCounter = new Number();
SAPB1.POSDailySummary.prototype.Total = new Number();
SAPB1.POSDailySummary.prototype.GrossSales = new Number();
SAPB1.POSDailySummary.prototype.PISTotal = new Number();
SAPB1.POSDailySummary.prototype.COFINSTotal = new Number();
SAPB1.POSDailySummary.prototype.POSTotalizerCollection = new POSTotalizerCollection();

SAPB1.POSDailySummary.POSTotalizer = POSTotalizer
SAPB1.POSDailySummary.POSTotalizerCollection = POSTotalizerCollection


SAPB1.POSDailySummary.create = function (rawObject) {
    var instance = new SAPB1.POSDailySummary();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.POSDailySummary.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.POSDailySummary;
