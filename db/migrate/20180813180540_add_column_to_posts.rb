class AddColumnToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :snapshoot_url_one, :string
    add_column :posts, :snapshoot_url_two, :string
    add_column :posts, :snapshoot_url_three, :string
    add_column :posts, :snapshoot_url_four, :string
    add_column :posts, :snapshoot_url_five, :string
  end
end
