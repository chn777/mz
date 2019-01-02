

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemProject = function () {
}
SAPB1.ItemProject.prototype = new SAPB1.ComplexType();
SAPB1.ItemProject.prototype.constructor = SAPB1.ItemProject;
SAPB1.ItemProject.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ItemProject.ValidFrom = { valueOf: function(){return 'ValidFrom';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemProject.ValidTo = { valueOf: function(){return 'ValidTo';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemProject.Project = { valueOf: function(){return 'Project';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemProject.prototype.LineNumber = new Number();
SAPB1.ItemProject.prototype.ValidFrom = new String();
SAPB1.ItemProject.prototype.ValidTo = new String();
SAPB1.ItemProject.prototype.Project = new String();



SAPB1.ItemProject.create = function (rawObject) {
    var instance = new SAPB1.ItemProject();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemProject.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ItemProject;
