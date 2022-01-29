class Api::V1::CreditCardsController < ApplicationController
  # GET /credit_cards
  def index
    @credit_cards = CreditCard.all
    render json: @credit_cards
  end

  # GET /credit_cards/:id
  def show
    @credit_card = CreditCard.find(params[:id])
    render json: @credit_card
  end
end
