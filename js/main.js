$(function(){
	
	$("#get_json").bind("click", function(){
		$.ajax({
			url: "js/data.json",
			type: "GET",
			dataType: "json",
			success: function(data, status){
				console.log(status,data);
			},
			error: function(error, parseerror){
				console.log("Error:" + error + "\n" + "Parse Error: " + parseerror);
			}
		});
	
	});

});
        
        	
    