

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CashFlowLineItemParams = function () {
}
SAPB1.CashFlowLineItemParams.prototype = new SAPB1.ComplexType();
SAPB1.CashFlowLineItemParams.prototype.constructor = SAPB1.CashFlowLineItemParams;
SAPB1.CashFlowLineItemParams.LineItemID = { valueOf: function(){return 'LineItemID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CashFlowLineItemParams.LineItemName = { valueOf: function(){return 'LineItemName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CashFlowLineItemParams.prototype.LineItemID = new Number();
SAPB1.CashFlowLineItemParams.prototype.LineItemName = new String();



SAPB1.CashFlowLineItemParams.create = function (rawObject) {
    var instance = new SAPB1.CashFlowLineItemParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CashFlowLineItemParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CashFlowLineItemParams;
