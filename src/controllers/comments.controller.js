class CommentsController {
  constructor() {
    this.$addCommentForm = $(".add-comment");
    this.$submitComment = $(".submit");
    this.$userText = $(".user-text");
    this.$allComments = $(".all-comments");
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener();
  }

  addCommentFormListener() {
    //add event listener to all forms
    this.$submitComment.on("click", event => {
      event.preventDefault();
      //capture numerical id to use in comment variable to catch correct comment value
      let id = event.target.id;
      let comment = this.$userText[id].value;
      //find image ID - set same as input ID
      let imageID = `image-${id}`;
      let commentNew = new Comment(comment, id);
      console.log(commentNew);
      this.render(commentNew);
      //Only resetting first form - id only applies to first - fix later
      document.getElementById("add-comment").reset();
    });
  }

  render(commentNew) {
    //variable for correct ul
    let list = `#comments-${commentNew.$id}`;
    //variable sets up commentEl function with new Comment
    let listComment = commentNew.commentEl(commentNew.id, commentNew.comment);
    //finally calls commentEl function with correct ul and posts comment as li
    $(list).append(listComment);
  }
}