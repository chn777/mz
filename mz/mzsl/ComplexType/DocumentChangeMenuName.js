

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DocumentChangeMenuName = function () {
}
SAPB1.DocumentChangeMenuName.prototype = new SAPB1.ComplexType();
SAPB1.DocumentChangeMenuName.prototype.constructor = SAPB1.DocumentChangeMenuName;
SAPB1.DocumentChangeMenuName.Document = { valueOf: function(){return 'Document';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentChangeMenuName.DocumentSubType = { valueOf: function(){return 'DocumentSubType';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentChangeMenuName.ChangedMenuName = { valueOf: function(){return 'ChangedMenuName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DocumentChangeMenuName.prototype.Document = new String();
SAPB1.DocumentChangeMenuName.prototype.DocumentSubType = new String();
SAPB1.DocumentChangeMenuName.prototype.ChangedMenuName = new String();



SAPB1.DocumentChangeMenuName.create = function (rawObject) {
    var instance = new SAPB1.DocumentChangeMenuName();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DocumentChangeMenuName.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DocumentChangeMenuName;
