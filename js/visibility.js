var hidden, state, visibilityChange; 
if (typeof document.hidden !== "undefined") {
	hidden = "hidden";
	visibilityChange = "visibilitychange";
	state = "visibilityState";
} else if (typeof document.mozHidden !== "undefined") {
	hidden = "mozHidden";
	visibilityChange = "mozvisibilitychange";
	state = "mozVisibilityState";
} else if (typeof document.msHidden !== "undefined") {
	hidden = "msHidden";
	visibilityChange = "msvisibilitychange";
	state = "msVisibilityState";
} else if (typeof document.webkitHidden !== "undefined") {
	hidden = "webkitHidden";
	visibilityChange = "webkitvisibilitychange";
	state = "webkitVisibilityState";
}

var visBar = document.querySelector("#visibilityBar");
// Add a listener that constantly changes the title
document.addEventListener(visibilityChange, function() {
	var today = new Date();
//var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//var dateTime = date+' '+time;
    if(document[state] == "hidden"){
		stateMsg ="OK!!"
		if(h1.textContent != "00:00:00")
		stateMsg = "Hey!, Dont Try going away!! Resetting Timer."
		clearTimer();
	}
    
	visibilityBar.innerHTML = stateMsg+" @ "+time;
}, false);

// Set the initial value
//visibilityBar.innerHTML = document[state]+"<br>";