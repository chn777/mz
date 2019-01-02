

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.POSTotalizer = function () {
}
SAPB1.POSTotalizer.prototype = new SAPB1.ComplexType();
SAPB1.POSTotalizer.prototype.constructor = SAPB1.POSTotalizer;
SAPB1.POSTotalizer.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.POSTotalizer.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.POSTotalizer.Number = { valueOf: function(){return 'Number';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.POSTotalizer.Total = { valueOf: function(){return 'Total';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.POSTotalizer.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.POSTotalizer.prototype.LineNum = new Number();
SAPB1.POSTotalizer.prototype.Code = new String();
SAPB1.POSTotalizer.prototype.Number = new Number();
SAPB1.POSTotalizer.prototype.Total = new Number();
SAPB1.POSTotalizer.prototype.Description = new String();



SAPB1.POSTotalizer.create = function (rawObject) {
    var instance = new SAPB1.POSTotalizer();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.POSTotalizer.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.POSTotalizer;
