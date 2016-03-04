/**
 * Created by Sudhir on 3/3/2016.
 */

function uitext(){
    var txtBox = document.getElementById("txtName");
    txtBox.value="Sudhir"; // Updating the Value in textBox.
}

function uiOption(){
    var years = (new Date()).getFullYear();
    var yearsList=[];
    var yearsSelectElement = document.getElementById("ddlYear")
    for(var i=years-30;i<years;i++){
        yearsList.push(i);
        var optionEle = document.createElement("option");
        optionEle.text=i;
        yearsSelectElement.appendChild(optionEle);
    }
}

function loadEmployeeInfo(){
    var employess = [{firstName:"Sudhir",lastName:"Katikala",age:30,salary:12345,department:"financial"},
        {firstName:"Sudhir1",lastName:"Katikala1",age:31,salary:12346,department:"financial1"},
        {firstName:"Sudhir2",lastName:"Katikala2",age:32,salary:12347,department:"financial2"},
        {firstName:"Sudhir3",lastName:"Katikala3",age:33,salary:12348,department:"financial3"},];
    return employess;
}

function createTableDynamically(){
    var divEle = document.getElementById("loadTableDynamically");
    var tabEle = document.createElement("table");
    var trEle = document.createElement("tr");
    var td1Ele = document.createElement("td");
    var td2Ele = document.createElement("td");
    var td3Ele = document.createElement("td");
    var td4Ele = document.createElement("td");
    var td5Ele = document.createElement("td");
    td1Ele.innerText = "FirstName   ";
    td2Ele.innerText = "LastName";
    td3Ele.innerText = "Age";
    td4Ele.innerText = "Salary";
    td5Ele.innerText = "Department";
    tabEle.appendChild(trEle);
    tabEle.appendChild(td1Ele);
    tabEle.appendChild(td2Ele);
    tabEle.appendChild(td3Ele);
    tabEle.appendChild(td4Ele);
    tabEle.appendChild(td5Ele);
    console.log(tabEle);
    var listEmployees = loadEmployeeInfo();

    for(var i=0; i<listEmployees.length;i++){
        currentEmployee = listEmployees[i];
        var trEle = document.createElement("tr");
        var td1Ele = document.createElement("td");
        var td2Ele = document.createElement("td");
        var td3Ele = document.createElement("td");
        var td4Ele = document.createElement("td");
        var td5Ele = document.createElement("td");
        td1Ele.innerText = currentEmployee.firstName;
        td2Ele.innerText = currentEmployee.lastName;
        td3Ele.innerText = currentEmployee.age;
        td4Ele.innerText = currentEmployee.salary;
        td5Ele.innerText = currentEmployee.department;
        tabEle.appendChild(trEle);
        tabEle.appendChild(td1Ele);
        tabEle.appendChild(td2Ele);
        tabEle.appendChild(td3Ele);
        tabEle.appendChild(td4Ele);
        tabEle.appendChild(td5Ele);
    }
    divEle.appendChild(tabEle);
}
uitext();
uiOption();
createTableDynamically();
