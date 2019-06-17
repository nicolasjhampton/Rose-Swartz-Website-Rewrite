class SeedGalleryTable < ActiveRecord::Migration[5.2]
  def up
    seed.each do |gallery|
      Gallery.create!(name: gallery)
    end
  end

  def down
    seed.each do |gallery|
      Gallery.find_by(name: gallery).destroy
    end
  end

  def seed
    [
      "Portland Spring 2016",
      "Pacific Northwest",
      "All the Old Things",
      "Michigan",
      "China",
      "Elsewhere"
    ]
  end
end
