# Productivity Rank

[ProductivityRank live](https://productivity-rank.herokuapp.com/#/)

Productivity Rank is a full-stack web application modeled after Product Hunt.  It is built on a Ruby on Rails backend, PostgreSQL database, and React.js/Flux architecture frontend.

![Alt text](/readme_image/homepage.png?raw=true "Optional Title")

## Idea

Product Hunt is one of my favorite site. It features surfacing a new batch of high quality new products.

The idea of this site was to maintain a list of my personal favorite productivity tips and let the viewer see and vote for my productivity tips.

## Features and Implementation

Product Viewing and Adding
User profile
Productivity Tips Search

## Project Design
Productivity Rank was designed with simplicity and elegance as its primary goals. Considering the two-week time period, it was decided to focus on a core set of features that ran smoothly and bug-free. Keeping code manageable was prioritized over cloning every major feature of the target app.

### Design Documents
+ [MVP List](https://github.com/gty3310/Proctivity-Rank/wiki/MVP-list)
+ [Database Schema](https://github.com/gty3310/Proctivity-Rank/wiki/Database-Schema)
+ [Routes](https://github.com/gty3310/Proctivity-Rank/wiki/Frontend-Routes)
+ [Sample State](https://github.com/gty3310/Proctivity-Rank/wiki/Sample-State)
+ [Backend Routes](https://github.com/gty3310/Proctivity-Rank/wiki/Backend-Routes)

## Technologies
Rails was chosen due to its out-of-the-box support for relational databases and RESTful architecture.

Frontend Redux states are set up in a way such that there are separate reducers and actions for stories, comments, likes, follows, users, and errors. This keeps the state normalized, easing the task of keeping things up-to-date with changes in the database.

<!-- ##Code Snippet -->
