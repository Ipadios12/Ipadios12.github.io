var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS","Drive"];

var skillsHTML = "";
var i = 0;

for (var i = 0; i < skills.length; ) {
skillsHTML += "<li>" + skills[i] + "</li>";
i++;
}

skillsEl.innerHTML = skillsHTML;

function hideAllPages() {
    document.getElementById("home").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("languages").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("about").style.display ="none";
  }
  
  function show(id) {
    document.getElementById(id).style.display = "block";
  }
  
  function displayhome() {
    hideAllPages();
    show("home");
  }
  function displayskills() {
    hideAllPages();
    show("skills");
  }
  function displaylanguages() {
    hideAllPages();
    show("languages");
  }
  function displayprojects() {
    hideAllPages();
    show("projects");
  }
  
{
    function displayabout() {
        hideAllPages();
        show("about");
    }
}
  displayhome();
  
