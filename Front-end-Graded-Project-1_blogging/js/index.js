var allPostButton=document.getElementById("allPost");
var createPost=document.getElementById("createPostButton");

allPostButton.onclick=function() //redirects to bloglist-page when user clicks on all post button present on index page
                        {
                            window.open("html/bloglist.html");
                        }

createPost.onclick=function() //shows Create Post modal when user clicks on Create Post button 
                        {  
                            let createPostClose=document.getElementById("close3");
                            document.getElementsByClassName("container")[2].style.display="block";
                            createPostClose.onclick=function()
                            {
                                document.getElementsByClassName("container")[2].style.display="none";  
                            }
                        }