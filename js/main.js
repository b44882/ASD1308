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
	
	$('#home').on('pageinit', function(){

	});	
	
	$('#create').on('pageinit', function(){

		var myForm = $("#exeform");
		myForm.validate({
			rules: {
				name: "required",
				burned: "required",
				type: "required",
				length: "required",
				measure: "required"
			},
			messages: {
				name: "Please specify a name.",
				burned: "Please specify calories burned.",
				type: "Please select a type.",
				length: "Please specify exercise's length.",
				measure: "Please specify exercise's measurement."
			},
			invalidHandler: function(form, validator) {
				alert("There are empty fields.  Please fill all fields.");
			},
			submitHandler: function() {
				var data = myForm.serializeArray();
				storeData(data);
			}
		});
	});
	
	var storeData = function(data){
	console.log(data);
	var id = Math.floor(Math.random()*1000000000000000001);
	var exercise       = {};
		exercise.name  = ["Exercise:", data[0].value];
		exercise.burned  = ["Cals Burned:", data[1].value];
		exercise.type = ["Type:", data[2].value];
		exercise.measure  = ["Measurement:", data[3].value + " " + data[4].value];
		localStorage.setItem(id, JSON.stringify(exercise));
		alert("Exercise Saved!");
		window.location.reload();
 	
	}; 
});




        
        	
    