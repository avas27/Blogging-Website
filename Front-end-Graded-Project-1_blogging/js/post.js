var editButton=document.getElementById("editPost");
editButton.onclick=function()
    {   

        var butText=document.getElementById("editPost").innerText;
        let blogBody=document.getElementById("blogBody");
        let blogTitle=document.getElementById("blogTitleNew");
        if(butText.includes("Edit"))
        {
            blogBody.setAttribute("contenteditable","true");  
            blogTitle.setAttribute("contenteditable","true"); 
            blogTitle.style.border="thin solid red";
            blogBody.style.border="thin solid blue";
            document.getElementById("blogTitleNew").focus();
            editButton.innerHTML="Save";
        }else
        {
            blogBody.setAttribute("contenteditable","false");
            blogTitle.setAttribute("contenteditable","false");
            blogTitle.style.border="none";
            blogBody.style.border="none";   
            document.getElementById("editPost").innerHTML="Edit <i class='fa fa-pencil-square-o' aria-hidden='true'></i>";
        }
    }