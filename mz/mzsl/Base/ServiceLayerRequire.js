if (typeof (module) === "undefined") {
    module = {};
}

function require(file){
	if(!loadFile){
		return;
	}
    
	if(module[file]){
		return module[file];
	}
	
	var content = loadFile(file);
	if(content){
		eval(content);
	}  
	module[file] = module.exports;
	return module.exports;
}
