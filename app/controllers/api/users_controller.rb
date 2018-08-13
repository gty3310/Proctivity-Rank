class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    elsif User.find_by_username(@user.username)
      render json: ["Username is taken, lets try to be more creative"], status: 422
    elsif User.find_by_email(@user.email)
      render json: ["Someone have already registored with this email, please try to go log in instead"], status: 422
    else
      render json: ["Invalid username/password/email"], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
