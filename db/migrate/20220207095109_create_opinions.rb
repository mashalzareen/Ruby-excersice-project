# frozen_string_literal: true

class CreateOpinions < ActiveRecord::Migration[6.1]
  def change
    create_table :opinions do |t|
      t.string :statment
      t.references :post, index: true, foreign_key: true

      t.timestamps
    end
  end
end
