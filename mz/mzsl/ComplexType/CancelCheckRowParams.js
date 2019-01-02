

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CancelCheckRowParams = function () {
}
SAPB1.CancelCheckRowParams.prototype = new SAPB1.ComplexType();
SAPB1.CancelCheckRowParams.prototype.constructor = SAPB1.CancelCheckRowParams;
SAPB1.CancelCheckRowParams.DepositID = { valueOf: function(){return 'DepositID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CancelCheckRowParams.CheckID = { valueOf: function(){return 'CheckID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CancelCheckRowParams.prototype.DepositID = new Number();
SAPB1.CancelCheckRowParams.prototype.CheckID = new Number();



SAPB1.CancelCheckRowParams.create = function (rawObject) {
    var instance = new SAPB1.CancelCheckRowParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CancelCheckRowParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CancelCheckRowParams;
