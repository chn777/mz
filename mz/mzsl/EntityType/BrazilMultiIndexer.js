
var BrazilMultiIndexerTypes = require('EnumType/BrazilMultiIndexerTypes')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BrazilMultiIndexer = function () {
}
SAPB1.BrazilMultiIndexer.prototype = new SAPB1.EntityType();
SAPB1.BrazilMultiIndexer.prototype.constructor = SAPB1.BrazilMultiIndexer;
SAPB1.BrazilMultiIndexer.prototype.keys.push('ID');
SAPB1.BrazilMultiIndexer.ID = { valueOf: function(){return 'ID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BrazilMultiIndexer.IndexerType = { valueOf: function(){return 'IndexerType';}, Type: 'BrazilMultiIndexerTypes', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BrazilMultiIndexer.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BrazilMultiIndexer.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BrazilMultiIndexer.FirstRefIndexerCode = { valueOf: function(){return 'FirstRefIndexerCode';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BrazilMultiIndexer.SecondRefIndexerCode = { valueOf: function(){return 'SecondRefIndexerCode';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BrazilMultiIndexer.ThirdRefIndexerCode = { valueOf: function(){return 'ThirdRefIndexerCode';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BrazilMultiIndexer.prototype.ID = new Number();
SAPB1.BrazilMultiIndexer.prototype.IndexerType = new String();
SAPB1.BrazilMultiIndexer.prototype.Code = new String();
SAPB1.BrazilMultiIndexer.prototype.Description = new String();
SAPB1.BrazilMultiIndexer.prototype.FirstRefIndexerCode = new String();
SAPB1.BrazilMultiIndexer.prototype.SecondRefIndexerCode = new String();
SAPB1.BrazilMultiIndexer.prototype.ThirdRefIndexerCode = new String();


SAPB1.BrazilMultiIndexer.BrazilMultiIndexerTypes = BrazilMultiIndexerTypes

SAPB1.BrazilMultiIndexer.create = function (rawObject) {
    var instance = new SAPB1.BrazilMultiIndexer();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BrazilMultiIndexer.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BrazilMultiIndexer;
