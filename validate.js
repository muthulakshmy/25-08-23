

function validate(){
    let name1=document.getElementById("text")
let password1=document.getElementById("password")
let name2=name1.value
let password2=password1.value
    if(name2===null || name2===''){
        alert('enter username')
    }
    if(password2===null || password2===''){
        alert('enter password')
    }
    if(name1!== null && password2!==null){
        alert('you have successfully logged')
    }




}
function logout(){
    let login=document.querySelector(".login")
    alert("you have successfully logged out")
    login.style.display="none"
    
}