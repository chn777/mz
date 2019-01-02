function sendPostReq(postData,fnName){
    try 
    {
        var mainData = JSON.parse(postData);
        var cookie = mainData.SessionId?mainData.SessionId:"";
        var destPackage = "mz.httpUtil"; //HTTP连接配置文件的对应包名
        var destName = "conf";    //HTTP连接配置文件的对应文件名
        
        // 设置HTTP请求配置 
        var dest = $.net.http.readDestination(destPackage, destName);
        var client = new $.net.http.Client();
        // 发送POST请求到相应的地址上请求资源，这里的Logoin 会被转义为 https://192.168.1.230:50000/b1s/v1/Login
        var req = new $.web.WebRequest($.net.http.POST, fnName);
        req.cookies.set("B1SESSION",cookie);
        postData = JSON.stringify(mainData.data);
        req.setBody(postData);
     
        // 发送请求，并获取响应
        client.request(req, dest);
        var response = client.getResponse();
        return response.body.asString();
    } 
    catch (e) 
    {
         var errorResponse = {"error": e.toString()};
         return JSON.stringify(errorResponse);
    }
}