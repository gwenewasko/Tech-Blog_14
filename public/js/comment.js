const newComment = async (event) => {
  const title = document.querySelector("#new-comment").value.trim();
  const post_id = document.querySelector('input[name="post_id"]').value.trim();

  if (title) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: {
        "Content-Type": "applications/json",
      },
    });
    if (response.ok) {
    } else {
      alert("I could not post your comment.");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newComment);
