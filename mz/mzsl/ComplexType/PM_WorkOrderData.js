

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PM_WorkOrderData = function () {
}
SAPB1.PM_WorkOrderData.prototype = new SAPB1.ComplexType();
SAPB1.PM_WorkOrderData.prototype.constructor = SAPB1.PM_WorkOrderData;
SAPB1.PM_WorkOrderData.LineID = { valueOf: function(){return 'LineID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PM_WorkOrderData.StageID = { valueOf: function(){return 'StageID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_WorkOrderData.DocNumber = { valueOf: function(){return 'DocNumber';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_WorkOrderData.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_WorkOrderData.prototype.LineID = new Number();
SAPB1.PM_WorkOrderData.prototype.StageID = new Number();
SAPB1.PM_WorkOrderData.prototype.DocNumber = new Number();
SAPB1.PM_WorkOrderData.prototype.DocEntry = new Number();



SAPB1.PM_WorkOrderData.create = function (rawObject) {
    var instance = new SAPB1.PM_WorkOrderData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PM_WorkOrderData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PM_WorkOrderData;
