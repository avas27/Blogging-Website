var signIn=document.getElementById("signIn");

signIn.onclick=function()
                {
                    let signInButton=document.getElementById("close1");
                    document.getElementsByClassName("container")[0].style.display="block";
                    signInButton.onclick=function()
                    {
                        document.getElementsByClassName("container")[0].style.display="none";  
                    }
                }