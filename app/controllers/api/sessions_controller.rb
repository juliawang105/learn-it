class Api::SessionsController < ApplicationController
    def create 
    email = params[:user][:email]
    password = params[:user][:password]

    @user = User.find_by_credentials(email, password)

    if @user 
      login(@user)
      render "/api/users/show"
    else   
      render json: ['Invalid username/password'], status: 401
    end
  end

  def destroy
    if loggedin?
      logout()
      render json: {}
    else
      render json: "", status: 404
    end
  end

end
