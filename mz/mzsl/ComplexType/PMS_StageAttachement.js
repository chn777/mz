

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PMS_StageAttachement = function () {
}
SAPB1.PMS_StageAttachement.prototype = new SAPB1.ComplexType();
SAPB1.PMS_StageAttachement.prototype.constructor = SAPB1.PMS_StageAttachement;
SAPB1.PMS_StageAttachement.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PMS_StageAttachement.LineID = { valueOf: function(){return 'LineID';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PMS_StageAttachement.SourcePath = { valueOf: function(){return 'SourcePath';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageAttachement.FileName = { valueOf: function(){return 'FileName';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageAttachement.FileExtension = { valueOf: function(){return 'FileExtension';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageAttachement.AttachementDate = { valueOf: function(){return 'AttachementDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMS_StageAttachement.prototype.AbsEntry = new Number();
SAPB1.PMS_StageAttachement.prototype.LineID = new Number();
SAPB1.PMS_StageAttachement.prototype.SourcePath = new String();
SAPB1.PMS_StageAttachement.prototype.FileName = new String();
SAPB1.PMS_StageAttachement.prototype.FileExtension = new String();
SAPB1.PMS_StageAttachement.prototype.AttachementDate = new String();



SAPB1.PMS_StageAttachement.create = function (rawObject) {
    var instance = new SAPB1.PMS_StageAttachement();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PMS_StageAttachement.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PMS_StageAttachement;
