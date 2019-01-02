

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ApprovalTemplateParams = function () {
}
SAPB1.ApprovalTemplateParams.prototype = new SAPB1.ComplexType();
SAPB1.ApprovalTemplateParams.prototype.constructor = SAPB1.ApprovalTemplateParams;
SAPB1.ApprovalTemplateParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ApprovalTemplateParams.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ApprovalTemplateParams.prototype.Code = new Number();
SAPB1.ApprovalTemplateParams.prototype.Name = new String();



SAPB1.ApprovalTemplateParams.create = function (rawObject) {
    var instance = new SAPB1.ApprovalTemplateParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ApprovalTemplateParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ApprovalTemplateParams;
