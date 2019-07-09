var signIn=document.getElementById("signIn");
var signUp=document.getElementById("signUp");
var newSignUp=document.getElementById("newSignUp");

signIn.onclick=function()
                {
                    let signInButton=document.getElementById("close1");
                    document.getElementsByClassName("container")[0].style.display="block";
                    signInButton.onclick=function()
                    {
                        document.getElementsByClassName("container")[0].style.display="none";  
                    }
                }
signUp.onclick=function signUp()
                {
                    let signUpButton=document.getElementById("close2");
                    document.getElementsByClassName("container")[1].style.display="block";
                    signUpButton.onclick=function()
                    {
                        document.getElementsByClassName("container")[1].style.display="none";  
                    }
                }
newSignUp.onclick=function()
                {
                    document.getElementsByClassName("container")[0].style.display="none";
                    let signUpButton=document.getElementById("close2");
                    document.getElementsByClassName("container")[1].style.display="block";
                    signUpButton.onclick=function()
                    {
                        document.getElementsByClassName("container")[1].style.display="none";  
                    }
                }