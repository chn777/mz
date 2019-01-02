

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BillOfExchangeTransBankPage = function () {
}
SAPB1.BillOfExchangeTransBankPage.prototype = new SAPB1.ComplexType();
SAPB1.BillOfExchangeTransBankPage.prototype.constructor = SAPB1.BillOfExchangeTransBankPage;
SAPB1.BillOfExchangeTransBankPage.AccountCode = { valueOf: function(){return 'AccountCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransBankPage.Sequence = { valueOf: function(){return 'Sequence';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchangeTransBankPage.prototype.AccountCode = new String();
SAPB1.BillOfExchangeTransBankPage.prototype.Sequence = new Number();



SAPB1.BillOfExchangeTransBankPage.create = function (rawObject) {
    var instance = new SAPB1.BillOfExchangeTransBankPage();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BillOfExchangeTransBankPage.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BillOfExchangeTransBankPage;
