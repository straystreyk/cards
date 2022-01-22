class CreateBanks < ActiveRecord::Migration[7.0]
  def up
    create_table :banks, id: :uuid do |t|
      t.string :name
      t.string :description
      t.string :adress
      t.string :phone

      t.timestamps
    end
  end

  def down
    drop_table :banks
  end
end
