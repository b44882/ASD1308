$(function(){

	$("#get_json").on("click", function(){
		$("#exlist").empty();
		$('<h1> JSON Listing </h1>').appendTo("#exlist");
		$.ajax({
			url: "js/data.json",
			type: "GET",
			dataType: "json",
			success: function(data){
				for(var i=0, j=data.exercise.length; i<j; i++){
					var obj = data.exercise[i];
					$('<li class="ui-li ui-li-static ui-btn-up-c ui-first-child ui-last-child">' +
					  '<h3 class="ui-li-heading">' + obj.name +'</h3>' +
					  '<p class="ui-li-desc">' + 'Calories Burned: ' + obj.burn + '</p>' +
					  '<p class="ui-li-desc">' + 'Type: ' + obj.type + '</p>' +
					  '<p class="ui-li-desc">' + 'Measurement: ' + obj.length + ' ' + obj.measure + '</p>' +
					  '</li>').appendTo("#exlist");
				}
			},
			error: function(error, perror){
				console.log("Error:" + error + "\n" + "Parse Error: " + perror);
			}
		});
	
	});
	
	$("#get_xml").on("click", function(){
		$("#exlist").empty();
		$('<h1> XML Listing </h1>').appendTo("#exlist");
		$.ajax({
			url: "js/data.xml",
			type: "GET",
			dataType: "xml",
			success: function(data){
				$(data).find("exercise").each(function() {
					$('<li class="ui-li ui-li-static ui-btn-up-c ui-first-child ui-last-child">' +
					  '<h3 class="ui-li-heading">' + $(this).find('name').text() +'</h3>' +
					  '<p class="ui-li-desc">' + 'Calories Burned: ' + $(this).find('burned').text() + '</p>' +
					  '<p class="ui-li-desc">' + 'Type: ' + $(this).find('type').text() + '</p>' +
					  '<p class="ui-li-desc">' + 'Measurement: ' + $(this).find('length').text() + ' ' + $(this).find('measure').text() + '</p>' +
					  '</li>').appendTo("#exlist");
				});
			},
			error: function(error, perror){
				console.log("Error:" + error + "\n" + "Parse Error: " + perror);
			}
		});
	
	});
});


        
        	
    