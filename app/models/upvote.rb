class Upvote < ApplicationRecord
  belongs_to :user,
    optional: true

  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name:  :Post
end
