var Boxes1099 = require('ComplexType/Boxes1099')
var Boxes1099Collection = require('ComplexType/Boxes1099Collection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Forms1099 = function () {
}
SAPB1.Forms1099.prototype = new SAPB1.EntityType();
SAPB1.Forms1099.prototype.constructor = SAPB1.Forms1099;
SAPB1.Forms1099.prototype.keys.push('FormCode');
SAPB1.Forms1099.FormCode = { valueOf: function(){return 'FormCode';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Forms1099.Form1099 = { valueOf: function(){return 'Form1099';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Forms1099.Boxes1099 = { valueOf: function(){return 'Boxes1099';}, Type: 'Boxes1099', Index: 2, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Forms1099.prototype.FormCode = new Number();
SAPB1.Forms1099.prototype.Form1099 = new String();
SAPB1.Forms1099.prototype.Boxes1099 = new Boxes1099Collection();

SAPB1.Forms1099.Boxes1099 = Boxes1099
SAPB1.Forms1099.Boxes1099Collection = Boxes1099Collection


SAPB1.Forms1099.create = function (rawObject) {
    var instance = new SAPB1.Forms1099();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Forms1099.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Forms1099;
