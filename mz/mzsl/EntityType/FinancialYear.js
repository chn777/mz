

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.FinancialYear = function () {
}
SAPB1.FinancialYear.prototype = new SAPB1.EntityType();
SAPB1.FinancialYear.prototype.constructor = SAPB1.FinancialYear;
SAPB1.FinancialYear.prototype.keys.push('AbsEntry');
SAPB1.FinancialYear.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.FinancialYear.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.FinancialYear.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancialYear.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancialYear.EndDate = { valueOf: function(){return 'EndDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancialYear.AssessYear = { valueOf: function(){return 'AssessYear';}, Type: 'Edm.String', Index: 5, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.FinancialYear.prototype.AbsEntry = new Number();
SAPB1.FinancialYear.prototype.Code = new String();
SAPB1.FinancialYear.prototype.Description = new String();
SAPB1.FinancialYear.prototype.StartDate = new String();
SAPB1.FinancialYear.prototype.EndDate = new String();
SAPB1.FinancialYear.prototype.AssessYear = new String();



SAPB1.FinancialYear.create = function (rawObject) {
    var instance = new SAPB1.FinancialYear();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.FinancialYear.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.FinancialYear;
