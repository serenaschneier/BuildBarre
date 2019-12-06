//js file corresponding to buildbarre homepage

//videos[index][0] = name of ID for box, for which each entry is a candidate
//videos[index][1] = time of video selected (in decimal hours: https://www.calculatorsoup.com/calculators/time/time-to-decimal-calculator.php)
//videos[index][2] = html to embed into box where id = videos[index][0]
videos = {'plie1': ['#plie_chosen',1.70,"<iframe width='120' height='120' id='plie1' src='https://www.youtube.com/embed/HpIkZlqAlI0'></iframe>"],
'plie2': ['#plie_chosen',2.35,"<iframe width='120' height='120' id='plie2' src='https://www.youtube.com/embed/R2FdpNor_hs'></iframe>"],
'plie3': ['#plie_chosen',2.52, "<iframe width='120' height='120' id='plie3' src='https://www.youtube.com/embed/GIdw6UZAbaA'></iframe>"],
'plie4': ['#plie_chosen',2.30, "<iframe width='120' height='120' id='plie4' src='https://www.youtube.com/embed/eKhTKClTIhg'></iframe>"],
'tendu1': ['#tendu_chosen',6.43,"<iframe width='120' height='120' id='tendu1' src='https://www.youtube.com/embed/fFljBOSy3vA'></iframe>"],
'tendu2': ['#tendu_chosen',3.52,"<iframe width='120' height='120' id='tendu2' src='https://www.youtube.com/embed/G0aNCfPrhGY'></iframe>"],
'tendu3':['#tendu_chosen',2.23,"<iframe width='120' height='120' id='tendu3' src='https://www.youtube.com/embed/gBXouOI5c7Y'></iframe>"],
'tendu4':['#tendu_chosen',1.95,"<iframe width='120' height='120' id='tendu4' src='https://www.youtube.com/embed/ayDltUy4-GU'></iframe>"],
'dgg1': ['#dgg_chosen',5.35,"<iframe width='120' height='120' id='dgg1' src='https://www.youtube.com/embed/CFUNx7NBtMc'></iframe>"],
'dgg2': ['#dgg_chosen',5.27,"<iframe width='120' height='120' id='dgg2' src='https://www.youtube.com/embed/QywNQXYhtxA'></iframe>"],
'dgg3': ['#dgg_chosen',1.85,"<iframe width='120' height='120' id='dgg3' src='https://www.youtube.com/embed/gg2d06mEF24'></iframe>"],
'dgg4': ['#dgg_chosen',0.70,"<iframe width='120' height='120' id='dgg4' src='https://www.youtube.com/embed/l4AwoZBmWag'></iframe>"],
'r1': ['#r_chosen',2.57,"<iframe width='120' height='120' id='r1' src='https://www.youtube.com/embed/UrL4jC6vR88'></iframe>"],
'r2': ['#r_chosen',2.70,"<iframe width='120' height='120' id='r2' src='https://www.youtube.com/embed/eNoOM_kaQ1A'></iframe>"],
'r3': ['#r_chosen',4.03,"<iframe width='120' height='120' id='r3' src='https://www.youtube.com/embed/dnueZdYaLRc'></iframe>"],
'r4': ['#r_chosen',1.50,"<iframe width='120' height='120' id='r4' src='https://www.youtube.com/embed/sK15NUT5XB4'></iframe>"],
'frappe1': ['#frappe_chosen',1.58,"<iframe width='120' height='120' id='frappe1' src='https://www.youtube.com/embed/bUhnS_7jY5s'></iframe>"],
'frappe2': ['#frappe_chosen',2.70,"<iframe width='120' height='120' id='frappe2' src='https://www.youtube.com/embed/iaoTYFnsHTQ'></iframe>"],
'frappe3': ['#frappe_chosen',2.27,"<iframe width='120' height='120' id='frappe3' src='https://www.youtube.com/embed/Q1WQCxMijSQ'></iframe>"],
'frappe4': ['#frappe_chosen',1.95,"<iframe width='120' height='120' id='frappe4' src='https://www.youtube.com/embed/M93QoHPaW4I'></iframe>"],
'dev1': ['#dev_chosen',1.35,"<iframe width='120' height='120' id='dev1' src='https://www.youtube.com/embed/Qxuxo9X4I4w'></iframe>"],
'dev2': ['#dev_chosen',1.13,"<iframe width='120' height='120' id='dev2' src='https://www.youtube.com/embed/xbYJCeiJDJE'></iframe>"],
'dev3': ['#dev_chosen',3.03,"<iframe width='120' height='120' id='dev3' src='https://www.youtube.com/embed/7ckBLgDu7TY'></iframe>"],
'dev4': ['#dev_chosen',1.77,"<iframe width='120' height='120' id='dev4' src='https://www.youtube.com/embed/e81WOjBdEmQ'></iframe>"],
'gb1': ['#gb_chosen',0.95,"<iframe width='120' height='120' id='gb1' src='https://www.youtube.com/embed/IIo89v_2-8o'></iframe>"],
'gb2': ['#gb_chosen',1.63,"<iframe width='120' height='120' id='gb2' src='https://www.youtube.com/embed/f9BwDRwfsvQ'></iframe>"],
'gb3': ['#gb_chosen',3.78,"<iframe width='120' height='120' id='gb3' src='https://www.youtube.com/embed/klZwCBjoPeo'></iframe>"],
'gb4': ['#gb_chosen',1.70,"<iframe width='120' height='120' id='gb4' src='https://www.youtube.com/embed/hBRZwcCpGPQ'></iframe>"],
'str1': ['#str_chosen',12.70,"<iframe width='120' height='120' id='str1' src='https://www.youtube.com/embed/2_e_Ypv8mKo'></iframe>"],
'str2': ['#str_chosen',10.85,"<iframe width='120' height='120' id='str2' src='https://www.youtube.com/embed/Zi6k9lfBtH8'></iframe>"],
'str3': ['#str_chosen',2.17,"<iframe width='120' height='120' id='str3' src='https://www.youtube.com/embed/WN5Nixp5rL8'></iframe>"],
'str4': ['#str_chosen',4.87,"<iframe width='120' height='120' id='str4' src='https://www.youtube.com/embed/coj0CCJ0TfU'></iframe>"]
};

var panellist = ["#pliepanel", "#tendupanel", "#dggpanel", "#rpanel","#frappepanel","#devpanel","#gbpanel","#strpanel"];


$(document).ready(function(){
	
	//navigate to create playlist page
	$("#create-routine").click(function(event){
		window.location.assign("/create");
	});

	//navigate to saved playlists page
	$("#saved-routines").click(function(event){
		window.location.assign("/saved");
	});

	$('.collapse').collapse();

  	//when you click on panel (button), flip carrot
	for (var i = 0; i < panellist.length; i++){
		flipCarrot(panellist[i]);

	}
	$("img").addClass('float-right').css('margin-top','10px')

	$('.fa').css('font-size','18px')
	$(".fa").hover(function(){
		$(this).css('color','darkgrey');
	})
	$(".fa").mouseleave(function(){
		$(this).css('color','black')
	})

	buttonClick();

	$('iframe').hover(function(){
		$(this).addClass('iframe-hover');
		$(this).mouseleave(function(){
			$(this).removeClass('iframe-hover');
		})
	})

	displayRoutine();

	

	
});



// 👿
function saveRoutine(chosen_videos){
	//if user has completed the workflow for one routine
	// save routine and see it on the saved routines page

	var values = Object.keys(chosen_videos).map(function(key){
    	return chosen_videos[key];
	}); //all values in the chosen_videos dict

	//if routine is fully completed
	if (values.includes('') == false){
		
		//iterate through videos and formulate those entries into an object
		//send that object via flask call to server
		var html = '<button type="button" class="btn btn-outline-success btn-sm center roboto">Save Routine</button>';
		var reset = '<button type="button" class="btn btn-outline-danger btn-sm center roboto" style="margin-right: 10px;">Reset Routine</button>';
		$("#save_routine").empty();
		$("#save_routine").append(reset);
		$("#save_routine").append(html);
	}

	//user clicks button:
	$('.btn.btn-sm').click(function(){
		
		var instruction = $(this).text().toLowerCase().split(' ')[0] //either 'save' or 'reset' clicked
		var time_str = $("#timesum").html().split("-")[1] 
		time_str = time_str.substring(1, time_str.length) // get rid of leading space in total time
		var routname = $("#routname").val().trim() // save name of routine supplied by user
		var time_bracket = ''// find out if under 30 min, 30-40 min, 40-50 min, or 50-60 min
		if (parseFloat(time_str) < 30){
			time_bracket = 'under30'
		} 
		else if (parseFloat(time_str) >= 30 && parseFloat(time_str) < 40){
			time_bracket = '3040'
		}
		else if (parseFloat(time_str) >= 40 && parseFloat(time_str) < 50){
			time_bracket = '4050'
		}
		else if (parseFloat(time_str) >= 50 && parseFloat(time_str) < 61){
			time_bracket = '5060'
		}
		console.log('time bracket ', time_bracket) // *note: parseFloat of time_str returns floored integer val here

		
		var data_to_send = {'chosen_videos': chosen_videos, 'instruction': instruction, 'total time': time_str, 'routine name': routname, 'time bracket': time_bracket}
		$.ajax({
			type: "POST",
			url: "save_new_routine",
			dataType: "json",
			contentType: "application/json; charset=utf-8",
		    data : JSON.stringify(data_to_send),
		    success: function(result){
		        
				//if user clicked save, then navigate to Saved Routines page
				if (result == 'save')
					window.location.assign("/saved");
		        
		        //else, user clicked reset
		        else
		        	document.location.reload();
		        
	    },
	    error: function(request, status, error){
	        console.log("Error in save_new_routine_");
	        console.log(request)
	        console.log(status)
	        console.log(error)
		}	
		});
	})
	
}
	

function appendVidChosen(chosen_item){

	//send chosen_item through flask call, to append to chosen_vids
	$.ajax({
		type: "POST",
		url: "append_to_chosen_videos",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
	    data : JSON.stringify(chosen_item),
	    success: function(result){
	        //upon success, you receive chosen_videos array
	        displayRoutine();
	    },
	    error: function(request, status, error){
	        console.log("Error in append_to_chosen_videos");
	        console.log(request)
	        console.log(status)
	        console.log(error)
		}	
	});
}



function displayRoutine(){
	console.log('entered display')
	//make flask call to get routine list
	$.ajax({
		type: "POST",
		url: "chosen_vids_helper",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		data : JSON.stringify('request for chosen_vids array and time_sum'),
		success: function(result){
			var chosen_videos = result;
			var timesum = 0

			//if chosen_vids is empty, display html template
			//iterate through chosen_vids and display 
			if (chosen_videos != ''){
				console.log('chosen_videos: ', chosen_videos)
				for (element in chosen_videos){
					var obj_to_display = videos[chosen_videos[element]]
					//replace template box with iframe object
					//note: if obj_to_display is undefined, then the user hasn't 
					//selected a vid for that box yet
					if (obj_to_display != undefined){
						$(obj_to_display[0]).find('p').removeClass("mgn");
						$(obj_to_display[0]).find('p').remove();
						$(obj_to_display[0]).html(obj_to_display[2]);
						//update timesum with times of chosen videos
						timesum += obj_to_display[1];	
						time_to_display = parseTime(timesum);
						$("#timesum").html('Total Time - ' + time_to_display);						
					}

				}
				
			}
		//	revertVidChosen(timesum);
			//👿👿👿👿👿👿if this call came from a doc reload, call saveRoutine on ''
			saveRoutine(chosen_videos);
		},
		error: function(request, status, error){
	        console.log("Error in chosen_vids_helper");
	        console.log(request)
	        console.log(status)
	        console.log(error)
		}	
	});
}

// //function takes timesum in decimal and convert to time in normal, 60-min units
function parseTime(timesum){
	
	//since we are building very basic, short routines, we are only dealing with minutes and seconds
	var min = String(Math.floor(timesum)); 
	var sec = String(timesum).substring(String(timesum).indexOf('.')+1) //everything after decimal point 
	sec = (parseInt(sec)*6/10.0) * 10; //round 3-digit number to nearest tenth 
	sec = String(sec).substring(0,2) //first two digits, since it will be placed after a decimal 

	return (min + ':' + sec);
}


//if button to select video is clicked, then close video div
function buttonClick(){

	$('.fa-plus-circle').click(function(){
		console.log('clicked');
		var chosen_item = $(this).attr('id');

		//console.log(chosen_item.substring(0,chosen_item.length-1)+'panel')
		//$(chosen_item.substring(0,chosen_item.length-1)+'panel').next().toggleClass('flip')

		$(this).prop("disabled", true); 

		$('#collapse' + chosen_item.substring(0,chosen_item.length-1)).removeClass('collapse show').addClass('collapse hide');

		//send video through flask call to chosen_vids
	 	appendVidChosen(chosen_item);

	}); 
}

function flipCarrot(clicked_panel){

	$(clicked_panel).click(function(){
		//console.log($(clicked_panel).next())
		$(clicked_panel).next().toggleClass('flip')
	})
	if ($(clicked_panel).attr("aria-expanded")==false){
		$(clicked_panel).next().toggleClass('flip')
	}
}
