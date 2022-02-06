class Api::V1::CardsController < ApplicationController
  # GET /cards
  def index
    puts params
    @cards = Card.where(nil) # creates an anonymous scope
    @cards = @cards.filter_by_interest_rate(params[:interest_rate]) if params[:interest_rate].present?
    render json: @cards
  end

  # GET /cards/:id
  def show
    @card = Card.find(params[:id])
    render json: @card
  end
end
