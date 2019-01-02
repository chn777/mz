
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CashFlowLineItem = function () {
}
SAPB1.CashFlowLineItem.prototype = new SAPB1.EntityType();
SAPB1.CashFlowLineItem.prototype.constructor = SAPB1.CashFlowLineItem;
SAPB1.CashFlowLineItem.prototype.keys.push('LineItemID');
SAPB1.CashFlowLineItem.LineItemID = { valueOf: function(){return 'LineItemID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CashFlowLineItem.LineItemName = { valueOf: function(){return 'LineItemName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CashFlowLineItem.ActiveLineItem = { valueOf: function(){return 'ActiveLineItem';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CashFlowLineItem.ParentArticle = { valueOf: function(){return 'ParentArticle';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CashFlowLineItem.Level = { valueOf: function(){return 'Level';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CashFlowLineItem.Drawer = { valueOf: function(){return 'Drawer';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CashFlowLineItem.prototype.LineItemID = new Number();
SAPB1.CashFlowLineItem.prototype.LineItemName = new String();
SAPB1.CashFlowLineItem.prototype.ActiveLineItem = new String();
SAPB1.CashFlowLineItem.prototype.ParentArticle = new Number();
SAPB1.CashFlowLineItem.prototype.Level = new Number();
SAPB1.CashFlowLineItem.prototype.Drawer = new Number();


SAPB1.CashFlowLineItem.BoYesNoEnum = BoYesNoEnum

SAPB1.CashFlowLineItem.create = function (rawObject) {
    var instance = new SAPB1.CashFlowLineItem();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CashFlowLineItem.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CashFlowLineItem;
