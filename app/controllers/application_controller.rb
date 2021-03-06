class ApplicationController < ActionController::Base

  helper_method :loggedin?, :current_user, :login, :logout, :require_login

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_login
    render json: ['not logged_in'] unless loggedin?
  end

  def login(user)
    @current_user = user
    session[:session_token] = current_user.reset_session_token!
  end

  def loggedin?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end
  
end
