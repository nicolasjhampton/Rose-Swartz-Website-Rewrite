class HomeController < ApplicationController
  def index
    bio = Bio.first
    render 'index', locals: {
      name: bio.full_name,
      summary: bio.summary,
      email: bio.email,
    }
  end
end
