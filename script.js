let id = 0;
function addStudent(){
    //getting the value from the input
    let studentName = document.getElementById("Name").value;

    


    if(studentName===""){
        alert("Please add a name");

    }else{
        id++;
        document.getElementById('listStudents').innerHTML+=(
            `<li id="${id}"> 
                <div class="li-Student"><i class="fa-solid fa-bars"></i> ${studentName} 
                <button onclick="deleteStudent(${id})"> <i class="fa-solid fa-trash-can"></i> </button> </div>  
            </li>
            `);

        document.getElementById("Name").value="";
    }



   
    

}

function deleteStudent(id){
    document.getElementById(id).remove();

    
}

function replaceStudent(){

}