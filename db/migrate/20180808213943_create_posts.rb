class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :name, default: "", null: false
      t.string :tagline, default: "", null: false
      t.string :description, default: "", null: false
      t.string :image_url, default: "", null: false
      t.integer :user_id, null: false

      t.timestamps
    end

  end
end
