class Api::PostsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  # def create
  #   @post = Post.new(post_params)
  #   if @post.save
  #     render :show
  #   else
  #     render json: @post.errors.full_messages, status: 422
  #   end
  # end
  #
  # def index
  #   posts = Post.all
  #   render :index
  # end
  #
  # def show
  #   @post = Post.find(params[:id])
  #   if @post
  #     render :show
  #   else
  #     render json: @post.errors.full_messages, status: 404
  #   end
  # end
  #
  # private
  #
  # def post_params
  #   params.require(:post).permit(
  #     :name,
  #     :tagline,
  #     :description,
  #     :seating,
  #     :image_url
  #   )
  # end

end
