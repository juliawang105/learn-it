class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true 
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :password_digest, :session_token, presence: true

    after_initialize :ensure_session_token 
    attr_reader :password

    has_many :created_decks,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: 'Deck'
    
    has_many :saves,
        primary_key: :id, 
        foreign_key: :learner_id, 
        class_name: 'Save'
    
    has_many :saved_decks,
        through: :saves, 
        source: :deck

    has_many :scores,
        primary_key: :id,
        foreign_key: :learner_id,
        class_name: 'Score'
    
    
   
    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        @user && @user.is_password?(password) ? @user : nil
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
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
