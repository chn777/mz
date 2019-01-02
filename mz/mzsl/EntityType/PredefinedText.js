

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PredefinedText = function () {
}
SAPB1.PredefinedText.prototype = new SAPB1.EntityType();
SAPB1.PredefinedText.prototype.constructor = SAPB1.PredefinedText;
SAPB1.PredefinedText.prototype.keys.push('Numerator');
SAPB1.PredefinedText.Numerator = { valueOf: function(){return 'Numerator';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PredefinedText.TextCode = { valueOf: function(){return 'TextCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PredefinedText.Text = { valueOf: function(){return 'Text';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PredefinedText.prototype.Numerator = new Number();
SAPB1.PredefinedText.prototype.TextCode = new String();
SAPB1.PredefinedText.prototype.Text = new String();



SAPB1.PredefinedText.create = function (rawObject) {
    var instance = new SAPB1.PredefinedText();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PredefinedText.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PredefinedText;
