class HomeController < ApplicationController
  def index
    render 'index', locals: { name: "Rose" }
  end
end
