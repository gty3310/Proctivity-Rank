class RemoveColumnsUser < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :image_url
    remove_column :posts, :image_url
    remove_column :users, :headline
  end
end
