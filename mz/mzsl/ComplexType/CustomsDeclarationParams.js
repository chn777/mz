

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CustomsDeclarationParams = function () {
}
SAPB1.CustomsDeclarationParams.prototype = new SAPB1.ComplexType();
SAPB1.CustomsDeclarationParams.prototype.constructor = SAPB1.CustomsDeclarationParams;
SAPB1.CustomsDeclarationParams.CCDNum = { valueOf: function(){return 'CCDNum';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CustomsDeclarationParams.prototype.CCDNum = new String();



SAPB1.CustomsDeclarationParams.create = function (rawObject) {
    var instance = new SAPB1.CustomsDeclarationParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CustomsDeclarationParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CustomsDeclarationParams;
