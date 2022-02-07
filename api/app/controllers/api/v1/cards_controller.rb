class Api::V1::CardsController < ApplicationController
  # GET /cards
  def index
    puts params
    @cards = Card.where(nil) # creates an anonymous scope
    @cards = @cards.filter_by_interest_rate_to(params[:interest_rate_to]) if params[:interest_rate_to].present?
    @cards = @cards.filter_by_credit_limit_from(params[:credit_limit_from]) if params[:credit_limit_from].present?
    @cards = @cards.filter_by_credit_limit_to(params[:credit_limit_to]) if params[:credit_limit_to].present?
    @cards = @cards.filter_by_free_period_from(params[:free_period_from]) if params[:free_period_from].present?
    @cards = @cards.filter_by_free_period_to(params[:free_period_to]) if params[:free_period_to].present?
    @cards = @cards.filter_by_maintenance_price_year_from(params[:maintenance_price_year_from]) if params[:maintenance_price_year_from].present?
    @cards = @cards.filter_by_maintenance_price_year_to(params[:maintenance_price_year_to]) if params[:maintenance_price_year_to].present?
    @cards = @cards.filter_by_maintenance_price_month_from(params[:maintenance_price_month_from]) if params[:maintenance_price_month_from].present?
    @cards = @cards.filter_by_maintenance_price_month_to(params[:maintenance_price_month_to]) if params[:maintenance_price_month_to].present?
    @cards = @cards.filter_by_cashback_from(params[:cashback_from]) if params[:cashback_from].present?
    @cards = @cards.filter_by_cashback_to(params[:cashback_to]) if params[:cashback_to].present?
    render json: @cards
  end

  # GET /cards/:id
  def show
    @card = Card.find(params[:id])
    render json: @card
  end
end
