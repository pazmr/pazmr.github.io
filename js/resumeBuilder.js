
var bio = {"name": 'Maximiliano Paz', "role": "Budget Analyst",
            "contacts":  {"mobile": "(591)-75851523", "email" : "maxpaz2004@hotmail.com",
            "location": "Av. Desaguadero, La Paz,bolivia"}, "picture": "images/myphoto.jpg", "welcome": "Welcome, this is my updated CV",
            "skills": ["Finance","Accounting", "Budgeting","Financial modeling", "Data Analysis","Programming","Microsoft Office","Visual Basic", "Python", "Javascript", "R language", "SQL" ] };
var work = {"jobs":[
    {
        "employer": "American Embassy - La Paz",
        "title": "Budget Analist",
        "location": "Av. 6 de Agosto, La Paz, Bolivia",
        "dates": "6/01/2014-Current",
        "description": "Provides full financial services for OBO (Overrseas Building Operations) and accounting services for PD (Public Diplomacy) and APHIS (Animal Plant Health Inspection Services). Prepares financial reports for PD and records obligations in RFMS. Serves as back-up to the "
+ " budget analysts for ICASS, Program, Rep, MSG, DS and DAO allotments. Manages the post-specific software eFMO and Utility Billing System. Inputs all data and manages all user information for both systems, monitors data integrity, and makes corrections."    },
    {
        "employer": "American Embassy - La Paz",
        "title": "Travel Voucher Examiner",
        "location": "Av. 6 de Agosto, La Paz, Bolivia",
        "dates": "9/15/2009-5/31/2014",
        "description": "Coordinate travel arrangements for the embassy staff"
    },
    {
        "employer": "Banco Union S.A.",
        "title": "Internal Auditor",
        "location": "Av. Camacho, La Paz, Bolivia",
        "dates": "6/1/2009-8/30/2014",
        "description": "Coordinate and perform financial audits"
    },
    {
        "employer": "Erns & Young - Bolivia",
        "title": "Auditor - Assurance Advisory Business Services ",
        "location": "Av. Campos, La Paz, Bolivia",
        "dates": "3/1/2007-5/30/2009",
        "description": "Coordinate and perform financial audits on private companies"
    }
    ],
    "display": function (){
        if (work.jobs.length > 0){
          
          for (job in work.jobs){
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedWorklocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            
            $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
            $(".work-entry:last ").append(formattedWorklocation);
            $(".work-entry:last ").append(formattedWorkDates);
            $(".work-entry:last ").append(formattedWorkDescription);
          }

        }
        }
};
var projects = {
        "projects":[
            {
                "title": "None",
                "dates": "None",
                "description": "None",
                "images": []
            }
            ],
        "display": function (){
            if (projects.projects.length > 0){
          
            for (proj in projects.projects){
            $("#projects").append(HTMLprojectStart);
            
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
            
            
            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last ").append(formattedProjectDates);
            $(".project-entry:last ").append(formattedProjectDescription);
            if (projects.projects[proj].images.length > 0){
                for (image in projects.projects[proj].images){
                    var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]);
                    $(".project-entry:last ").append(formattedProjectImages);        
                }
                
            }
            
          }

        }
        }
};
var education = {
        "schools": [
            {
              "name": "Universidad Católica Boliviana",
              "location": "La Paz, Bolivia",
              "degree": "BA",
              "major": "Public Accounting",
              "dates": 2005,
              "onlineInfo": "http://www.ucb.edu.bo"
            },
            {
              "name": "CEMLA",
              "location": "La Paz, Bolivia",
              "degree": "Diploma",
              "major": "Taxes Management",
              "dates": 2006,
              "onlineInfo": "http://www.cemla-formacion.com/index.php"   
            },
            {
              "name": "Centro Boliviano Americano",
              "location": "La Paz, Bolivia",
              "degree": "Diploma",
              "major": "English proficiency",
              "dates": 2007,
              "onlineInfo": "http://www.cba.edu.bo/"  
            },
            {
              "name": "MPD UCB - HARVARD",
              "location": "La Paz, Bolivia",
              "degree": "Masters",
              "major": "Finance",
              "dates": 2010,
              "onlineInfo": "http://www.epc-ucb.edu.bo/website/postgrado_mpd.php"
            },
            {
              "name": "Universidad Mayor de San Andres",
              "location": "La Paz, Bolivia",
              "degree": "Post-Grade Diploma",
              "major": "Superior Education",
              "dates": 2012,
              "onlineInfo": "http://www.carrera-derecho.edu.bo:8080/index.php/unidades"  
            }
            ],
        "onlineCourse":[
            {
                "title": "Introduction to computer science in python",
                "school": "Edx",
                "dates": 2013,
                "url": "http://edx.org/"
            }    
            ],
            "display": function () {
                if (education.schools.length > 0){
          
                    for (sch in education.schools){
                        $("#education").append(HTMLschoolStart);
                        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[sch].name);
                        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[sch].degree);
                        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[sch].dates);
                        var formattedSchoollocation = HTMLschoolLocation.replace("%data%", education.schools[sch].location);
                        var formattedSchoolMayor = HTMLschoolMajor.replace("%data%", education.schools[sch].major);
            
                        $(".education-entry:last").append(formattedSchoolName);
                        $(".education-entry:last").append(formattedSchoolDegree);
                        $(".education-entry:last").append(formattedSchoolDates);
                        $(".education-entry:last").append(formattedSchoollocation);
                        $(".education-entry:last").append(formattedSchoolMayor);
                        
          }

        }
            }
        };