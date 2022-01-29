class Api::V1::CardsController < ApplicationController
  # GET /cards
  def index
    @cards = Card.all
    render json: @cards
  end

  # GET /cards/:id
  def show
    @card = Card.find(params[:id])
    render json: @card
  end
end
