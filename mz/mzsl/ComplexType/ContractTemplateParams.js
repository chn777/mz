

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ContractTemplateParams = function () {
}
SAPB1.ContractTemplateParams.prototype = new SAPB1.ComplexType();
SAPB1.ContractTemplateParams.prototype.constructor = SAPB1.ContractTemplateParams;
SAPB1.ContractTemplateParams.TemplateName = { valueOf: function(){return 'TemplateName';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ContractTemplateParams.prototype.TemplateName = new String();



SAPB1.ContractTemplateParams.create = function (rawObject) {
    var instance = new SAPB1.ContractTemplateParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ContractTemplateParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ContractTemplateParams;
