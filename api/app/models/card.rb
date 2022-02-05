# frozen_string_literal: true

class Card < ApplicationRecord
  # Represents banking card
  #
  scope :filter_by_interest_rate, ->(interest_rate) { where interest_rate: interest_rate }
  # scope :filter_by_credit_limit, ->(location_id) { where location_id: location_id }
  # scope :filter_by_free_period, ->(name) { where("name like ?", "#{name}%") }
  # scope :filter_by_maintenance_price_year, ->(name) {}
  # scope :filter_by_maintenance_price_month, ->(name) {}
  # scope :filter_by_maintenance_cash, ->(name) {}
end

