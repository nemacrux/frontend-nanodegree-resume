var work = {
	"jobs": [{
		"employer": "Algocodex S.A.S.",
		"title": "Senior Software Engineer",
		"location": "Bogotá, CO",
		"dates": "2012 - 2017",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt"
	},	
	{
		"employer": "Prodigious Brand Logistics",
		"title": "Senior Software Engineer",
		"location": "Bogotá, CO",
		"dates": "August, 2016 - December, 2016",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt"
	}]
};


var bio = {
	"name": "nestor marin",
	"role": "Software Engineer",
	"welcomeMessage": "Consectetur adipiscing elit",
	"biopic": "images/fry.jpg",
	"contacts": {
		"mobile": "300-221-6591",
		"email": "nestor.mc@gmail.com",
		"github": "nemacrux",
		"twitter": "@nemacrux",
		"location": "Bogotá, CO"
	},
	"skills": ["programming", "java", "js"]
};


var education = {
	"schools": [{
		"name": "Universidad Nacional de Colombia",
		"location": "Bogotá",
		"degree": "BA",
		"majors": ["Systems Engineer"],
		"dates": "2007-2013",
		"url": "www.unal.edu.co"
	}],

	"onlineCourses": [{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": "2017",
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
	}]
};

var projects = {
	"projects": [{
		"title": "Sample project 1",
		"dates": "2017",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		"images": ["images/fry.jpg"]
	}]
};


if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

}

function displayWork(){

	work.jobs.forEach(function(job){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
		$(".work-entry:last").append(formattedEmployer + formattedWorkTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	});

};

function inName(){
	
	var oldName = bio.name;

    spaceIndex = oldName.indexOf(" ");
    firstName = oldName.slice(0,spaceIndex);
    lastName = oldName.slice(spaceIndex+1);
    
    firstName = firstName.toLowerCase();
    firstName = firstName[0].toUpperCase() + firstName.slice(1);
    lastName = lastName.toUpperCase();
    
    var finalName = firstName + " " + lastName;
    
    // Don't delete this line!
    return finalName;
};


projects.display = function(){
	projects.projects.forEach(function(project){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		 
		if(project.images.length > 0){
			project.images.forEach(function(image){
				var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
				$(".project-entry:last").append(formattedProjectImage);
			});
		}
	});
}


displayWork();
projects.display();

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#main").append(internationalizeButton);

/*
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[0].name); 
var formmatedWorkPosition = HTMLworkTitle.replace("%data%", work["jobs"][0].title);

$("#header").prepend(formattedSkills);
$("#header").prepend(formattedWelcomeMsg);
$("#header").prepend(formattedPicture);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedGitHub);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedSchoolName);
$("#header").append(formmatedWorkPosition);
*/
