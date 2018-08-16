class Api::PostsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def create
    # debugger;
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def index
    @posts = Post.all
    render :index
  end

  def show
    @post = Post.find(params[:id])
    if @post
      render :show
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  private

  def post_params
    params.require(:post).permit(
      :name,
      :tagline,
      :description,
      :image_url,
      :snapshoot_url_one,
      :snapshoot_url_two,
      :snapshoot_url_three,
      :snapshoot_url_four,
      :snapshoot_url_five
    )
  end

end
