const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#comment").value.trim();

  const blogUrl = window.location.toString().split("/");
  const blogId = blogUrl[2].pop();
  console.log(blogId);

  if (comment) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        blogId,
        comments,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
