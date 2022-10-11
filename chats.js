function signup(e)
{
    e.preventDefault();

    const signupDetails = {
        name: e.target.name.value, 
        phoneNumber:e.target.phoneNumber.value,
        email: e.target.email.value,
        password: e.target.password.value,
       
    }
    
    console.log(signupDetails)
    // axios.post("http://localhost:3000/signup",signupDetails)
    // .then(result=>{
    //     alert("signup successfully")
    //     window.location = "login.html"
    //     console.log(result)
    }
    
//     .catch(err =>{
//         alert(err) 
//     })
    
//     e.target.email.value="";
//     e.target.password.value="";
// }