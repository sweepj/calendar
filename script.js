var body = document.getElementsByTagName("body")[0];
var d = new Date();

function calendar(){
	var year = d.getFullYear();
	var month = d.getUTCMonth();
	var today = d.getDate();
	var firstDay = new Date(year,month,1);
	var firstWday = firstDay.getDay();
	var oneHour = 1000 * 60 * 60;
	var oneDay = oneHour * 24;
	var nextMonth = new Date(year, month + 1, 1);
	var lastDate = Math.ceil((nextMonth.getTime() - firstDay.getTime() - oneHour)/oneDay);
	var n = new Array("Январь","Февраль", "Март", "Апрель", "Май", 
		"Июнь", "Июль", "Август", "Сентябрь",
		"Октябрь", "Ноябрь", "Декабрь");

	var day_table = document.createElement("table");
	day_table.id = "Calendar";
	body.appendChild(day_table);
	day_table.style.borderStyle = "dotted";
	day_table.style.fontFamily = "sans-serif";
	day_table.bgColor = "antiquewhite";
	day_table.innerHTML = "<tr><td colspan=7 rowspan=1 id='month'>"+n[month]+"</td></tr>"+
	"<tr id='weekday'><td>пн</td><td>вт</td><td>ср</td><td>чт</td><td>пт</td><td>сб</td><td>вс</td></tr>"+
	"<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>"+
	"<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>"+
	"<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>"+
	"<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>"+
	"<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";

	var btn_next = document.createElement("button");
	btn_next.id = "btnNext";
	body.appendChild(btn_next);
	btn_next.innerHTML = ">";
	
	btnNext(btn_next, month, year);

	for(var i = 1; i < lastDate; i++){
		var td_d = document.getElementsByTagName("td");
		 if (i == firstWday){
		 	td_d[0].innerHTML = n[month];
		 	td_d[0].bgColor = "ffffg";
		 	td_d[0].align = "center";
		 	td_d[0].style.fontFamily = "Arial"
		 	td_d[7+i].innerHTML = 1;

		 	for(var j=0; j<lastDate; j++){
		 		td_d[7+i+j].innerHTML=1+j;
		 	}

		 	for(var c=8; c<43; c++){
		 		if(td_d[c].innerHTML==0){
		 			td_d[c].visibility="hidden"
		 		}
		 		else{
		 			td_d[c].bgColor = "white";
		 			td_d[c].setAttribute = ("id");
		 			td_d[c].id = ("id" + c);
		 		}
		 	}

		 	for(z=0; z<lastDate; z++){
		 		if(td_d[z].innerHTML==today){
		 			td_d[z].bgColor="salmon";
		 		}
		 	}
		 }
	}
}
calendar();

document.querySelector("#Calendar").addEventListener('click', function(e){
var element = e.target.id;	
var getElement = document.getElementById(element).innerHTML;
var outP = document.createElement("p");
console.log(element);
body.appendChild(outP);
if(element !== "Calendar" && element !=="month"){
	document.querySelector('p').innerHTML = (getElement + "." + month + "." + year);
	}
});


function btnNext(btn,month,year){
	btn.addEventListener("click", function(){
		d.setUTCMonth(++month);
		if (month > 11){
			d.setFullYear(++year);
			month = 0;
		}
		calendar();
	})
}