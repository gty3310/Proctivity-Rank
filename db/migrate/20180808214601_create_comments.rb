class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :body, default: "", null: false
      t.string :tagline, default: "", null: false
      t.string :description, default: "", null: false
      t.string :image_url, default: "", null: false
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      
      t.timestamps
    end
  end
end
