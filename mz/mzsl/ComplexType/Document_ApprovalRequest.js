

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Document_ApprovalRequest = function () {
}
SAPB1.Document_ApprovalRequest.prototype = new SAPB1.ComplexType();
SAPB1.Document_ApprovalRequest.prototype.constructor = SAPB1.Document_ApprovalRequest;
SAPB1.Document_ApprovalRequest.ApprovalTemplatesID = { valueOf: function(){return 'ApprovalTemplatesID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Document_ApprovalRequest.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Document_ApprovalRequest.prototype.ApprovalTemplatesID = new Number();
SAPB1.Document_ApprovalRequest.prototype.Remarks = new String();



SAPB1.Document_ApprovalRequest.create = function (rawObject) {
    var instance = new SAPB1.Document_ApprovalRequest();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Document_ApprovalRequest.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Document_ApprovalRequest;
