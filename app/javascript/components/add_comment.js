// document.getElementById("list-options").style.display = "block";
  const button = document.querySelector(".button-add");
  const form = document.querySelector(".list-options");
const addComment = () => {
  if(form) {
      button.addEventListener("click", (event) => {
      form.classList.toggle("expanded");
      setTimeout(() => {
      window.scrollTo({top:document.body.scrollHeight, behavior: 'smooth'});
     },
     0)});
    }
  }

  export { addComment}
