

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserPermissionForm = function () {
}
SAPB1.UserPermissionForm.prototype = new SAPB1.ComplexType();
SAPB1.UserPermissionForm.prototype.constructor = SAPB1.UserPermissionForm;
SAPB1.UserPermissionForm.FormType = { valueOf: function(){return 'FormType';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserPermissionForm.DisplayOrder = { valueOf: function(){return 'DisplayOrder';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserPermissionForm.PermissionID = { valueOf: function(){return 'PermissionID';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserPermissionForm.prototype.FormType = new String();
SAPB1.UserPermissionForm.prototype.DisplayOrder = new Number();
SAPB1.UserPermissionForm.prototype.PermissionID = new String();



SAPB1.UserPermissionForm.create = function (rawObject) {
    var instance = new SAPB1.UserPermissionForm();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserPermissionForm.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserPermissionForm;
