class Api::CommentsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  # def create
  #   @comment = Comment.new(comment_params)
  #   @comment.user_id = current_user.user_id
  #   if @comment.save
  #     render :show
  #     # ???
  #   else
  #     render json: @comment.errors.full_messages, status: 422
  #   end
  # end
  #
  # def index
  #   comments = Comment.all.select()
  #   render :index
  # end
  #
  # def show
  #   @comment = Comment.find(params[:id])
  #   if @comment
  #     render :show
  #   else
  #     render json: @comment.errors.full_messages, status: 404
  #   end
  # end
  #
  # private
  #
  # def comment_params
  #   params.require(:comment).permit(
  #     :name,
  #     :tagline,
  #     :description,
  #     :seating,
  #     :image_url
  #   )
  # end

end
