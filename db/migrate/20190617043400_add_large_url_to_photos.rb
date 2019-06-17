class AddLargeUrlToPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :large_url, :string
  end
end
