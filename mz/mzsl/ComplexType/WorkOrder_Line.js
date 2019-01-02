

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WorkOrder_Line = function () {
}
SAPB1.WorkOrder_Line.prototype = new SAPB1.ComplexType();
SAPB1.WorkOrder_Line.prototype.constructor = SAPB1.WorkOrder_Line;
SAPB1.WorkOrder_Line.RowNumber = { valueOf: function(){return 'RowNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WorkOrder_Line.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder_Line.ItemDescription = { valueOf: function(){return 'ItemDescription';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder_Line.ItemQuantity = { valueOf: function(){return 'ItemQuantity';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder_Line.ItemPrice = { valueOf: function(){return 'ItemPrice';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder_Line.PriceCurrency = { valueOf: function(){return 'PriceCurrency';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder_Line.ItemWarehouse = { valueOf: function(){return 'ItemWarehouse';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder_Line.ActiveAccountCode = { valueOf: function(){return 'ActiveAccountCode';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder_Line.WorkSum = { valueOf: function(){return 'WorkSum';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder_Line.prototype.RowNumber = new Number();
SAPB1.WorkOrder_Line.prototype.ItemCode = new String();
SAPB1.WorkOrder_Line.prototype.ItemDescription = new String();
SAPB1.WorkOrder_Line.prototype.ItemQuantity = new Number();
SAPB1.WorkOrder_Line.prototype.ItemPrice = new Number();
SAPB1.WorkOrder_Line.prototype.PriceCurrency = new String();
SAPB1.WorkOrder_Line.prototype.ItemWarehouse = new String();
SAPB1.WorkOrder_Line.prototype.ActiveAccountCode = new String();
SAPB1.WorkOrder_Line.prototype.WorkSum = new Number();



SAPB1.WorkOrder_Line.create = function (rawObject) {
    var instance = new SAPB1.WorkOrder_Line();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WorkOrder_Line.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WorkOrder_Line;
