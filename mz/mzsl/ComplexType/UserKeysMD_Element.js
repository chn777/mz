

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserKeysMD_Element = function () {
}
SAPB1.UserKeysMD_Element.prototype = new SAPB1.ComplexType();
SAPB1.UserKeysMD_Element.prototype.constructor = SAPB1.UserKeysMD_Element;
SAPB1.UserKeysMD_Element.SubKeyIndex = { valueOf: function(){return 'SubKeyIndex';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserKeysMD_Element.ColumnAlias = { valueOf: function(){return 'ColumnAlias';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserKeysMD_Element.prototype.SubKeyIndex = new Number();
SAPB1.UserKeysMD_Element.prototype.ColumnAlias = new String();



SAPB1.UserKeysMD_Element.create = function (rawObject) {
    var instance = new SAPB1.UserKeysMD_Element();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserKeysMD_Element.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserKeysMD_Element;
