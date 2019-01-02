

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ReportLayoutPrintParams = function () {
}
SAPB1.ReportLayoutPrintParams.prototype = new SAPB1.ComplexType();
SAPB1.ReportLayoutPrintParams.prototype.constructor = SAPB1.ReportLayoutPrintParams;
SAPB1.ReportLayoutPrintParams.LayoutCode = { valueOf: function(){return 'LayoutCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutPrintParams.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutPrintParams.prototype.LayoutCode = new String();
SAPB1.ReportLayoutPrintParams.prototype.DocEntry = new Number();



SAPB1.ReportLayoutPrintParams.create = function (rawObject) {
    var instance = new SAPB1.ReportLayoutPrintParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ReportLayoutPrintParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ReportLayoutPrintParams;
