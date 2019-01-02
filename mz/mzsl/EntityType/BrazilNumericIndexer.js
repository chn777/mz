
var BrazilNumericIndexerTypes = require('EnumType/BrazilNumericIndexerTypes')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BrazilNumericIndexer = function () {
}
SAPB1.BrazilNumericIndexer.prototype = new SAPB1.EntityType();
SAPB1.BrazilNumericIndexer.prototype.constructor = SAPB1.BrazilNumericIndexer;
SAPB1.BrazilNumericIndexer.prototype.keys.push('ID');
SAPB1.BrazilNumericIndexer.IndexerType = { valueOf: function(){return 'IndexerType';}, Type: 'BrazilNumericIndexerTypes', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BrazilNumericIndexer.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BrazilNumericIndexer.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BrazilNumericIndexer.ID = { valueOf: function(){return 'ID';}, Type: 'Edm.Int32', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BrazilNumericIndexer.prototype.IndexerType = new String();
SAPB1.BrazilNumericIndexer.prototype.Code = new Number();
SAPB1.BrazilNumericIndexer.prototype.Description = new String();
SAPB1.BrazilNumericIndexer.prototype.ID = new Number();


SAPB1.BrazilNumericIndexer.BrazilNumericIndexerTypes = BrazilNumericIndexerTypes

SAPB1.BrazilNumericIndexer.create = function (rawObject) {
    var instance = new SAPB1.BrazilNumericIndexer();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BrazilNumericIndexer.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BrazilNumericIndexer;
