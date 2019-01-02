

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BlanketAgreementParams = function () {
}
SAPB1.BlanketAgreementParams.prototype = new SAPB1.ComplexType();
SAPB1.BlanketAgreementParams.prototype.constructor = SAPB1.BlanketAgreementParams;
SAPB1.BlanketAgreementParams.AgreementNo = { valueOf: function(){return 'AgreementNo';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreementParams.prototype.AgreementNo = new Number();



SAPB1.BlanketAgreementParams.create = function (rawObject) {
    var instance = new SAPB1.BlanketAgreementParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BlanketAgreementParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BlanketAgreementParams;
