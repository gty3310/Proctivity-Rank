class Api::UpvotesController < ApplicationController
  def create
    @upvote = Upvote.new(upvote_params)

    if @upvote.save
      render 'api/upvotes/show'
    else
      render @upvote.errors.full_messages, status: 422
    end
  end

  def destroy
    if upvote_params[:user_id]
      @upvote = Upvote.where('user_id = ? AND post_id = ?',
        upvote_params[:user_id],upvote_params[:post_id])
    else
      @upvote = Upvote.where('post_id = ?',
        upvote_params[:post_id])
    end

    @upvote = @upvote[0]
    @upvote.destroy
    render 'api/upvotes/show'
  end

  private

  def upvote_params
    params.require(:upvote).permit(:user_id, :post_id)
  end
end
