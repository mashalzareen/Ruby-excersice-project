# frozen_string_literal: true

class Post < ApplicationRecord
  belongs_to :user
  has_many :opinions, dependent: :delete_all
  has_many :likes, dependent: :delete_all
  has_one_attached :avatar
  scope :published, -> { where(published: true) }
  def liked?(_user)
    # !!self.likes.find{|like| like.user_id == user.id}
  end
end