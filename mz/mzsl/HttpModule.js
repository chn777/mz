if (typeof (module) === "undefined") {
    module = {};
}

if (typeof (HttpModule) === "undefined") {
    HttpModule = {};
}

//http request
HttpModule.HttpRequest = function () {
    if (typeof (HttpModule.HttpRequest.instance) === 'object') {
        return HttpModule.HttpRequest.instance;
    }
    HttpModule.HttpRequest.instance = this;
}

HttpModule.HttpRequest.prototype.getMethod = function () {
    return request.getMethod();
}
HttpModule.HttpRequest.prototype.getContent = function () {
    return request.getContent();
}
HttpModule.HttpRequest.prototype.getJsonObj = function () {
    var content = request.getContent();
    if (!content) {
        content = null;
    }
    return JSON.parse(content);
}
HttpModule.HttpRequest.prototype.getContentType = function () {
    return request.getContentType();
}
HttpModule.HttpRequest.prototype.getParameterNames = function () {
    return request.getParameterNames();
}
HttpModule.HttpRequest.prototype.getParameter = function (param) {
    return request.getParameter(param);
}
HttpModule.HttpRequest.prototype.getEntityKey = function () {
    var ret = request.getEntityKey();
    if (!ret) {
        return null;
    }
    
    ret = String.prototype.trim.call(ret);
    var isStartWithQuote = String.prototype.charAt.call(ret, 0) == "'";
    var isEndWithQuote = String.prototype.charAt.call(ret, ret.length - 1) == "'";
    if (isStartWithQuote) {
        if (isEndWithQuote) {
            return ret;//the key is a simple string
        }
    } else if (!isEndWithQuote) {
        return ret;//the key is a simple number
    }
    
    //simple analysis for combined key case
    var keyObj = {}, propItems = String.prototype.split.call(ret, ',');
    var propKey, propVal;
    Array.prototype.forEach.call(propItems, function (propItem) {
        var prop = String.prototype.split.call(propItem, '=');
        propKey = String.prototype.trim.call(prop[0]);
        propVal = String.prototype.trim.call(prop[1]);
        keyObj[propKey] = propVal;
    });
    return keyObj;
}
HttpModule.HttpRequest.prototype.getHeader = function (header) {
    return request.getHeader(header);
}

//http status
HttpModule.HttpStatus = {};
HttpModule.HttpStatus.HTTP_CONTINUE = 100;
HttpModule.HttpStatus.HTTP_SWITCHING_PROTOCOLS = 101;
HttpModule.HttpStatus.HTTP_PROCESSING = 102;
HttpModule.HttpStatus.HTTP_OK = 200;
HttpModule.HttpStatus.HTTP_CREATED = 201;
HttpModule.HttpStatus.HTTP_ACCEPTED = 202;
HttpModule.HttpStatus.HTTP_NON_AUTHORITATIVE = 203;
HttpModule.HttpStatus.HTTP_NO_CONTENT = 204;
HttpModule.HttpStatus.HTTP_RESET_CONTENT = 205;
HttpModule.HttpStatus.HTTP_PARTIAL_CONTENT = 206;
HttpModule.HttpStatus.HTTP_MULTI_STATUS = 207;
HttpModule.HttpStatus.HTTP_ALREADY_REPORTED = 208;
HttpModule.HttpStatus.HTTP_IM_USED = 226;
HttpModule.HttpStatus.HTTP_MULTIPLE_CHOICES = 300;
HttpModule.HttpStatus.HTTP_MOVED_PERMANENTLY = 301;
HttpModule.HttpStatus.HTTP_MOVED_TEMPORARILY = 302;
HttpModule.HttpStatus.HTTP_SEE_OTHER = 303;
HttpModule.HttpStatus.HTTP_NOT_MODIFIED = 304;
HttpModule.HttpStatus.HTTP_USE_PROXY = 305;
HttpModule.HttpStatus.HTTP_TEMPORARY_REDIRECT = 307;
HttpModule.HttpStatus.HTTP_PERMANENT_REDIRECT = 308;
HttpModule.HttpStatus.HTTP_BAD_REQUEST = 400;
HttpModule.HttpStatus.HTTP_UNAUTHORIZED = 401;
HttpModule.HttpStatus.HTTP_PAYMENT_REQUIRED = 402;
HttpModule.HttpStatus.HTTP_FORBIDDEN = 403;
HttpModule.HttpStatus.HTTP_NOT_FOUND = 404;
HttpModule.HttpStatus.HTTP_METHOD_NOT_ALLOWED = 405;
HttpModule.HttpStatus.HTTP_NOT_ACCEPTABLE = 406;
HttpModule.HttpStatus.HTTP_PROXY_AUTHENTICATION_REQUIRED = 407;
HttpModule.HttpStatus.HTTP_REQUEST_TIME_OUT = 408;
HttpModule.HttpStatus.HTTP_CONFLICT = 409;
HttpModule.HttpStatus.HTTP_GONE = 410;
HttpModule.HttpStatus.HTTP_LENGTH_REQUIRED = 411;
HttpModule.HttpStatus.HTTP_PRECONDITION_FAILED = 412;
HttpModule.HttpStatus.HTTP_REQUEST_ENTITY_TOO_LARGE = 413;
HttpModule.HttpStatus.HTTP_REQUEST_URI_TOO_LARGE = 414;
HttpModule.HttpStatus.HTTP_UNSUPPORTED_MEDIA_TYPE = 415;
HttpModule.HttpStatus.HTTP_RANGE_NOT_SATISFIABLE = 416;
HttpModule.HttpStatus.HTTP_EXPECTATION_FAILED = 417;
HttpModule.HttpStatus.HTTP_UNPROCESSABLE_ENTITY = 422;
HttpModule.HttpStatus.HTTP_LOCKED = 423;
HttpModule.HttpStatus.HTTP_FAILED_DEPENDENCY = 424;
HttpModule.HttpStatus.HTTP_UPGRADE_REQUIRED = 426;
HttpModule.HttpStatus.HTTP_PRECONDITION_REQUIRED = 428;
HttpModule.HttpStatus.HTTP_TOO_MANY_REQUESTS = 429;
HttpModule.HttpStatus.HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
HttpModule.HttpStatus.HTTP_INTERNAL_SERVER_ERROR = 500;
HttpModule.HttpStatus.HTTP_NOT_IMPLEMENTED = 501;
HttpModule.HttpStatus.HTTP_BAD_GATEWAY = 502;
HttpModule.HttpStatus.HTTP_SERVICE_UNAVAILABLE = 503;
HttpModule.HttpStatus.HTTP_GATEWAY_TIME_OUT = 504;
HttpModule.HttpStatus.HTTP_VERSION_NOT_SUPPORTED = 505;
HttpModule.HttpStatus.HTTP_VARIANT_ALSO_VARIES = 506;
HttpModule.HttpStatus.HTTP_INSUFFICIENT_STORAGE = 507;
HttpModule.HttpStatus.HTTP_LOOP_DETECTED = 508;
HttpModule.HttpStatus.HTTP_NOT_EXTENDED = 510;
HttpModule.HttpStatus.HTTP_NETWORK_AUTHENTICATION_REQUIRED = 511;

//500-600: error code for framework; 600+ for user error code 
HttpModule.ScriptError = {
    INPUT_PARAM_TYPE_ERROR: 500,
    INPUT_PARAM_COUNT_ERROR: 501,
    INPUT_HTTP_STATUS_ERROR: 502,
    NOT_ALLOWED_SCRIPT_CODE_ERROR: 505,
    TRANSACTION_TOO_LARGE_ERROR: 510,
    DEFAULT_USER_SCRIPT_ERROR: 600
};

//http content type
HttpModule.ContentType = {
    TEXT_PLAIN: "text/plain",
    APPLICATION_JSON: "application/json",
    APPLICATION_XML: "application/xml",
    APPLICATION_FORM_URLENCODED: "application/x-www-form-urlencoded",
    TEXT_HTML: "text/html",
    MULTIPART_FORM_DATA: "multipart/form-data",
    APPLICATION_OCTET_STREAM: "application/octet-stream",
    WILDCARD_TYPE: "*/*"
};

//http response
HttpModule.HttpResponse = function () {
    if (HttpModule.HttpResponse.instance === 'object') {
        return HttpModule.HttpResponse.instance;
    }
    this.headers = [];
    this.charset = 'utf-8';
    this.contentType = HttpModule.ContentType.APPLICATION_JSON;
    this.status = HttpModule.HttpStatus.HTTP_OK;
    this.content = '';
    HttpModule.HttpResponse.instance = this;
}

HttpModule.HttpResponse.prototype.setHeader = function (key, value) {
	var header = {};
	header[key] = value;
	this.headers.push(header);
}

HttpModule.HttpResponse.prototype.setContentType = function (contentType) {
    if (contentType) {
        this.contentType = contentType;
    }
}

HttpModule.HttpResponse.prototype.setCharSet = function (charset) {
    if (charset) {
        this.charset = charset;
    }
}

HttpModule.HttpResponse.prototype.setStatus = function (status) {
    if (typeof (status) !== 'number') {
        throw new http.HttpException(HttpModule.HttpStatus.HTTP_BAD_REQUEST, "Invalid http status", HttpModule.ScriptError.INPUT_PARAM_TYPE_ERROR);
    }
    if (HttpModule.HttpStatus.HTTP_CONTINUE > status  || status > HttpModule.HttpStatus.HTTP_NETWORK_AUTHENTICATION_REQUIRED) {
        throw new http.HttpException(HttpModule.HttpStatus.HTTP_BAD_REQUEST, "not allowed http status value", HttpModule.ScriptError.INPUT_HTTP_STATUS_ERROR);
    }
    this.status = status;
}

HttpModule.HttpResponse.prototype.setContent = function (content){
    if (typeof (content) === 'number') {
        this.content = ('' + content);
    } else if (typeof (content) === 'object') {
        this.content = JSON.stringify(content);
    } else {
        this.content = content;
    }
}

HttpModule.HttpResponse.prototype.send = function (status, content) {
    if (typeof (status) !== "undefined") {
        this.setStatus(status);    
    }

    if (typeof (content) !== "undefined") {
        this.setContent(content);
    }
    
    this.headers.forEach(function (header) {
        for (var key in header) {
            if (header.hasOwnProperty(key)) {
                break;
            }
        }
        response.setHeader(key, header[key]);
    });

    var contentType = this.contentType;
    if (contentType.charAt(contentType.length - 1) != ';') {
        contentType += ';'
    }
    contentType += 'charset=' + this.charset;
    response.setContentType(contentType);
    response.setStatus(this.status);
    if (status != HttpModule.HttpStatus.HTTP_NO_CONTENT){
        response.setContent(this.content);
    }
}

//http Exception to throw 
HttpModule.HttpException = function (httpStatus, message, code) {
    if (!(this instanceof HttpModule.HttpException)) {
        return new HttpModule.HttpException(httpStatus, message, code);
    }
    this.status = httpStatus;
    this.message = message;
    this.code = code;
}

HttpModule.HttpException.prototype.toString = function () {
    return JSON.stringify(this);
}

HttpModule.ScriptException = function (httpStatus, message) {
    if (!(this instanceof HttpModule.ScriptException)) {
        return new HttpModule.ScriptException(httpStatus, message);
    }
    this.httpException = 
        new HttpModule.HttpException(httpStatus, message, HttpModule.ScriptError.DEFAULT_USER_SCRIPT_ERROR);
}
HttpModule.ScriptException.setErrorCode = function (code){
    if (HttpModule.ScriptError.DEFAULT_USER_SCRIPT_ERROR > code) {
        new HttpModule.HttpException(httpStatus, "not allowed user script error code", 
            HttpModule.ScriptError.NOT_ALLOWED_SCRIPT_CODE_ERROR);
    }
    this.httpException.code = code;
}
HttpModule.ScriptException.prototype.toString = function () {
    return JSON.stringify(this.httpException);
}

//create request and response instance 
HttpModule.request = new HttpModule.HttpRequest();
HttpModule.response = new HttpModule.HttpResponse();

module.exports = HttpModule;
