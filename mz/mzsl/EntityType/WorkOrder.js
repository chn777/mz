var WorkOrder_Line = require('ComplexType/WorkOrder_Line')
var WorkOrder_LineCollection = require('ComplexType/WorkOrder_LineCollection')

var BoWorkOrderStat = require('EnumType/BoWorkOrderStat')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WorkOrder = function () {
}
SAPB1.WorkOrder.prototype = new SAPB1.EntityType();
SAPB1.WorkOrder.prototype.constructor = SAPB1.WorkOrder;
SAPB1.WorkOrder.prototype.keys.push('OrderNum');
SAPB1.WorkOrder.Status = { valueOf: function(){return 'Status';}, Type: 'BoWorkOrderStat', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.Canceled = { valueOf: function(){return 'Canceled';}, Type: 'BoYesNoEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.OrderDate = { valueOf: function(){return 'OrderDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.WorkStartDate = { valueOf: function(){return 'WorkStartDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.ExpectedCompletionDate = { valueOf: function(){return 'ExpectedCompletionDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.WorkFinishDate = { valueOf: function(){return 'WorkFinishDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.ReceiverName = { valueOf: function(){return 'ReceiverName';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.OrdererCode = { valueOf: function(){return 'OrdererCode';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.OrdererName = { valueOf: function(){return 'OrdererName';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.CustomerRefNo = { valueOf: function(){return 'CustomerRefNo';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.OrderTotal = { valueOf: function(){return 'OrderTotal';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.TotalCurrency = { valueOf: function(){return 'TotalCurrency';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.GenerationTime = { valueOf: function(){return 'GenerationTime';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.Comment = { valueOf: function(){return 'Comment';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.InstructionNumber = { valueOf: function(){return 'InstructionNumber';}, Type: 'Edm.Int32', Index: 14, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.ContactPerson = { valueOf: function(){return 'ContactPerson';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.ActiveAccountCode = { valueOf: function(){return 'ActiveAccountCode';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.WorkSum = { valueOf: function(){return 'WorkSum';}, Type: 'Edm.Double', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.JournalRemarks = { valueOf: function(){return 'JournalRemarks';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.PriceListNum = { valueOf: function(){return 'PriceListNum';}, Type: 'Edm.Int32', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.FinancialPeriod = { valueOf: function(){return 'FinancialPeriod';}, Type: 'Edm.Int32', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.OrderNum = { valueOf: function(){return 'OrderNum';}, Type: 'Edm.Int32', Index: 22, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WorkOrder.WorkOrder_Lines = { valueOf: function(){return 'WorkOrder_Lines';}, Type: 'WorkOrder_Line', Index: 23, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.WorkOrder.prototype.Status = new String();
SAPB1.WorkOrder.prototype.Canceled = new String();
SAPB1.WorkOrder.prototype.OrderDate = new String();
SAPB1.WorkOrder.prototype.WorkStartDate = new String();
SAPB1.WorkOrder.prototype.ExpectedCompletionDate = new String();
SAPB1.WorkOrder.prototype.WorkFinishDate = new String();
SAPB1.WorkOrder.prototype.ReceiverName = new String();
SAPB1.WorkOrder.prototype.OrdererCode = new String();
SAPB1.WorkOrder.prototype.OrdererName = new String();
SAPB1.WorkOrder.prototype.CustomerRefNo = new String();
SAPB1.WorkOrder.prototype.OrderTotal = new Number();
SAPB1.WorkOrder.prototype.TotalCurrency = new String();
SAPB1.WorkOrder.prototype.GenerationTime = new Number();
SAPB1.WorkOrder.prototype.Comment = new String();
SAPB1.WorkOrder.prototype.InstructionNumber = new Number();
SAPB1.WorkOrder.prototype.ContactPerson = new Number();
SAPB1.WorkOrder.prototype.Series = new Number();
SAPB1.WorkOrder.prototype.ActiveAccountCode = new String();
SAPB1.WorkOrder.prototype.WorkSum = new Number();
SAPB1.WorkOrder.prototype.JournalRemarks = new String();
SAPB1.WorkOrder.prototype.PriceListNum = new Number();
SAPB1.WorkOrder.prototype.FinancialPeriod = new Number();
SAPB1.WorkOrder.prototype.OrderNum = new Number();
SAPB1.WorkOrder.prototype.WorkOrder_Lines = new WorkOrder_LineCollection();

SAPB1.WorkOrder.WorkOrder_Line = WorkOrder_Line
SAPB1.WorkOrder.WorkOrder_LineCollection = WorkOrder_LineCollection

SAPB1.WorkOrder.BoWorkOrderStat = BoWorkOrderStat
SAPB1.WorkOrder.BoYesNoEnum = BoYesNoEnum

SAPB1.WorkOrder.create = function (rawObject) {
    var instance = new SAPB1.WorkOrder();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WorkOrder.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WorkOrder;
