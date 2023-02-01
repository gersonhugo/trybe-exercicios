const header = document.getElementById("header-container");
header.style.backgroundColor = "green";

const emergencyTasks = document.getElementsByClassName("emergency-tasks");
emergencyTasks[0].style.backgroundColor = "pink";

const noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks");
noEmergencyTasks[0].style.backgroundColor = "yellow";

const emergencyH3 = document.querySelectorAll(".emergency-tasks h3");
emergencyH3[0].style.backgroundColor = "blue";
emergencyH3[1].style.backgroundColor = "blue";

const noEmergencyH3 = document.querySelectorAll(".no-emergency-tasks h3");
noEmergencyH3[0].style.backgroundColor = "black";
noEmergencyH3[1].style.backgroundColor = "black";

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "green";