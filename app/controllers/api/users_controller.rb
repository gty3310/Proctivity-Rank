class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      if User.find_by_username(@user.username)
        render json: ["Username is taken, lets try to be more creative"], status: 422
      else
        render json: ["Invalid username/password/email"], status: 422
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
