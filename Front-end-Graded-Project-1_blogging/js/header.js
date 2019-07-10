var signIn=document.getElementById("signIn");
var signUp=document.getElementById("signUp");
var newSignUp=document.getElementById("newSignUp");

signIn.onclick=function() //shows Sign In modal when user clicks on sign In button present on heading
                {
                    let signInButton=document.getElementById("close1");
                    document.getElementsByClassName("container")[0].style.display="block";
                    signInButton.onclick=function()
                    {
                        document.getElementsByClassName("container")[0].style.display="none";  
                    }
                }
signUp.onclick=function signUp() //shows Sign Up modal when user clicks on sign Up button present on heading
                {
                    let signUpButton=document.getElementById("close2");
                    document.getElementsByClassName("container")[1].style.display="block";
                    signUpButton.onclick=function()
                    {
                        document.getElementsByClassName("container")[1].style.display="none";  
                    }
                }
newSignUp.onclick=function() //shows Sign Up modal when user clicks on sign Up link present in Sign In modal
                {
                    document.getElementsByClassName("container")[0].style.display="none";
                    let signUpButton=document.getElementById("close2");
                    document.getElementsByClassName("container")[1].style.display="block";
                    signUpButton.onclick=function()
                    {
                        document.getElementsByClassName("container")[1].style.display="none";  
                    }
                }