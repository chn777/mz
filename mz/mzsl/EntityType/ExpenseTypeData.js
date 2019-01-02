
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ExpenseTypeData = function () {
}
SAPB1.ExpenseTypeData.prototype = new SAPB1.EntityType();
SAPB1.ExpenseTypeData.prototype.constructor = SAPB1.ExpenseTypeData;
SAPB1.ExpenseTypeData.prototype.keys.push('ExpenseType');
SAPB1.ExpenseTypeData.ExpenseType = { valueOf: function(){return 'ExpenseType';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ExpenseTypeData.ExpenseName = { valueOf: function(){return 'ExpenseName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExpenseTypeData.ExpenseAccount = { valueOf: function(){return 'ExpenseAccount';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExpenseTypeData.PaidByCompany = { valueOf: function(){return 'PaidByCompany';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExpenseTypeData.VatGroup = { valueOf: function(){return 'VatGroup';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExpenseTypeData.prototype.ExpenseType = new String();
SAPB1.ExpenseTypeData.prototype.ExpenseName = new String();
SAPB1.ExpenseTypeData.prototype.ExpenseAccount = new String();
SAPB1.ExpenseTypeData.prototype.PaidByCompany = new String();
SAPB1.ExpenseTypeData.prototype.VatGroup = new String();


SAPB1.ExpenseTypeData.BoYesNoEnum = BoYesNoEnum

SAPB1.ExpenseTypeData.create = function (rawObject) {
    var instance = new SAPB1.ExpenseTypeData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ExpenseTypeData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ExpenseTypeData;
