

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DocumentTypeParams = function () {
}
SAPB1.DocumentTypeParams.prototype = new SAPB1.ComplexType();
SAPB1.DocumentTypeParams.prototype.constructor = SAPB1.DocumentTypeParams;
SAPB1.DocumentTypeParams.Document = { valueOf: function(){return 'Document';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentTypeParams.DocumentSubType = { valueOf: function(){return 'DocumentSubType';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentTypeParams.prototype.Document = new String();
SAPB1.DocumentTypeParams.prototype.DocumentSubType = new String();



SAPB1.DocumentTypeParams.create = function (rawObject) {
    var instance = new SAPB1.DocumentTypeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DocumentTypeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DocumentTypeParams;
