# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all
  Post.destroy_all

  demo_user = User.new(username: "demo_user", password: "password")
  demo_user.headline = "Software Developer"
  demo_user.image_url = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1533941403/project%20idea%20hunt/Screenshot_at_Aug_10_15-45-06.png"
  demo_user.email = "test@gmail.com"

  user1 = User.new(username: "Peter_Todd", password: "password")
  user1.headline = "Product @ Google"
  # user1.image_url = user_images.sample
  user1.email = "test1@gmail.com"

  user2 = User.new(username: "Ty_Huff", password: "password")
  user2.headline = "Designer @drop-box"
  # user2.image_url = user_images.sample
  user2.email = "test2@gmail.com"

  user3 = User.new(username: "Dana_S", password: "password")
  user3.headline = "PM @Facebook"
  # user3.image_url = user_images.sample
  user3.email = "tes3t@gmail.com"

  demo_user.save
  user1.save
  user2.save
  user3.save

  Post1 = Post.new(name: "On-demand peer pressure on FocusMate")
  Post1.description = "When I am not able to focus on working, I use this site to book 1-hour work sessions with Accountability Partners. -- Ti Guo"
  Post1.user_id = user2.id
  Post1.tagline = "Real Time Accountability Partner Pairing site"
  Post1.image_url = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539117103/fs.png"
  # Post1.user = users.sample
  Post1.save

end
