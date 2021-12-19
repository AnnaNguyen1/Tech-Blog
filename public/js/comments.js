const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#comment").value.trim();

  const blogUrl = window.location.toString().split("/");
  const blogId = blogUrl[2].pop();
  console.log(blogId);
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
