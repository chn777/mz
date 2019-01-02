if (typeof (module) === "undefined") {
    module = {};
}

if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EnumBase = function (name, value){
    this.name = name;
    this.value = value;
}
SAPB1.EnumBase.prototype = {
    constructor: SAPB1.EnumBase,
    toString: function () { return this.name; },
    valueOf: function () { return this.value; },
    toJSON: function () { return this.name; } // For serialization
}

//BaseComplexTypeFunctionDefinition
SAPB1.ComplexType = function () {
//    this.name = null;
}
SAPB1.ComplexType.prototype.getProp = function (prop) {
    if (this.constructor.hasOwnProperty(prop)) {
        return this.constructor[prop];
    } else {
        return null;
    }
}
//Some complex type (e.g. DocumentLine) still has actually key property, although it is defined as complex type in metadata. 
SAPB1.ComplexType.prototype.getKeyAttribute = function (keyProp) {
    if (this.keys.indexOf(keyProp) != -1) {
        return this.constructor[keyProp];
    } else {
        return null;
    }
}

//BaseCollectionFunctionDefinition
SAPB1.Collection = function () {
}
SAPB1.Collection.prototype = new Array();
SAPB1.Collection.constructor = SAPB1.Collection;
SAPB1.Collection.prototype.get = function (index) {
    return this[index];
}
SAPB1.Collection.prototype.set = function (index, element) {
    this[index] = element;
}
SAPB1.Collection.prototype.add = function (element) {
    this.push(element);
}
SAPB1.Collection.prototype.remove = function (index) {
    this.splice(index, 1);
}
//For the purpose of serialization on calling JSON.stringify
SAPB1.Collection.prototype.toJSON = function () {
    var jsonArray = [];
    this.forEach(function (element) {
        jsonArray.push(element);
    });
    return jsonArray;
};

//BaseEntityTypeFunctionDefinition
SAPB1.EntityType = function () {
    this.keys = [];
    SAPB1.ComplexType.call(this);
}
SAPB1.EntityType.prototype = new SAPB1.ComplexType();
SAPB1.EntityType.prototype.constructor = SAPB1.EntityType;  

module.exports = SAPB1;
