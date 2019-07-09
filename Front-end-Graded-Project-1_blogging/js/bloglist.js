//it displays delete modal when user clicks TRASH-icon on each post
function deletePost()
        {
            document.getElementsByClassName("containerDelete")[0].style.display="block";
        }

//it hides delete modal when user clicks "no" option on delete modal/dialog-box
let noButton=document.getElementById("no");
noButton.onclick=function closeDeletePost()
                    {
                        document.getElementsByClassName("containerDelete")[0].style.display="none";
                    }