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

$(document).ready(function(){
	

	displayRoutines();
	addStyles();


}); //end of doc ready fxn


//highlight first row to denote most recently created routine by user
var addStyles = function(){

	//replace first <br> with a <div> with yellow bg
	$( "#results :first-child" )[0].remove();
	$( "#results").prepend('<div class="yellow marginset" style="height: 20px;"></div>');
	
	//add yellow bg to first row
	$("#results").find('.yellow').next().addClass('yellow');

	//add yellow bg to first instance of <div class='line'>
    $("#results").find('.section.group.yellow').next().addClass('yellow');

}


//display each saved routine as a row
var displayRoutines = function(){

	$("#results").empty();


	//display a vertical list of ALL saved routines
    //display on page load or if no search critera found
	if (all_routine_vids.length > 0){

		for (var i = 0; i < all_routine_vids.length; i++){
			var match = all_routine_vids[i];
			var row = $("<br><div class='section group'>");

			//column for time
			var ptdr_results = '<div class="col span_0_of_9"><span class="position">' + match['total time'] + '</span></div>';

			//plie column
            var col_plie = '<div class="col span_1_of_9">' + videos[match['plie video']][2] + ' </div>';
            ptdr_results += col_plie;

            //tendu column
            var col_tendu = '<div class="col span_1_of_9">' + videos[match['tendu video']][2] + ' </div>';
            ptdr_results += col_tendu;

            //dgg column
            var col_dgg = '<div class="col span_1_of_9">' + videos[match['dgg video']][2] + ' </div>';
            ptdr_results += col_dgg;

            //r column
            var col_r = '<div class="col span_1_of_9">' + videos[match['r video']][2] + ' </div>';
            ptdr_results += col_r;

    		//frappe column
            var col_frappe = '<div class="col span_1_of_9">' + videos[match['frappe video']][2] + ' </div>';
            ptdr_results += col_frappe;

             //dev column
            var col_dev = '<div class="col span_1_of_9">' + videos[match['dev video']][2] + ' </div>';
            ptdr_results += col_dev;

             //gb column
            var col_gb = '<div class="col span_1_of_9">' + videos[match['gb video']][2] + ' </div>';
            ptdr_results += col_gb;

            //str column
            var col_str = '<div class="col span_1_of_9">' + videos[match['str video']][2] + ' </div>';
            ptdr_results += col_str;

            ptdr_results += '</div>';

    		$(row).append(ptdr_results);


    		console.log(i)

    		var border = '<div class="line"></div>';

    		if (i == 0)
    			border = '';

    		$('#results').prepend(border);
    	

			$("#results").prepend(row);

            var clock_image = $("<img />").attr({
                "src": "static/clock.png",
                "alt": "clock",
                "width": 20,
                "height": 20,
            });
            $("#results").find('.span_0_of_9').find('img').remove()
            $("#results").find('.span_0_of_9').prepend(clock_image);

			
	}
}
	
};
