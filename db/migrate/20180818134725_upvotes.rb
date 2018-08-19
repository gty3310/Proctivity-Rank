class Upvotes < ActiveRecord::Migration[5.1]
  def change
    create_table :upvotes do |t|
      t.integer :user_id
      t.integer :post_id, null: false
      t.timestamps
    end

    add_index :upvotes, :user_id
    add_index :upvotes, :post_id

  end
end
