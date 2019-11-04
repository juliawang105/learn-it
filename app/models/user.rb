class User < ApplicationRecord
    validates :username, :email, :username, presence: true, uniquess: true 
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :password_digest, :session_token, presence: true

    after_initialize :ensure_session_token 
    attr_reader :password
    
   
    def self.find_by_credentials(username, password)
        @user = User.find_by(username: username)
        @user && @user.is_password?(password) ? @user : nil
    end

    def password=(password)
        self.password_digest=BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

    def reset_session_token!
        self.update!(session_token:SecureRandom.urlsafe_base64(16) )
        self.session_token
    end
end
