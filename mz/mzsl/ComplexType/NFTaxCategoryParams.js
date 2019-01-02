

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.NFTaxCategoryParams = function () {
}
SAPB1.NFTaxCategoryParams.prototype = new SAPB1.ComplexType();
SAPB1.NFTaxCategoryParams.prototype.constructor = SAPB1.NFTaxCategoryParams;
SAPB1.NFTaxCategoryParams.AbsId = { valueOf: function(){return 'AbsId';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.NFTaxCategoryParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.NFTaxCategoryParams.prototype.AbsId = new Number();
SAPB1.NFTaxCategoryParams.prototype.Code = new String();



SAPB1.NFTaxCategoryParams.create = function (rawObject) {
    var instance = new SAPB1.NFTaxCategoryParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.NFTaxCategoryParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.NFTaxCategoryParams;
