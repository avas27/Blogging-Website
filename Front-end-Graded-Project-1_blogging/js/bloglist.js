function deletePost()
{
    document.getElementsByClassName("containerDelete")[0].style.display="block";
}

let noButton=document.getElementById("no");
noButton.onclick=function closeDeletePost()
                    {
                        document.getElementsByClassName("containerDelete")[0].style.display="none";
                    }