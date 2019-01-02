

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ProductionOrdersSalesOrderLine = function () {
}
SAPB1.ProductionOrdersSalesOrderLine.prototype = new SAPB1.ComplexType();
SAPB1.ProductionOrdersSalesOrderLine.prototype.constructor = SAPB1.ProductionOrdersSalesOrderLine;
SAPB1.ProductionOrdersSalesOrderLine.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ProductionOrdersSalesOrderLine.BaseNumber = { valueOf: function(){return 'BaseNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProductionOrdersSalesOrderLine.BaseAbsEntry = { valueOf: function(){return 'BaseAbsEntry';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ProductionOrdersSalesOrderLine.BaseLine = { valueOf: function(){return 'BaseLine';}, Type: 'Edm.Int32', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ProductionOrdersSalesOrderLine.prototype.DocEntry = new Number();
SAPB1.ProductionOrdersSalesOrderLine.prototype.BaseNumber = new Number();
SAPB1.ProductionOrdersSalesOrderLine.prototype.BaseAbsEntry = new Number();
SAPB1.ProductionOrdersSalesOrderLine.prototype.BaseLine = new Number();



SAPB1.ProductionOrdersSalesOrderLine.create = function (rawObject) {
    var instance = new SAPB1.ProductionOrdersSalesOrderLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ProductionOrdersSalesOrderLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ProductionOrdersSalesOrderLine;
