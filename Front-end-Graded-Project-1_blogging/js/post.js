var editButton=document.getElementById("editPost");
var likeButton=document.getElementById("like");
var commentButton=document.getElementById("comment");
let count=1; //it is used to count the no. of people liked the post
editButton.onclick=function() //makes Post-content editable on clicking edit button on post page
    {   

        var butText=document.getElementById("editPost").innerText;
        let blogBody=document.getElementById("blogBody");
        let blogTitle=document.getElementById("blogTitleNew");
        if(butText.includes("Edit"))
        {
            blogBody.setAttribute("contenteditable","true");  //makes blog body content editable
            blogTitle.setAttribute("contenteditable","true");   //makes blog Title content editable
            blogTitle.style.border="thin solid red";
            blogBody.style.border="thin solid blue";
            document.getElementById("blogTitleNew").focus(); //shows cursor in blog title section for editing
            editButton.innerHTML="Save"; //replaces edit button with save button when post is in editable mode
        }else
        {
            blogBody.setAttribute("contenteditable","false"); //makes content non-editable once user clicked save-button
            blogTitle.setAttribute("contenteditable","false");
            blogTitle.style.border="none";
            blogBody.style.border="none";   
            document.getElementById("editPost").innerHTML="Edit <i class='fa fa-pencil-square-o' aria-hidden='true'></i>"; //replaces save button with edit once editing is saved
        }
    }

likeButton.onclick=function() //shows no. of people liked post on clicking like button on post page
    {
        if(count===1)
        {
            document.getElementById("likeText").innerHTML="1 person likes this!"; //when like button is clicked first time
        }
        else if(count>1)
        {
            document.getElementById("likeText").innerHTML=count+" people have liked this!"; //when like button is clicked n-time
        }

        document.getElementById("like").innerHTML="<i class='fa fa-thumbs-up' aria-hidden='true'></i> Liked!";
        count++;
    }

commentButton.onclick=function addComments() //adds comment in comment area  
    {
        var commentValue = document.getElementById('userComment').value;
        let commentContent = document.getElementById('commentArea').innerHTML;
        document.getElementById('commentArea').innerHTML='<p>'+commentValue+'</p>';  
        document.getElementById('commentArea').innerHTML +=commentContent;
        document.getElementById('userComment').value='';         
    }