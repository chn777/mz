

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BOEDocumentTypeParams = function () {
}
SAPB1.BOEDocumentTypeParams.prototype = new SAPB1.ComplexType();
SAPB1.BOEDocumentTypeParams.prototype.constructor = SAPB1.BOEDocumentTypeParams;
SAPB1.BOEDocumentTypeParams.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BOEDocumentTypeParams.DocType = { valueOf: function(){return 'DocType';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BOEDocumentTypeParams.prototype.DocEntry = new Number();
SAPB1.BOEDocumentTypeParams.prototype.DocType = new String();



SAPB1.BOEDocumentTypeParams.create = function (rawObject) {
    var instance = new SAPB1.BOEDocumentTypeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BOEDocumentTypeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BOEDocumentTypeParams;
