

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.VatGroups_Line = function () {
}
SAPB1.VatGroups_Line.prototype = new SAPB1.ComplexType();
SAPB1.VatGroups_Line.prototype.constructor = SAPB1.VatGroups_Line;
SAPB1.VatGroups_Line.Effectivefrom = { valueOf: function(){return 'Effectivefrom';}, Type: 'Edm.DateTime', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroups_Line.Rate = { valueOf: function(){return 'Rate';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroups_Line.EqualizationTax = { valueOf: function(){return 'EqualizationTax';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroups_Line.DatevCode = { valueOf: function(){return 'DatevCode';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VatGroups_Line.prototype.Effectivefrom = new String();
SAPB1.VatGroups_Line.prototype.Rate = new Number();
SAPB1.VatGroups_Line.prototype.EqualizationTax = new Number();
SAPB1.VatGroups_Line.prototype.DatevCode = new Number();



SAPB1.VatGroups_Line.create = function (rawObject) {
    var instance = new SAPB1.VatGroups_Line();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.VatGroups_Line.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.VatGroups_Line;
