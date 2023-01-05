var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS","Drive"];

var skillsHTML = "";
var i = 0;

for(var i = 0; i < skills.length; ) {
skillsHTML += "<li>" + skills[i] + "</li>";
i++;
}

skillsEl.innerHTML = skillsHTML;

document.getElementById('home').style.display ='block';


