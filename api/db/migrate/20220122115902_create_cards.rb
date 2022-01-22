require 'scenic'

class CreateCards < ActiveRecord::Migration[7.0]
  def up
    enable_extension 'uuid-ossp'
    enable_extension 'pgcrypto'
    enable_extension 'hstore'
    Scenic.load

    create_table :cards, id: :uuid do |t|
      t.string :name
      t.string :description
      t.uuid :bank_id
      t.string :type
      t.float :interest_rate
      t.float :credit_limit
      t.float :free_period
      t.float :maintenance_price_year
      t.float :maintenance_price_month
      t.float :cashback
      t.hstore :additional_attributes

      t.timestamps
    end
  end

  def down
    drop_table :cards
  end
end
