
var bio = {
	"name" : "Audrey Lin",
	"role" : "Data Scientist",
	"contacts": {
		"mobile": "222-666-8888",
		"email": "ffhhudacity@gmail.com",
		"github": "ffhhudacity",
		"twitter": "ffhhudacity",
		"location": "San Francisco Bay Area, CA, USA",
	},
	"welcomeMessage": "Welcome to my first online resume",
	"skills": [
	"Creative", 
	"Integrity", 
	"Efficiency",
	"Eager to learn",
	"Javascript"
	],
	"bioPic": "images/desert.jpg",

	"displayBio": function(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

      	$("#header").prepend(formattedName + formattedRole);
      	$("#header").append(formattedbioPic + formattedMessage);
 

      	var contacts = bio["contacts"];
      	var formattedMobile = HTMLmobile.replace("%data%", contacts["mobile"]);
      	var formattedEmail = HTMLemail.replace("%data%", contacts["email"]);
      	var formattedgithub = HTMLgithub.replace("%data%", contacts["github"]);
      	var formattedLocation = HTMLlocation.replace("%data%", contacts["location"]);
      	var contactinfo = formattedMobile + formattedEmail + formattedgithub + formattedLocation;

      	$(contactinfo).appendTo("#topContacts, #footerContacts");
     	
     	$("#header").append(HTMLskillsStart);
      	for(skill in bio.skills){
      		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
      		$("#skills").append(formattedSkills)
      	}
    }
};

bio.displayBio();

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Data Scientist",
			"location": "San Francisco Bay Area",
			"dates": "2011 - current",
			"description": "manage all the big data"
		},
		{
			"employer": "Google",
			"title": "Software Engineer",
			"location": "Mountain View",
			"dates": "2009-2011",
			"description": "develop novel search tools"	
		},
	],

	"displayWork": function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

work.displayWork();


var projects = {
	"projects": [
		{
			"title": "Big Data Work",
			"dates": "2014",
			"description": "Flowchart of Big Data Work",
			"images": ["images/bigdata-1.jpg", "images/bigdata-2.jpg"]
		},
		{
			"title": "Fashion Design Work",
			"dates": "2009-2011",
			"description": "Online Fashion Design",
			"images": ["images/fashion-1.jpg", "images/fashion-2.jpg"]
		},
	],

	"displayProjects": function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
			
		}
	}
};

projects.displayProjects();

var education = {
	"schools": [
		{
			"name": "Stanford University",
			"location": "Stanford, CA",
			"degree": "Masters",
			"major": "Bioengineering",
			"dates": 2012,
			"url": "http://www.stanford.edu/",
		},
		{
			"name": "New York University",
			"location": "New York, NY",
			"degree": "Bachelor of Science",
			"major": "Fashion Design",
			"dates": 2009,
			"url": "http://www.nyu.edu/",
		},
	],
	"onlineCourses": [
		{
			"title": "Javascript Basics",
			"school": "Udacity",
			"date": 2015,
			"url": "http://www.udacity.com/jbb"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"date": 2015,
			"url": "http://wwww.udacity.com/ihc"
		}

	],

	"displayEducation": function() {


		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedName);

			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedDegree);

			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);

			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedMajor);
		
			

		};


		$("#education:last").append(HTMLonlineClasses);


		for (online in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
			$(".education-entry:last").append(formattedonlineTitle);

			var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
			$(".education-entry:last").append(formattedonlineSchool);

			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
			$(".education-entry:last").append(formattedDates);

			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
			$(".education-entry:last").append(formattedURL);
		}


	}
};
education.displayEducation();

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
})
