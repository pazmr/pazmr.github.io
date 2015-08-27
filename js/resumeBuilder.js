
var bio = {"name": 'Maximiliano Paz', "role": "Budget Analyst",
            "contacts":  {"mobile": "(591)-75851523", "email" : "maxpaz2004@hotmail.com",
            "location": "Desaguadero Ave, La Paz,bolivia"}, "picture": "images/myphoto.jpg", "welcome": "Welcome, this is my updated CV", "facebook": "https://www.facebook.com/maximiliano.r.paz", "twitter": "https://twitter.com/MaximilianoPaz1",
            "linkedin": "https://www.linkedin.com/in/maximimilianopaz",
            "skills": ["Finance","Accounting", "Budgeting","Financial modeling", "Data Analysis","Programming","Microsoft Office","Visual Basic", "Python", "Javascript", "R language", "SQL" ] };
var work = {"jobs":[
    {
        "employer": "American Embassy - La Paz",
        "title": "Budget Analist",
        "location": "Av. 6 de Agosto, La Paz, Bolivia",
        "dates": "6/01/2014-Current",
        "description": "Provides full financial services for OBO (Overseas Building Operations) and accounting services for PD (Public Diplomacy) and APHIS (Animal Plant Health Inspection Services). Prepares financial reports for PD and records obligations in RFMS. Serves as back-up to the "
+ " budget analysts for ICASS, Program, Rep, MSG, DS and DAO allotments. Manages the post-specific software eFMO and Utility Billing System. Inputs all data and manages all user information for both systems, monitors data integrity, and makes corrections."    },
    {
        "employer": "American Embassy - La Paz",
        "title": "Travel Voucher Examiner",
        "location": "Av. 6 de Agosto, La Paz, Bolivia",
        "dates": "9/15/2009-5/31/2014",
        "description": "Under the supervision of the Financial Assistant/Payments supervisor, incumbent prepares travel vouchers reimbursements and travel advances, based on traveler’s supporting documents, US employees, FSNs or grantees invited by U.S. Government (USG). " + 
"Ensures that all travel expenses are in accordance with the Department of State (DOS) travel regulation policies and procedures. Answers travel-reimbursement related questions raised by official travelers at post and from visitors. Incumbent calculates travel reimbursements for all projects personnel. Incumbent reconciles accounts from the credit card and processes them for final payment. " +
"The incumbent pays approximately US$715,000.00 annually. Incumbent is a Specialist in creating financial reports extracted from the COAST and LFMS both financial programs requiered by INL and American managers in Bolivia."
        
    },
    {
        "employer": "Banco Union S.A.",
        "title": "Internal Auditor",
        "location": "Av. Camacho, La Paz, Bolivia",
        "dates": "6/1/2009-8/30/2014",
        "description": "Under direction of Internal Audit Manager, responsible for the timely execution of risk-based internal audits in accordance with the annual audit plan, as well as assisting with other audit matters and projects. " + 
        "Conduct risk assessment of assigned department or functional area in established/required timeline. " + 
        "Establish risk-based audit programs. Determine scope of review in conjunction with the Audit Manager. Review the suitability of internal control design. Conduct audit testing of specified area and identify reportable issues and dimension of risk." + 
        "Determine compliance with policies and procedures. Verbally communicate findings to senior management and draft comprehensive and complete report of audit area."
    },
    {
        "employer": "Ernst & Young - Bolivia",
        "title": "Senior Auditor - Assurance Advisory Business Services ",
        "location": "Av. Campos, La Paz, Bolivia",
        "dates": "2/1/2008-5/30/2009",
        "description": "Ensures successful completion of assigned audit engagements, from start to finish, inclusive of preplanning and wrap up activities. Depending on assigned engagement, reports to one or more member(s) of the Audit Managers. " + 
        " Manages and directs daily activities of more junior auditors assigned to assist the Supervising Auditor during an engagement. Applies risk and control concepts to scenarios encountered and identifies any potential issues. " + 
        "Communicates identified issues with the Audit Managers to ensure any potential concerns are addressed in a timely and effective manner. Delivers the final audit report to the audit managers, and elaborates the internal control report for corrective actions."
    },
    {
        "employer": "Ernst & Young - Bolivia",
        "title": "Junior Auditor - Assurance Advisory Business Services ",
        "location": "Av. Campos, La Paz, Bolivia",
        "dates": "3/1/2007-1/31/2008",
        "description": "Collaborates in planning audits, field work for internal control evaluation, audit tests, confirmation with customers and report preparation, and performing periodic office and administrative duties." + 
        " Reviews documents and composing summary memos, identify, develop, and document audit issues and assist in the preparation of the draft audit report."
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
                "title": "Stock Market simulator (personal project)",
                "dates": "2015",
                "description": "Python script, automatically gets S&P500 tickers from wikipedia, with this, the script obtains historic prices for each stock from yahoo finance, performs a series of market simulations based on custom estratefies and creates buy/sell orders on a simulated protfolio.",
                "images": []
            },
            {
                "title": "AFP payment builder",
                "dates": "2014",
                "description": "Excel Macro, automatically extracts biweekly zipped payroll files, then combines and formats them to present them as the required forms for social security payments. ",
                "images": []
            },
            {
                "title": "Payroll by Agencies",
                "dates": "2014",
                "description": "Excel Macro, automatically splits raw payroll files by agency and archive them into separate files for use of the different agencies the embassy has",
                "images": []
            },
            {
                "title": "INL Financial reporter",
                "dates": "2012",
                "description": "Access application, automatically uploads data from official financial system and performs a series of operations and outputs excel reports for management decision taking",
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
            },
            {
                "title": "Introduction to computer science V2",
                "school": "Edx",
                "dates": 2013,
                "url": "http://edx.org/"
            }
            ],
            "display": function () {
                if (education.schools.length > 0){
          
                    for (sch in education.schools){
                        $("#education").append(HTMLschoolStart);
                        var formattedSchoolName = HTMLschoolName.replace("#", education.schools[sch].onlineInfo).replace("%data%", education.schools[sch].name);
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