function addBook() {
  let book = document.getElementById("bookName").value;
  let author = document.getElementById("authorName").value;

  if (book !== "" && author !== "") {
    let li = document.createElement("li");
    li.textContent = book + " by " + author;
    document.getElementById("book_List").appendChild(li);
    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
  } else {
    alert("Error");
  }
}

function searchBook() {
  let text = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll("#book_List li").forEach(li => {
    let content = li.textContent.toLowerCase();
    li.style.display = (text === "" || content.includes(text)) ? "" : "none";
  });
}

document.getElementById("search").addEventListener("input", searchBook);
