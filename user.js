
let datas=[]
function valiadteUser(){
    // console.log("esdrfg")
    let data=document.getElementById("dataDisplay")
    let name1=document.querySelector("#username")
    let password1=document.querySelector("#email")
   let name2=name1.value
  let password2=password1.value
console.log(name2,password2)

if(name2 && password2){
    let array={
        name:name2,
        password:password2
    }
   
        datas.push(array)
        console.log(datas)
    
    display_data()
}

}
function display_data(){
    let dataList=document.getElementById("dataDisplay")
    console.log(dataList)
    dataList.innerHTML=""
    datas.forEach((user)=>{
        let userdata=document.createElement('li');
        userdata.innerHTML=` name :${user.name}  password : ${user.password}`;
        let editButton=document.createElement("button")
        editButton.innerText="Edit";
        editButton.setAttribute("id","edit")
        editButton.onclick=()=>editUser(user)
        let deleteButton=document.createElement("button")
        deleteButton.setAttribute("id","delete")
        deleteButton.innerText="Delete";
        deleteButton.onclick=()=>deleteUser(user)
        
        userdata.appendChild(editButton)
        userdata.appendChild(deleteButton)
        dataList.appendChild(userdata)
    })
}