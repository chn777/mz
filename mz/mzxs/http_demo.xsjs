/**
try {
    var destPackage = "mz.conf"; //HTTP连接配置文件的对应包名
    var destName = "httpConf";    //HTTP连接配置文件的对应文件名
    
    // 设置HTTP请求配置 
    var dest = $.net.http.readDestination(destPackage, destName);
    var client = new $.net.http.Client();
    // 发送POST请求到相应的地址上请求资源，这里的Logoin 会被转义为 https://192.168.1.230:50000/b1s/v1/Login
    var req = new $.web.WebRequest($.net.http.POST, "Login");
 
    //获取客户端发送的POST请求JSON数据，并转义为raw数据
    var sendData = $.request.body.asString();
    // 设置后台转发POST请求的数据体
    req.setBody(sendData);
 
    // 发送请求，并获取响应
    client.request(req, dest);
    var response = client.getResponse();
    $.response.status = $.net.http.OK;
    // 将数据返回给用户
    $.response.contentType = "application/json";
    $.response.setBody(response.body.asString());
} catch (e) {
    // return the error as JSON for debugging

     var errorResponse = {"error": e.toString()};
     $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
     $.response.contentType = "application/json";
     $.response.setBody(JSON.stringify(errorResponse));

}*/