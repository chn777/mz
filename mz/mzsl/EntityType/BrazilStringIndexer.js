
var BrazilStringIndexerTypes = require('EnumType/BrazilStringIndexerTypes')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BrazilStringIndexer = function () {
}
SAPB1.BrazilStringIndexer.prototype = new SAPB1.EntityType();
SAPB1.BrazilStringIndexer.prototype.constructor = SAPB1.BrazilStringIndexer;
SAPB1.BrazilStringIndexer.prototype.keys.push('ID');
SAPB1.BrazilStringIndexer.IndexerType = { valueOf: function(){return 'IndexerType';}, Type: 'BrazilStringIndexerTypes', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BrazilStringIndexer.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BrazilStringIndexer.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BrazilStringIndexer.ID = { valueOf: function(){return 'ID';}, Type: 'Edm.Int32', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BrazilStringIndexer.prototype.IndexerType = new String();
SAPB1.BrazilStringIndexer.prototype.Code = new String();
SAPB1.BrazilStringIndexer.prototype.Description = new String();
SAPB1.BrazilStringIndexer.prototype.ID = new Number();


SAPB1.BrazilStringIndexer.BrazilStringIndexerTypes = BrazilStringIndexerTypes

SAPB1.BrazilStringIndexer.create = function (rawObject) {
    var instance = new SAPB1.BrazilStringIndexer();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BrazilStringIndexer.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BrazilStringIndexer;
