var bookName = document.getElementById("bookName");
var bookUrl = document.getElementById("bookUrl");

var bookList = [] ; 

if (localStorage.getItem("books") != null)
{
    bookList = JSON.parse(localStorage.getItem("books"));
    display()
}

function addBook()
{
    var book = {
        name : bookName.value,
        url : bookUrl.value
    }
bookList.push(book);
localStorage.setItem("books" , JSON.stringify(bookList))
display(); 
}


function display()
{
    temp = ""
    for (var i = 0 ; i < bookList.length ;i++)
    {
        temp+=`
            <tr>
            <td>${i}</td>
            <td>${bookList[i].name}</td>
            <td><a href="${bookList[i].url}" class="btn btn-primary" target="_target">Visit</a></td>
            <td><button type="button" onclick= "deleteItem(${i})" class="btn btn-danger">Delete</button></td>
        </tr>
        `
    }
    document.getElementById('data').innerHTML=temp;
}



function deleteItem(i)
{
bookList.splice(i,1); 
    localStorage.setItem("books", JSON.stringify(bookList))
display()
}
var regex1 = /^[a-zA-Z]{4,10}$/;
var bookName = document.getElementById('bookName');

bookName.addEventListener("input", verBookName);

function verBookName()
{
    if (regex1.test(bookName.value)) {
        bookName.classList.remove("is-invalid");
        bookName.classList.add("is-valid");
        return true ;
    } else {
        bookName.classList.remove("is-valid");
        bookName.classList.add("is-invalid");
        return false; 
    }
}

const regex2 = /^(http|https)?:\/\/[^\s/$.?#].[^\s]*$/i;
var bookUrl = document.getElementById('bookUrl');

bookUrl.addEventListener("input", verBookURL);

function verBookURL()
{
    if (regex2.test(bookUrl.value)) {
        bookUrl.classList.remove("is-invalid");
        bookUrl.classList.add("is-valid");
        return true ; 
    } else {
        bookUrl.classList.remove("is-valid");
        bookUrl.classList.add("is-invalid");
        return false;
    }
}

var btn = document.getElementById("addButton");

btn.addEventListener("mouseover", function () {
    updateButtonState();
});

function updateButtonState() {
    if (!verBookName() || !verBookURL()) {
        btn.classList.add("btn-secondary");
        btn.classList.add("disabled");
    } else {
        btn.classList.remove("disabled");
        btn.classList.remove("btn-secondary");
    }
}

bookName.addEventListener("input", updateButtonState);
bookUrl.addEventListener("input", updateButtonState);