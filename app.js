function post(e) {
    console.log("post");
    var title = document.getElementById("title");
    var description = document.getElementById("description");
    var postContainer = document.getElementById("postContainer");

    if (title.value.trim() && description.value.trim()) {
        postContainer.innerHTML += `<div class="card mt-2">
            <div class="card-header bgColor text-light">
                @blog
            </div>
            <div class="card-body">
                <figure>
                    <blockquote class="blockquote">
                        <p>${title.value}</p>
                    </blockquote>
                    <figcaption class="blockquote-footer mt-1">
                        <em>${description.value}</em>
                    </figcaption>
                </figure>
            </div>
            <div class="ms-auto m-2">
                <button class="btn bgColor text-light px-4" onclick="editPost(this)">Edit</button>
                <button class="btn btn-danger" onclick="deletePost(this)">Delete</button>
            </div>
        </div>`;

        title.value = "";
        description.value = "";
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fill both title and description!",
        });
    }
}

function deletePost(e) {
    e.parentNode.parentNode.remove();
}

function editPost(e) {
    var card = e.parentNode.parentNode;
    var oldTitle = card.getElementsByTagName("p")[0].innerText;
    var oldDescription = card.getElementsByTagName("em")[0].innerText;

    document.getElementById("title").value = oldTitle;
    document.getElementById("description").value = oldDescription;

    card.remove();
}
