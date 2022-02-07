class Api::V1::CreditCardsController < ApplicationController
  # GET /credit_cards
  def index
    @credit_cards = CreditCard.all
    @credit_cards = @credit_cards.filter_by_interest_rate_to(params[:interest_rate_to]) if params[:interest_rate_to].present?
    @credit_cards = @credit_cards.filter_by_credit_limit_from(params[:credit_limit_from]) if params[:credit_limit_from].present?
    @credit_cards = @credit_cards.filter_by_credit_limit_to(params[:credit_limit_to]) if params[:credit_limit_to].present?
    @credit_cards = @credit_cards.filter_by_free_period_from(params[:free_period_from]) if params[:free_period_from].present?
    @credit_cards = @credit_cards.filter_by_free_period_to(params[:free_period_to]) if params[:free_period_to].present?
    @credit_cards = @credit_cards.filter_by_maintenance_price_year_from(params[:maintenance_price_year_from]) if params[:maintenance_price_year_from].present?
    @credit_cards = @credit_cards.filter_by_maintenance_price_year_to(params[:maintenance_price_year_to]) if params[:maintenance_price_year_to].present?
    @credit_cards = @credit_cards.filter_by_maintenance_price_month_from(params[:maintenance_price_month_from]) if params[:maintenance_price_month_from].present?
    @credit_cards = @credit_cards.filter_by_maintenance_price_month_to(params[:maintenance_price_month_to]) if params[:maintenance_price_month_to].present?
    @credit_cards = @credit_cards.filter_by_cashback_from(params[:cashback_from]) if params[:cashback_from].present?
    @credit_cards = @credit_cards.filter_by_cashback_to(params[:cashback_to]) if params[:cashback_to].present?
    render json: @credit_cards
  end

  # GET /credit_cards/:id
  def show
    @credit_card = CreditCard.find(params[:id])
    render json: @credit_card
  end
end
