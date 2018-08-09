class AddColumnToUsersAndPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :image_url, :string, default: "https://i.imgur.com/Chr0ujR.png"
    add_column :posts, :image_url, :string, default: "https://i.imgur.com/L7wAE18.png"
    add_column :users, :headline, :string, default: ""
  end
end
