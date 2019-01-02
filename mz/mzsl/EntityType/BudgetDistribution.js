

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BudgetDistribution = function () {
}
SAPB1.BudgetDistribution.prototype = new SAPB1.EntityType();
SAPB1.BudgetDistribution.prototype.constructor = SAPB1.BudgetDistribution;
SAPB1.BudgetDistribution.prototype.keys.push('DivisionCode');
SAPB1.BudgetDistribution.September = { valueOf: function(){return 'September';}, Type: 'Edm.Double', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetDistribution.August = { valueOf: function(){return 'August';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetDistribution.July = { valueOf: function(){return 'July';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetDistribution.June = { valueOf: function(){return 'June';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetDistribution.May = { valueOf: function(){return 'May';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetDistribution.April = { valueOf: function(){return 'April';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetDistribution.March = { valueOf: function(){return 'March';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetDistribution.February = { valueOf: function(){return 'February';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetDistribution.December = { valueOf: function(){return 'December';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetDistribution.November = { valueOf: function(){return 'November';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetDistribution.October = { valueOf: function(){return 'October';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetDistribution.January = { valueOf: function(){return 'January';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetDistribution.BudgetAmount = { valueOf: function(){return 'BudgetAmount';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BudgetDistribution.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 13, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BudgetDistribution.DivisionCode = { valueOf: function(){return 'DivisionCode';}, Type: 'Edm.Int32', Index: 14, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BudgetDistribution.prototype.September = new Number();
SAPB1.BudgetDistribution.prototype.August = new Number();
SAPB1.BudgetDistribution.prototype.July = new Number();
SAPB1.BudgetDistribution.prototype.June = new Number();
SAPB1.BudgetDistribution.prototype.May = new Number();
SAPB1.BudgetDistribution.prototype.April = new Number();
SAPB1.BudgetDistribution.prototype.March = new Number();
SAPB1.BudgetDistribution.prototype.February = new Number();
SAPB1.BudgetDistribution.prototype.December = new Number();
SAPB1.BudgetDistribution.prototype.November = new Number();
SAPB1.BudgetDistribution.prototype.October = new Number();
SAPB1.BudgetDistribution.prototype.January = new Number();
SAPB1.BudgetDistribution.prototype.BudgetAmount = new Number();
SAPB1.BudgetDistribution.prototype.Description = new String();
SAPB1.BudgetDistribution.prototype.DivisionCode = new Number();



SAPB1.BudgetDistribution.create = function (rawObject) {
    var instance = new SAPB1.BudgetDistribution();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BudgetDistribution.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BudgetDistribution;
