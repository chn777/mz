
var ClosingOptionEnum = require('EnumType/ClosingOptionEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AssetDocumentParams = function () {
}
SAPB1.AssetDocumentParams.prototype = new SAPB1.ComplexType();
SAPB1.AssetDocumentParams.prototype.constructor = SAPB1.AssetDocumentParams;
SAPB1.AssetDocumentParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentParams.CancellationOption = { valueOf: function(){return 'CancellationOption';}, Type: 'ClosingOptionEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentParams.CancellationDate = { valueOf: function(){return 'CancellationDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AssetDocumentParams.prototype.Code = new Number();
SAPB1.AssetDocumentParams.prototype.CancellationOption = new String();
SAPB1.AssetDocumentParams.prototype.CancellationDate = new String();


SAPB1.AssetDocumentParams.ClosingOptionEnum = ClosingOptionEnum

SAPB1.AssetDocumentParams.create = function (rawObject) {
    var instance = new SAPB1.AssetDocumentParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AssetDocumentParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AssetDocumentParams;
