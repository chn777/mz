

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ExpenseTypeParams = function () {
}
SAPB1.ExpenseTypeParams.prototype = new SAPB1.ComplexType();
SAPB1.ExpenseTypeParams.prototype.constructor = SAPB1.ExpenseTypeParams;
SAPB1.ExpenseTypeParams.ExpenseType = { valueOf: function(){return 'ExpenseType';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExpenseTypeParams.prototype.ExpenseType = new String();



SAPB1.ExpenseTypeParams.create = function (rawObject) {
    var instance = new SAPB1.ExpenseTypeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ExpenseTypeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ExpenseTypeParams;
