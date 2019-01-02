
var PaymentMeansTypeEnum = require('EnumType/PaymentMeansTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CashFlowAssignment = function () {
}
SAPB1.CashFlowAssignment.prototype = new SAPB1.ComplexType();
SAPB1.CashFlowAssignment.prototype.constructor = SAPB1.CashFlowAssignment;
SAPB1.CashFlowAssignment.CashFlowAssignmentsID = { valueOf: function(){return 'CashFlowAssignmentsID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CashFlowAssignment.CashFlowLineItemID = { valueOf: function(){return 'CashFlowLineItemID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CashFlowAssignment.Credit = { valueOf: function(){return 'Credit';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CashFlowAssignment.PaymentMeans = { valueOf: function(){return 'PaymentMeans';}, Type: 'PaymentMeansTypeEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CashFlowAssignment.CheckNumber = { valueOf: function(){return 'CheckNumber';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CashFlowAssignment.AmountLC = { valueOf: function(){return 'AmountLC';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CashFlowAssignment.AmountFC = { valueOf: function(){return 'AmountFC';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CashFlowAssignment.JDTLineId = { valueOf: function(){return 'JDTLineId';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CashFlowAssignment.prototype.CashFlowAssignmentsID = new Number();
SAPB1.CashFlowAssignment.prototype.CashFlowLineItemID = new Number();
SAPB1.CashFlowAssignment.prototype.Credit = new Number();
SAPB1.CashFlowAssignment.prototype.PaymentMeans = new String();
SAPB1.CashFlowAssignment.prototype.CheckNumber = new String();
SAPB1.CashFlowAssignment.prototype.AmountLC = new Number();
SAPB1.CashFlowAssignment.prototype.AmountFC = new Number();
SAPB1.CashFlowAssignment.prototype.JDTLineId = new Number();


SAPB1.CashFlowAssignment.PaymentMeansTypeEnum = PaymentMeansTypeEnum

SAPB1.CashFlowAssignment.create = function (rawObject) {
    var instance = new SAPB1.CashFlowAssignment();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CashFlowAssignment.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CashFlowAssignment;
