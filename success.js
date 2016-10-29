
// function showUserInfo() {
	var info = document.getElementById("userLogin");

	var login = localStorage.getItem("actualLogin");

	info.innerHTML = "Witaj " + login;

  var actualEvents = document.getElementById("actualEvents");

  var allEvents = JSON.parse(localStorage.getItem("allEvents"));


    for(i=0; i < allEvents.length; i++) {


    actualEvents.innerHTML +=
      ("Name: <br><br>" + allEvents[i].eventName + "<br><br>" + "Description: <br><br>" + allEvents[i].eventDesc + "<br><br><br>");
};


// window.onload = showUserInfo;

var eventName = document.getElementById("newEventName");
var eventDesc = document.getElementById("descriptionOfNewEvent");

var createNewEvent = document.getElementById("createNewEvent");
createNewEvent.addEventListener("click", validateEvent, false);

function validateEvent () {
	if (eventName.value.length >= 5 && eventDesc.value.length >= 10){
		alert("You created new event " + eventName.value);
		storeEvent();
	}
}

function storeEvent() {
	var existingEvents = JSON.parse(localStorage.getItem("allEvents"));
	if (existingEvents == null) existingEvents = [];

	var name = eventName.value;
	// var date = eventDate.value;
	var desc = eventDesc.value;

	var entryEvent = {
		eventName: name,
		// eventDate: date,
		eventDesc: desc
	};

	localStorage.setItem("entryEvent", JSON.stringify(entryEvent));
	existingEvents.push(entryEvent);
	localStorage.setItem("allEvents",JSON.stringify(existingEvents));
};
