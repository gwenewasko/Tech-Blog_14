const newPost = async (event) => {
  const title = document.querySelector("#new-comment").value.trim();
  const post_id = document.querySelector('input[name="post_id"]').value.trim();

  if (title) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ title, post_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to create post");
    }
  }
};

document.querySelector(".new-comment-form").addEventListener("submit", newPost);
