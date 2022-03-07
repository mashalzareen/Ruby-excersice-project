# frozen_string_literal: true

class AddToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :first_name, :string
    add_column :users, :age, :integer
  end
end
