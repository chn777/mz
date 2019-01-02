

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BOEPortfolioParams = function () {
}
SAPB1.BOEPortfolioParams.prototype = new SAPB1.ComplexType();
SAPB1.BOEPortfolioParams.prototype.constructor = SAPB1.BOEPortfolioParams;
SAPB1.BOEPortfolioParams.PortfolioEntry = { valueOf: function(){return 'PortfolioEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BOEPortfolioParams.PortfolioID = { valueOf: function(){return 'PortfolioID';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BOEPortfolioParams.PortfolioCode = { valueOf: function(){return 'PortfolioCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BOEPortfolioParams.prototype.PortfolioEntry = new Number();
SAPB1.BOEPortfolioParams.prototype.PortfolioID = new String();
SAPB1.BOEPortfolioParams.prototype.PortfolioCode = new String();



SAPB1.BOEPortfolioParams.create = function (rawObject) {
    var instance = new SAPB1.BOEPortfolioParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BOEPortfolioParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BOEPortfolioParams;
