# json.array! @posts do |post|
#   json.partial! "api/posts/post", post: @post
# end
@posts.each do |post|
  json.set! post.id do
    json.partial! 'post', post: post
  end
end
