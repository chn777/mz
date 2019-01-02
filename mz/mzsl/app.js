let http = require("./HttpModule");
function PATCH() {
    console.log("testing the http request and http response API...")
    var ret = {};
    ret.content = http.request.getJsonObj();
    ret.method = http.request.getMethod();
    ret.contentType = http.request.getContentType();
    ret.dataServiceVersion = http.request.getHeader("DataServiceVersion");
    ret.paramNames = http.request.getParameterNames();
    if (ret.paramNames && ret.paramNames.length) {
        ret.paramNames.forEach(function (param) {
            ret[param] = http.request.getParameter(param);
        });
    }
    ret.key = http.request.getEntityKey();
    http.response.setContentType(http.ContentType.APPLICATION_JSON);
    http.response.setStatus(http.HttpStatus.HTTP_OK);
    http.response.setContent(ret);
    http.response.send();
}