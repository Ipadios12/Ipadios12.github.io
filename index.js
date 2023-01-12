var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS","Drive"];

var skillsHTML = "";
var i = 0;

for (var i = 0; i < skills.length; ) {
skillsHTML += "<li>" + skills[i] + "</li>";
i++;
}

skillsEl.innerHTML = skillsHTML;

var pageIds = ["home", "skills", "languages", "projects",];

function hideAllPages() {
  pageIds.forEach(function(pageId) {
    hide(pageId);
  });
   
  }
  
  function show(id) {
    document.getElementById(id).style.display = "block";
  }
  
  function hide(id) {
     document.getElementById(id).style.display = "none";
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
    function displayprojects() {
        hideAllPages();
        show("projects");
    }
}
  displayhome();
  
