

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ProgressiveTax_Line = function () {
}
SAPB1.ProgressiveTax_Line.prototype = new SAPB1.ComplexType();
SAPB1.ProgressiveTax_Line.prototype.constructor = SAPB1.ProgressiveTax_Line;
SAPB1.ProgressiveTax_Line.TaxRate = { valueOf: function(){return 'TaxRate';}, Type: 'Edm.Double', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProgressiveTax_Line.MinAmount = { valueOf: function(){return 'MinAmount';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProgressiveTax_Line.MaxAmount = { valueOf: function(){return 'MaxAmount';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProgressiveTax_Line.prototype.TaxRate = new Number();
SAPB1.ProgressiveTax_Line.prototype.MinAmount = new Number();
SAPB1.ProgressiveTax_Line.prototype.MaxAmount = new Number();



SAPB1.ProgressiveTax_Line.create = function (rawObject) {
    var instance = new SAPB1.ProgressiveTax_Line();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ProgressiveTax_Line.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ProgressiveTax_Line;
