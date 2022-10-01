var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

make_comment = () => {
    localStorage.setItem("Name",document.getElementById("name").value);
    localStorage.setItem("Comment",document.getElementById("comment").value);
    document.getElementById("comments").innerHTML +=
    `<div class="comment_UI">
        <div class="content">
            <p>${today}</p>
            <p>Name : ${localStorage.getItem('Name')}</p>
            <p>Comment : ${localStorage.getItem('Comment')}</p>
        </div>
    </div>`;
    document.getElementById("name").value = ''
    document.getElementById("comment").value = ''
}