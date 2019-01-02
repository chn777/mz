

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BOEPortfolio = function () {
}
SAPB1.BOEPortfolio.prototype = new SAPB1.EntityType();
SAPB1.BOEPortfolio.prototype.constructor = SAPB1.BOEPortfolio;
SAPB1.BOEPortfolio.prototype.keys.push('PortfolioEntry');
SAPB1.BOEPortfolio.PortfolioEntry = { valueOf: function(){return 'PortfolioEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BOEPortfolio.PortfolioID = { valueOf: function(){return 'PortfolioID';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BOEPortfolio.PortfolioCode = { valueOf: function(){return 'PortfolioCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BOEPortfolio.PortfolioNum = { valueOf: function(){return 'PortfolioNum';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BOEPortfolio.PortfolioDescription = { valueOf: function(){return 'PortfolioDescription';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BOEPortfolio.prototype.PortfolioEntry = new Number();
SAPB1.BOEPortfolio.prototype.PortfolioID = new String();
SAPB1.BOEPortfolio.prototype.PortfolioCode = new String();
SAPB1.BOEPortfolio.prototype.PortfolioNum = new String();
SAPB1.BOEPortfolio.prototype.PortfolioDescription = new String();



SAPB1.BOEPortfolio.create = function (rawObject) {
    var instance = new SAPB1.BOEPortfolio();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BOEPortfolio.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BOEPortfolio;
