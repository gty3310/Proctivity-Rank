
json.extract! post, :id, :name, :tagline, :description, :user_id,
  :image_url, :snapshoot_url_one, :snapshoot_url_two, :snapshoot_url_three,
  :snapshoot_url_four, :snapshoot_url_five
json.extract! post.user, :username
