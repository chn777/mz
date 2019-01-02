

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxWebSite = function () {
}
SAPB1.TaxWebSite.prototype = new SAPB1.EntityType();
SAPB1.TaxWebSite.prototype.constructor = SAPB1.TaxWebSite;
SAPB1.TaxWebSite.prototype.keys.push('AbsEntry');
SAPB1.TaxWebSite.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TaxWebSite.WebSiteName = { valueOf: function(){return 'WebSiteName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxWebSite.WebSiteURL = { valueOf: function(){return 'WebSiteURL';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxWebSite.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxWebSite.prototype.AbsEntry = new Number();
SAPB1.TaxWebSite.prototype.WebSiteName = new String();
SAPB1.TaxWebSite.prototype.WebSiteURL = new String();
SAPB1.TaxWebSite.prototype.Description = new String();



SAPB1.TaxWebSite.create = function (rawObject) {
    var instance = new SAPB1.TaxWebSite();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxWebSite.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxWebSite;
