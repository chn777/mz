
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Attachments2_Line = function () {
}
SAPB1.Attachments2_Line.prototype = new SAPB1.ComplexType();
SAPB1.Attachments2_Line.prototype.constructor = SAPB1.Attachments2_Line;
SAPB1.Attachments2_Line.SourcePath = { valueOf: function(){return 'SourcePath';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Attachments2_Line.FileName = { valueOf: function(){return 'FileName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Attachments2_Line.FileExtension = { valueOf: function(){return 'FileExtension';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Attachments2_Line.AttachmentDate = { valueOf: function(){return 'AttachmentDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Attachments2_Line.UserID = { valueOf: function(){return 'UserID';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Attachments2_Line.Override = { valueOf: function(){return 'Override';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Attachments2_Line.FreeText = { valueOf: function(){return 'FreeText';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Attachments2_Line.prototype.SourcePath = new String();
SAPB1.Attachments2_Line.prototype.FileName = new String();
SAPB1.Attachments2_Line.prototype.FileExtension = new String();
SAPB1.Attachments2_Line.prototype.AttachmentDate = new String();
SAPB1.Attachments2_Line.prototype.UserID = new String();
SAPB1.Attachments2_Line.prototype.Override = new String();
SAPB1.Attachments2_Line.prototype.FreeText = new String();


SAPB1.Attachments2_Line.BoYesNoEnum = BoYesNoEnum

SAPB1.Attachments2_Line.create = function (rawObject) {
    var instance = new SAPB1.Attachments2_Line();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Attachments2_Line.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Attachments2_Line;
