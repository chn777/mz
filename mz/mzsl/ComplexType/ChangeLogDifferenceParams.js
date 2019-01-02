

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ChangeLogDifferenceParams = function () {
}
SAPB1.ChangeLogDifferenceParams.prototype = new SAPB1.ComplexType();
SAPB1.ChangeLogDifferenceParams.prototype.constructor = SAPB1.ChangeLogDifferenceParams;
SAPB1.ChangeLogDifferenceParams.Date = { valueOf: function(){return 'Date';}, Type: 'Edm.DateTime', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChangeLogDifferenceParams.ChangedField = { valueOf: function(){return 'ChangedField';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChangeLogDifferenceParams.OldValue = { valueOf: function(){return 'OldValue';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChangeLogDifferenceParams.NewValue = { valueOf: function(){return 'NewValue';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChangeLogDifferenceParams.UserName = { valueOf: function(){return 'UserName';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChangeLogDifferenceParams.ArrayOffset = { valueOf: function(){return 'ArrayOffset';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChangeLogDifferenceParams.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ChangeLogDifferenceParams.prototype.Date = new String();
SAPB1.ChangeLogDifferenceParams.prototype.ChangedField = new String();
SAPB1.ChangeLogDifferenceParams.prototype.OldValue = new String();
SAPB1.ChangeLogDifferenceParams.prototype.NewValue = new String();
SAPB1.ChangeLogDifferenceParams.prototype.UserName = new String();
SAPB1.ChangeLogDifferenceParams.prototype.ArrayOffset = new Number();
SAPB1.ChangeLogDifferenceParams.prototype.LineNumber = new String();



SAPB1.ChangeLogDifferenceParams.create = function (rawObject) {
    var instance = new SAPB1.ChangeLogDifferenceParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ChangeLogDifferenceParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ChangeLogDifferenceParams;
