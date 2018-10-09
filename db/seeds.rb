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

  user4 = User.new(username: "Ti_Guo", password: "password")
  user4.headline = "Mechatronics Engineering Student @ University of Waterloo"
  # user4.image_url = user_images.sample
  user4.email = "guoty3310@gmail.com"

  demo_user.save
  user1.save
  user2.save
  user3.save
  user4.save

  Post1 = Post.new(name: "On-demand peer pressure on FocusMate")
  Post1.description = "
  www.focusmate.com
  When I am not able to focus on working, I use this site to book 1-hour work sessions with Accountability Partners. -- Ti Guo"
  Post1.user_id = user4.id
  Post1.tagline = "Real Time Accountability Partner Pairing site. Mac/Windows"
  Post1.image_url = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539117103/fs.png"
  Post1.snapshoot_url_one = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539117811/focusmatescreen.png"
  # Post1.user = users.sample
  Post1.save

  Post2 = Post.new(name: "Copy paste multiple clips at the same time using Paste")
  Post2.description = "Clipboard Management Software is one type of software that significantly improved my productivity. -- Ti Guo"
  Post2.user_id = user4.id
  Post2.tagline = "Clipboard Management Software. Mac"
  Post2.image_url = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539118300/paste-mac.png"
  # Post2.snapshoot_url_one = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539117811/focusmatescreen.png"
  # Post2.user = users.sample
  Post2.save
end
