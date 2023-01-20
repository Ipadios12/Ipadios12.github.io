var skillsEl = document.getElementById("skills-list");
// skillsEl.style.color ="red";
// skillsEl.style.fontSize = '25px';

// document.getElementById("skills-list").style.display = "none";

// var oldtext = skillsEl.innerHTML;
// skillsEl.innerHTML = oldtext + "<li>JS</li>";

// skillsEl.innerHTML = skillsEl.innerHTML+ "<li>JS</li>";

// skillsEl.innerHTML+='<li class="favorite">HTML</li>';
// skillsEl.innerHTML+='<li class="favorite">CSS</li>';
// skillsEl.innerHTML+="<li>JS</li>";

var skills = ["HTML", "CSS", "JS","Drive"];

// skillsEl.innerHTML += "<li>"+ skills[0] + "</li>";
// skillsEl.innerHTML += "<li>"+ skills[1] + "</li>";
// skillsEl.innerHTML += "<li>"+ skills[2] + "</li>";

var skillsHTML = "";
var i = 0;

// skillsHTML+= "<li>"+ skills[i] + "</li>";
// i++;
// skillsHTML+= "<li>"+ skills[i] + "</li>";
// i++;
// skillsHTML+= "<li>"+ skills[i] + "</li>";
// i++;
// skillsHTML+= "<li>"+ skills[i] + "</li>";
// i++;

for(var i = 0; i < skills.length; ) {
skillsHTML += "<li>" + skills[i] + "</li>";
i++;
}

skillsEl.innerHTML = skillsHTML;



// display home

function displayhome() {
    document.getElementById("home").style.display ="block";
    }
    function displayskills() {
    console.warn("trebuie sa afisam skills page");
    document.getElementById("skills").style.display ="block";
    }
    
    function displaylanguages() {
    document.getElementById("languages").style.display ="block";
    }
    
    function displayprojects() {
    document.getElementById("projects").style.display ="block";
    }
    
    displayhome();
