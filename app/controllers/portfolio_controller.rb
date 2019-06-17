class PortfolioController < ApplicationController
  def index
    render 'index', locals: { portfolio: galleries }
  end

  def galleries
    Gallery.all.map do |gallery|
      photos = gallery.photos.pluck(:image_url, :large_url)
      { 
        name: gallery.name, 
        photos: photos.map {|photo| { source: photo[0], large: photo[1] } }
      }
    end
  end
end
