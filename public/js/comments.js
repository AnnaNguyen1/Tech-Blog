const commentFormHandler = async (event) => {
  event.preventDefault();

  const comments = document.querySelector("#comment").value.trim();

  const blogUrl = window.location.toString().split("/");
  console.log(blogUrl);
  const blogId = blogUrl[4];
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
