export const createUpvote = (upvote) =>{
  return $.ajax({
    method: "POST",
    url:"/api/upvotes",
    data: {upvote}
  });
};

export const deleteUpvote = (upvote) =>{
  return $.ajax({
    method: "DELETE",
    url: "/api/upvotes/1",
    data: {upvote}
  });
};
