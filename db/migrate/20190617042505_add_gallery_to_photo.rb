class AddGalleryToPhoto < ActiveRecord::Migration[5.2]
  def change
    add_reference :photos, :gallery, foreign_key: true
  end
end
