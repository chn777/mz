

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BrazilBeverageIndexer = function () {
}
SAPB1.BrazilBeverageIndexer.prototype = new SAPB1.EntityType();
SAPB1.BrazilBeverageIndexer.prototype.constructor = SAPB1.BrazilBeverageIndexer;
SAPB1.BrazilBeverageIndexer.prototype.keys.push('BeverageID');
SAPB1.BrazilBeverageIndexer.BeverageGroupCode = { valueOf: function(){return 'BeverageGroupCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BrazilBeverageIndexer.BeverageTableCode = { valueOf: function(){return 'BeverageTableCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BrazilBeverageIndexer.BeverageCommercialBrandCode = { valueOf: function(){return 'BeverageCommercialBrandCode';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BrazilBeverageIndexer.BeverageID = { valueOf: function(){return 'BeverageID';}, Type: 'Edm.Int32', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BrazilBeverageIndexer.prototype.BeverageGroupCode = new String();
SAPB1.BrazilBeverageIndexer.prototype.BeverageTableCode = new String();
SAPB1.BrazilBeverageIndexer.prototype.BeverageCommercialBrandCode = new Number();
SAPB1.BrazilBeverageIndexer.prototype.BeverageID = new Number();



SAPB1.BrazilBeverageIndexer.create = function (rawObject) {
    var instance = new SAPB1.BrazilBeverageIndexer();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BrazilBeverageIndexer.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BrazilBeverageIndexer;
