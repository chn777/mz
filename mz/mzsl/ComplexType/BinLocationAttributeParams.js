

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BinLocationAttributeParams = function () {
}
SAPB1.BinLocationAttributeParams.prototype = new SAPB1.ComplexType();
SAPB1.BinLocationAttributeParams.prototype.constructor = SAPB1.BinLocationAttributeParams;
SAPB1.BinLocationAttributeParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocationAttributeParams.Attribute = { valueOf: function(){return 'Attribute';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocationAttributeParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BinLocationAttributeParams.prototype.AbsEntry = new Number();
SAPB1.BinLocationAttributeParams.prototype.Attribute = new Number();
SAPB1.BinLocationAttributeParams.prototype.Code = new String();



SAPB1.BinLocationAttributeParams.create = function (rawObject) {
    var instance = new SAPB1.BinLocationAttributeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BinLocationAttributeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BinLocationAttributeParams;
