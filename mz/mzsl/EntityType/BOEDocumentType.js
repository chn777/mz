

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BOEDocumentType = function () {
}
SAPB1.BOEDocumentType.prototype = new SAPB1.EntityType();
SAPB1.BOEDocumentType.prototype.constructor = SAPB1.BOEDocumentType;
SAPB1.BOEDocumentType.prototype.keys.push('DocEntry');
SAPB1.BOEDocumentType.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BOEDocumentType.DocType = { valueOf: function(){return 'DocType';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BOEDocumentType.DocDescription = { valueOf: function(){return 'DocDescription';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BOEDocumentType.prototype.DocEntry = new Number();
SAPB1.BOEDocumentType.prototype.DocType = new String();
SAPB1.BOEDocumentType.prototype.DocDescription = new String();



SAPB1.BOEDocumentType.create = function (rawObject) {
    var instance = new SAPB1.BOEDocumentType();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BOEDocumentType.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BOEDocumentType;
