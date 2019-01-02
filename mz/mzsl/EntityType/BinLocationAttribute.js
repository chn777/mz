

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BinLocationAttribute = function () {
}
SAPB1.BinLocationAttribute.prototype = new SAPB1.EntityType();
SAPB1.BinLocationAttribute.prototype.constructor = SAPB1.BinLocationAttribute;
SAPB1.BinLocationAttribute.prototype.keys.push('AbsEntry');
SAPB1.BinLocationAttribute.Attribute = { valueOf: function(){return 'Attribute';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BinLocationAttribute.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BinLocationAttribute.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BinLocationAttribute.prototype.Attribute = new Number();
SAPB1.BinLocationAttribute.prototype.Code = new String();
SAPB1.BinLocationAttribute.prototype.AbsEntry = new Number();



SAPB1.BinLocationAttribute.create = function (rawObject) {
    var instance = new SAPB1.BinLocationAttribute();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BinLocationAttribute.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BinLocationAttribute;
