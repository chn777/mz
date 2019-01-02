function showData(query,bpType,topNb)
{
    var conn = $.hdb.getConnection();
    var rs = conn.executeQuery(query,topNb,bpType);
    
    $.response.contentType = 'application/json';
    $.response.setBody(JSON.stringify(rs));
    $.response.status = $.net.http.OK;
    
    conn.close();
    
}

var statement = 'SELECT TOP ? "CardCode","CardName","CardType","Balance" FROM "FK1226"."OCRD" where "CardType" =? ';
showData(statement,"C",100);