
var UserMenuItemTypeEnum = require('EnumType/UserMenuItemTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserMenuItem = function () {
}
SAPB1.UserMenuItem.prototype = new SAPB1.ComplexType();
SAPB1.UserMenuItem.prototype.constructor = SAPB1.UserMenuItem;
SAPB1.UserMenuItem.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserMenuItem.Position = { valueOf: function(){return 'Position';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserMenuItem.Type = { valueOf: function(){return 'Type';}, Type: 'UserMenuItemTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserMenuItem.LinkedObjType = { valueOf: function(){return 'LinkedObjType';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserMenuItem.LinkedObjKey = { valueOf: function(){return 'LinkedObjKey';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserMenuItem.LinkedFormMenuID = { valueOf: function(){return 'LinkedFormMenuID';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserMenuItem.LinkedFormNum = { valueOf: function(){return 'LinkedFormNum';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserMenuItem.ReportPath = { valueOf: function(){return 'ReportPath';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserMenuItem.prototype.Name = new String();
SAPB1.UserMenuItem.prototype.Position = new Number();
SAPB1.UserMenuItem.prototype.Type = new String();
SAPB1.UserMenuItem.prototype.LinkedObjType = new String();
SAPB1.UserMenuItem.prototype.LinkedObjKey = new String();
SAPB1.UserMenuItem.prototype.LinkedFormMenuID = new Number();
SAPB1.UserMenuItem.prototype.LinkedFormNum = new Number();
SAPB1.UserMenuItem.prototype.ReportPath = new String();


SAPB1.UserMenuItem.UserMenuItemTypeEnum = UserMenuItemTypeEnum

SAPB1.UserMenuItem.create = function (rawObject) {
    var instance = new SAPB1.UserMenuItem();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserMenuItem.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserMenuItem;
