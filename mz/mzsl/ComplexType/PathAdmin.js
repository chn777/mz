

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PathAdmin = function () {
}
SAPB1.PathAdmin.prototype = new SAPB1.ComplexType();
SAPB1.PathAdmin.prototype.constructor = SAPB1.PathAdmin;
SAPB1.PathAdmin.WordTemplateFolderPath = { valueOf: function(){return 'WordTemplateFolderPath';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PathAdmin.PicturesFolderPath = { valueOf: function(){return 'PicturesFolderPath';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PathAdmin.AttachmentsFolderPath = { valueOf: function(){return 'AttachmentsFolderPath';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PathAdmin.ExtensionsFolderPath = { valueOf: function(){return 'ExtensionsFolderPath';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PathAdmin.PrintId = { valueOf: function(){return 'PrintId';}, Type: 'Edm.String', Index: 4, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PathAdmin.prototype.WordTemplateFolderPath = new String();
SAPB1.PathAdmin.prototype.PicturesFolderPath = new String();
SAPB1.PathAdmin.prototype.AttachmentsFolderPath = new String();
SAPB1.PathAdmin.prototype.ExtensionsFolderPath = new String();
SAPB1.PathAdmin.prototype.PrintId = new String();



SAPB1.PathAdmin.create = function (rawObject) {
    var instance = new SAPB1.PathAdmin();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PathAdmin.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PathAdmin;
