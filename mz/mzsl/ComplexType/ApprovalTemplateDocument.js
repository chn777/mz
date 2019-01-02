
var ApprovalTemplatesDocumentTypeEnum = require('EnumType/ApprovalTemplatesDocumentTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ApprovalTemplateDocument = function () {
}
SAPB1.ApprovalTemplateDocument.prototype = new SAPB1.ComplexType();
SAPB1.ApprovalTemplateDocument.prototype.constructor = SAPB1.ApprovalTemplateDocument;
SAPB1.ApprovalTemplateDocument.DocumentType = { valueOf: function(){return 'DocumentType';}, Type: 'ApprovalTemplatesDocumentTypeEnum', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalTemplateDocument.prototype.DocumentType = new String();


SAPB1.ApprovalTemplateDocument.ApprovalTemplatesDocumentTypeEnum = ApprovalTemplatesDocumentTypeEnum

SAPB1.ApprovalTemplateDocument.create = function (rawObject) {
    var instance = new SAPB1.ApprovalTemplateDocument();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ApprovalTemplateDocument.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ApprovalTemplateDocument;
