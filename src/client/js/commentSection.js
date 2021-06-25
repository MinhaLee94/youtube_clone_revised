const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const commentContainer = document.getElementById("video__comments");

const handleDelete = async (event) => {
  if(event.target.className === "fas fa-trash-alt video__comment-delete"){
    const clickedComment = event.target.parentElement;
    const commentId = clickedComment.dataset.id;
    const videoId = videoContainer.dataset.id;
    const response = await fetch(`/api/videos/${videoId}/comment/${commentId}/delete`, {
      method: "DELETE",
    });
    
    if (response.status === 200) {
      clickedComment.remove();
    }
  }
};

const addComment = async (text, id) => {
  const videoComments = document.querySelector("#video__comments ul");
  const newComment = document.createElement("li");

  newComment.dataset.id = id;
  newComment.className = "video__comment";

  const commentIcon = document.createElement("i");
  commentIcon.className = "fas fa-comment";

  const span = document.createElement("span");
  span.innerText = ` ${text}`;

  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-trash-alt video__comment-delete";
  newComment.appendChild(commentIcon);
  newComment.appendChild(span);
  newComment.appendChild(deleteIcon);
  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}

commentContainer.addEventListener("click", handleDelete);