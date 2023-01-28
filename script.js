


const myWork = Array();

                                        // save work
function saveWork() {
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let work = document.getElementById("work").value;

    // validate time,date,work
    if (date == "") {
        alert("Enter date");
        document.getElementById("date").focus()
        return false
    }
    if (time == "") {
        alert("Enter time");
        document.getElementById("time").focus()
        return false

    }
    if (work == "") {
        alert("Enter work");
        document.getElementById("work").focus()
        return false

    }

    let newid = getmaxidplus1();
    const mywork = {id:newid, workdate: date, worktime: time, actualWork: work };
    myWork.push(mywork);
    alert("saved")
    showWork();
    //console.log(myWork);
}

function getmaxidplus1(){
    let maxid = 0;
    for (let i = 0; i < myWork.length; i++) {
        if(myWork[i].id > maxid)
        maxid = myWork[i].id
        
    }
    return maxid+1;
}

                                        // show work
function showWork(){
    let workstr = `<table class="table table-bordered">`;
    workstr += `<tr>`
    workstr += `<th>No.</th>`
    workstr += `<th>Date</th>`
    workstr += `<th>Time</th>`
    workstr += `<th class="w-50">Work</th>`
    workstr += `<th>Action</th>`
    workstr += `</tr>`

    myWork.forEach((value,index)=>{
        workstr += `<tr>`
        workstr += `<td>${index+1}</td>`
        workstr += `<td>${value.workdate}</td>`
        workstr += `<td>${value.worktime}</td>`
        workstr += `<td class="w-50">${value.actualWork}</td>`  
        workstr += `<td><button class="btn btn-primary" onclick="deleteWork(${value.id})">x</button></td>`
        workstr += `</tr>`
    })

    workstr += `</table>`;

    document.getElementById("divWork").innerHTML = workstr;
}

showWork();

function deleteWork(id)
{
    //alert("deleting" + id)

   if(confirm("Sure to delete ?"))
   {
    for (let i = 0; i < myWork.length; i++) {
        if(myWork[i].id == id)
        {
            let index = i;
            myWork.splice(index,1);
            break;
        }
        
    }
   }
   showWork();

}
document.ele
