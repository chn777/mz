

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ProductionOrdersStage = function () {
}
SAPB1.ProductionOrdersStage.prototype = new SAPB1.ComplexType();
SAPB1.ProductionOrdersStage.prototype.constructor = SAPB1.ProductionOrdersStage;
SAPB1.ProductionOrdersStage.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ProductionOrdersStage.StageID = { valueOf: function(){return 'StageID';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ProductionOrdersStage.SequenceNumber = { valueOf: function(){return 'SequenceNumber';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrdersStage.StageEntry = { valueOf: function(){return 'StageEntry';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrdersStage.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrdersStage.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrdersStage.EndDate = { valueOf: function(){return 'EndDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrdersStage.RequiredDays = { valueOf: function(){return 'RequiredDays';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrdersStage.WaitingDays = { valueOf: function(){return 'WaitingDays';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrdersStage.CalculationProportion = { valueOf: function(){return 'CalculationProportion';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrdersStage.prototype.DocEntry = new Number();
SAPB1.ProductionOrdersStage.prototype.StageID = new Number();
SAPB1.ProductionOrdersStage.prototype.SequenceNumber = new Number();
SAPB1.ProductionOrdersStage.prototype.StageEntry = new Number();
SAPB1.ProductionOrdersStage.prototype.Name = new String();
SAPB1.ProductionOrdersStage.prototype.StartDate = new String();
SAPB1.ProductionOrdersStage.prototype.EndDate = new String();
SAPB1.ProductionOrdersStage.prototype.RequiredDays = new Number();
SAPB1.ProductionOrdersStage.prototype.WaitingDays = new Number();
SAPB1.ProductionOrdersStage.prototype.CalculationProportion = new Number();



SAPB1.ProductionOrdersStage.create = function (rawObject) {
    var instance = new SAPB1.ProductionOrdersStage();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ProductionOrdersStage.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ProductionOrdersStage;
