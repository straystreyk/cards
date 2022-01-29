class Api::V1::DebitCardsController < ApplicationController
  # GET /debit_cards
  def index
    @cards = DebitCard.all
    render json: @cards
  end

  # GET /debit_cards/:id
  def show
    @card = DebitCard.find(params[:id])
    render json: @card
  end
end
