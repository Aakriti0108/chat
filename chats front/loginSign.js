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
    axios.post("http://localhost:3000/signup",signupDetails)
    .then(result=>{
        alert("signup successfully")
        console.log(result)
    })

    
    .catch(err =>{
        alert(err) 
    })
    
    e.target.name.value="";
    e.target.phoneNumber.value="";
    e.target.email.value="";
    e.target.password.value="";
}

function login(e)
{
    e.preventDefault()
    const loginDetails = {
        email:e.target.email.value,
        password:e.target.password.value
    }
    console.log(loginDetails)
    axios.post("http://localhost:3000/login",loginDetails)
    .then(result=>{
        alert("login successfully")
         window.location = "chat.html"
        localStorage.setItem('token', result.data.token)
        console.log(result)
    })
    .catch(err =>{
        alert(err)
        console.log(err)
    })
    
    e.target.email.value="";
    e.target.password.value="";

}