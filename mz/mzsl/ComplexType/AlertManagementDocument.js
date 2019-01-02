
var AlertManagementDocumentEnum = require('EnumType/AlertManagementDocumentEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AlertManagementDocument = function () {
}
SAPB1.AlertManagementDocument.prototype = new SAPB1.ComplexType();
SAPB1.AlertManagementDocument.prototype.constructor = SAPB1.AlertManagementDocument;
SAPB1.AlertManagementDocument.Document = { valueOf: function(){return 'Document';}, Type: 'AlertManagementDocumentEnum', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagementDocument.Active = { valueOf: function(){return 'Active';}, Type: 'BoYesNoEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AlertManagementDocument.prototype.Document = new String();
SAPB1.AlertManagementDocument.prototype.Active = new String();


SAPB1.AlertManagementDocument.AlertManagementDocumentEnum = AlertManagementDocumentEnum
SAPB1.AlertManagementDocument.BoYesNoEnum = BoYesNoEnum

SAPB1.AlertManagementDocument.create = function (rawObject) {
    var instance = new SAPB1.AlertManagementDocument();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AlertManagementDocument.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AlertManagementDocument;
