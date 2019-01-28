var students = [
   
];

function showStringifyJSON(){
    document.write("<br/>");
    document.write("<h3>JSON</h3>");
    document.write("<pre class='alert alert-secondary'>"); // 1) Bootstrap class
    document.write(JSON.stringify(students, undefined, 2));
    document.write("</pre>");
    document.write("<br/>");


    let textJSON = document.getElementById('textJSON');

    textJSON.innerHTML = ("<h3>JSON</h3>");

    
        
}

var names = [];

students.forEach(student => {
    names.push(student.name);
});

//document.writeln("Students are:" + names);

//document.write("<pre>");
//document.writeln(`Average: ${calculateAverage()}`);
//document.write("</pre>");

function calculateAverage(){

    console.log(students.length);
    var average = 0;
    students.forEach(student => {
        average = average + student.score;
    });
    average = average / students.length;

    return average;
}

function loadDataGrid() {

    var i = 0;
    let dataList = document.getElementById("dataList");
    
    while (i < students.length)
    {
        var listItem = document.createElement("section");
        listItem.classList.add("row");
        
        var id = document.createElement("div");
        id.classList.add("col-sm");
        id.innerText =  students[i].id;

        var name = document.createElement("div");
        name.classList.add("col-sm");
        name.innerText =  students[i].name;
        
        var currentScore = students[i].score;

        var score = document.createElement("div");
        score.classList.add("col-sm");
        score.innerText =  students[i].score;

        var passingScore = document.getElementById("passingScoreInput").value;
        if (currentScore <= passingScore)
        {
            score.classList.add("lowScore");
        }
        console.log(students[i]);

        dataList.appendChild(listItem);

        listItem.appendChild(id);
        listItem.appendChild(name);
        listItem.appendChild(score);

        i = i + 1; // Alternatively, use i++;

        // Other ways:
        // i += 2;
        // i += 3;
        
        var textJSON = document.getElementById('textJSON');

        
        
        textJSON.innerHTML = ("<h3>JSON</h3>");
        //textJSON.innerHTML += ("<pre class='alert alert-secondary'>"); // 1) Bootstrap class
        textJSON.innerHTML += (JSON.stringify(students, undefined, 2));
        textJSON.innerHTML += ("</pre>");
        
    
    }
    
}

function displayAverage()
{
   // var resultSection = document.getElementById("resultSection");
    //var paragraph = document.createElement("p");
    var paragraph = document.getElementById("resultSection");
    paragraph.classList.add("badge"); // 2) Bootstrap classes
    paragraph.classList.add("badge-info");

    paragraph.innerText = "Average: " + calculateAverage().toFixed(2);

   //s resultSection.append(paragraph);
}

function refreshScores(){
    let dataList = document.getElementById("dataList");

    while (dataList.childElementCount > 1){
        dataList.removeChild(dataList.lastChild);
    }
    loadDataGrid();
}

function addNewStudent()
{
    var scoreInput = document.getElementById("scoreInput").value;    
    var nameInput = document.getElementById("nameInput").value;
    var idInput = document.getElementById("idInput").value;

    if (scoreInput==null || scoreInput=="" || nameInput==null || nameInput=="" || idInput==null || idInput=="")
        {
            alert("Please Fill All Required Field");
            return false;
    }    
    else {
        students.push({
            id: idInput,
            name: nameInput,
            score: parseInt(scoreInput)
        });

        refreshScores();
    
        document.getElementById("scoreInput").value = null;    
        document.getElementById("nameInput").value = null;
        document.getElementById("idInput").value = null;
    
    }
}

function myReplacer(name, val) {
    if (typeof val === 'string') {
        return val.toString().toUpperCase();  
     } else {
        return val; // return as is
    }
};

// Old-way of loading data (ol). No longer used
function loadData(){

    var i = 0;
    let dataList = document.getElementById("dataList");
    
    while (i < students.length)
    {
        var listItem = document.createElement("li");
        
        console.log(students[i]);
        listItem.innerText = students[i].name;

        dataList.appendChild(listItem);
        i = i + 1; // Alternatively, use i++;

        // Other ways:
        // i += 2;
        // i += 3;
    }
}