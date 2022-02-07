# frozen_string_literal: true

class Card < ApplicationRecord
  # Represents banking card
  #
  scope :filter_by_interest_rate_from, ->(interest_rate) { where('interest_rate > ?', interest_rate) }
  scope :filter_by_interest_rate_to, ->(interest_rate) { where('interest_rate < ?', interest_rate) }
  scope :filter_by_credit_limit_from, ->(credit_limit_from) { where('credit_limit > ?', credit_limit_from) }
  scope :filter_by_credit_limit_to, ->(credit_limit_to) { where('credit_limit < ?', credit_limit_to) }
  scope :filter_by_free_period_from, ->(free_period_from) { where('free_period > ?', free_period_from) }
  scope :filter_by_free_period_to, ->(free_period_to) { where('ree_period < ?', free_period_to) }
  scope :filter_by_maintenance_price_year_from, ->(maintenance_price_year_from) { where('maintenance_price_year > ?', maintenance_price_year_from) }
  scope :filter_by_maintenance_price_year_to, ->(maintenance_price_year_to) { where('maintenance_price_year < ?', maintenance_price_year_to) }
  scope :filter_by_maintenance_price_month_from, ->(maintenance_price_month_from) { where('maintenance_price_month > ?', maintenance_price_month_from) }
  scope :filter_by_maintenance_price_month_to, ->(maintenance_price_month_to) { where('maintenance_price_month < ?', maintenance_price_month_to) }
  scope :filter_by_cashback_from, ->(cashback_from) { where('cashback > ?', cashback_from) }
  scope :filter_by_cashback_to, ->(cashback_to) { where('cashback < ?', cashback_to) }
end

