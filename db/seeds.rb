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

  Post1 = Post.new(name: "Find On-demand peer pressure")
  Post1.description = "
  www.focusmate.com
  When I am not able to focus on working, I use this site to book 1-hour work sessions with Accountability Partners. -- Ti Guo"
  Post1.user_id = user4.id
  Post1.tagline = "[Mac/Windows | focusmate.com] Real Time Accountability Partner Pairing site. "
  Post1.image_url = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539117103/fs.png"
  Post1.snapshoot_url_one = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539117811/focusmatescreen.png"
  # Post1.user = users.sample
  Post1.save

  Post2 = Post.new(name: "Copy paste multiple clips at the same time")
  Post2.description = "Clipboard Management Software is one type of software that significantly improved my productivity. -- Ti Guo"
  Post2.user_id = user4.id
  Post2.tagline = "[Mac | pasteapp.com] Clipboard Management Software. "
  Post2.image_url = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539118300/paste-mac.png"
  # Post2.snapshoot_url_one = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539117811/focusmatescreen.png"
  # Post2.user = users.sample
  Post2.save

  Post3 = Post.new(name: "Find pictures you have taken by discribing them")
  Post3.description = "I can search somethings like 'black bird' or 'golden bridge' -- Ti Guo"
  Post3.user_id = user4.id
  Post3.tagline = "[photos.google.com] Google's photo managing app"
  Post3.image_url = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539119811/gf.png"
  # Post3.snapshoot_url_one = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539117811/focusmatescreen.png"
  # Post3.user = users.sample
  Post3.save

  Post4 = Post.new(name: "Add audio playback button to every line of notes")
  Post4.description = "Good for record lectures and listen back for the things I did not remember well -- Ti Guo"
  Post4.user_id = user4.id
  Post4.tagline = "[IOS/Android/Mac/Windows | onenote.com] Microsoft's onenote's 'audio annotation' function"
  Post4.image_url = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539120027/onenote.png"
  # Post4.snapshoot_url_one = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539117811/focusmatescreen.png"
  # Post4.user = users.sample
  Post4.save

  Post5 = Post.new(name: "Get notification when your email gets opened")
  Post5.description = ""
  Post5.user_id = user4.id
  Post5.tagline = "[Chrome | hubspot.com/products/sales] Chrome extension that tracks when your email gets read even when no reply"
  Post5.image_url = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539123016/hubspot.png"
  # Post5.snapshoot_url_one = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539117811/focusmatescreen.png"
  # Post5.user = users.sample
  Post5.save

  Post6 = Post.new(name: "Create shortcut for automating any computer tasks")
  Post6.description = ""
  Post6.user_id = user4.id
  Post6.tagline = "[Windows | autohotkey.com] AutoHotkey automates keystrokes and mouse clicks to more efficiently handle repetitive tasks"
  Post6.image_url = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539122278/ahk.png"
  # Post6.snapshoot_url_one = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539117811/focusmatescreen.png"
  # Post6.user = users.sample
  Post6.save

  Post7 = Post.new(name: "Use any software to trigger any other software")
  Post7.description = ""
  Post7.user_id = user4.id
  Post7.tagline = "[IFTTT.com] IFTTT (if this, then that) is the easy, free way to get your apps and devices working together."
  Post7.image_url = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539123016/ifttt.png"
  # Post7.snapshoot_url_one = "https://res.cloudinary.com/waterloo-collegiate-institute/image/upload/v1539117811/focusmatescreen.png"
  # Post7.user = users.sample
  Post7.save
end
