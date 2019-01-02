

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DocsInWTGroups = function () {
}
SAPB1.DocsInWTGroups.prototype = new SAPB1.ComplexType();
SAPB1.DocsInWTGroups.prototype.constructor = SAPB1.DocsInWTGroups;
SAPB1.DocsInWTGroups.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocsInWTGroups.DocObjType = { valueOf: function(){return 'DocObjType';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocsInWTGroups.VATAmount = { valueOf: function(){return 'VATAmount';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocsInWTGroups.DocTotal = { valueOf: function(){return 'DocTotal';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocsInWTGroups.BaseAmount = { valueOf: function(){return 'BaseAmount';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocsInWTGroups.AccumAmount = { valueOf: function(){return 'AccumAmount';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocsInWTGroups.PerceptAmount = { valueOf: function(){return 'PerceptAmount';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocsInWTGroups.Percent = { valueOf: function(){return 'Percent';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocsInWTGroups.prototype.DocEntry = new Number();
SAPB1.DocsInWTGroups.prototype.DocObjType = new String();
SAPB1.DocsInWTGroups.prototype.VATAmount = new Number();
SAPB1.DocsInWTGroups.prototype.DocTotal = new Number();
SAPB1.DocsInWTGroups.prototype.BaseAmount = new Number();
SAPB1.DocsInWTGroups.prototype.AccumAmount = new Number();
SAPB1.DocsInWTGroups.prototype.PerceptAmount = new Number();
SAPB1.DocsInWTGroups.prototype.Percent = new Number();



SAPB1.DocsInWTGroups.create = function (rawObject) {
    var instance = new SAPB1.DocsInWTGroups();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DocsInWTGroups.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DocsInWTGroups;
