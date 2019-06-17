class PoemsController < ApplicationController
  def index
    poems = Poem.all.load
    render 'index', locals: { poems: poems }
  end
end
