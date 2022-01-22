# frozen_string_literal: true

require 'csv'

def seed_cards
  csv_file_path = 'db/data/cards.csv'
  puts "Seeding cards from #{csv_file_path}..."
  f = File.new(csv_file_path, 'r')
  csv = CSV.new(f)
  headers = csv.shift

  csv.each do |row|
    card_information = {
      name: row[0],
      description: row[1],
      type: row[2],
      interest_rate: row[3],
      credit_limit: row[4],
      free_period: row[5],
      maintenance_price_year: row[6],
      maintenance_price_month: row[7],
      cashback: row[8]
    }
    Card.create(card_information)
  end
  puts "Seeding users from #{csv_file_path} done."
end
