
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesPerson = function () {
}
SAPB1.SalesPerson.prototype = new SAPB1.EntityType();
SAPB1.SalesPerson.prototype.constructor = SAPB1.SalesPerson;
SAPB1.SalesPerson.prototype.keys.push('SalesEmployeeCode');
SAPB1.SalesPerson.SalesEmployeeCode = { valueOf: function(){return 'SalesEmployeeCode';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesPerson.SalesEmployeeName = { valueOf: function(){return 'SalesEmployeeName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.SalesPerson.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesPerson.CommissionForSalesEmployee = { valueOf: function(){return 'CommissionForSalesEmployee';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesPerson.CommissionGroup = { valueOf: function(){return 'CommissionGroup';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesPerson.Locked = { valueOf: function(){return 'Locked';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesPerson.EmployeeID = { valueOf: function(){return 'EmployeeID';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesPerson.Active = { valueOf: function(){return 'Active';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesPerson.prototype.SalesEmployeeCode = new Number();
SAPB1.SalesPerson.prototype.SalesEmployeeName = new String();
SAPB1.SalesPerson.prototype.Remarks = new String();
SAPB1.SalesPerson.prototype.CommissionForSalesEmployee = new Number();
SAPB1.SalesPerson.prototype.CommissionGroup = new Number();
SAPB1.SalesPerson.prototype.Locked = new String();
SAPB1.SalesPerson.prototype.EmployeeID = new Number();
SAPB1.SalesPerson.prototype.Active = new String();


SAPB1.SalesPerson.BoYesNoEnum = BoYesNoEnum

SAPB1.SalesPerson.create = function (rawObject) {
    var instance = new SAPB1.SalesPerson();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesPerson.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesPerson;
