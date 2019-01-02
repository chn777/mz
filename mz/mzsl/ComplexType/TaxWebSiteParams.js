

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxWebSiteParams = function () {
}
SAPB1.TaxWebSiteParams.prototype = new SAPB1.ComplexType();
SAPB1.TaxWebSiteParams.prototype.constructor = SAPB1.TaxWebSiteParams;
SAPB1.TaxWebSiteParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxWebSiteParams.WebSiteName = { valueOf: function(){return 'WebSiteName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxWebSiteParams.prototype.AbsEntry = new Number();
SAPB1.TaxWebSiteParams.prototype.WebSiteName = new String();



SAPB1.TaxWebSiteParams.create = function (rawObject) {
    var instance = new SAPB1.TaxWebSiteParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxWebSiteParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxWebSiteParams;
