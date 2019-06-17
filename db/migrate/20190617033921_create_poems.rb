class CreatePoems < ActiveRecord::Migration[5.2]
  def change
    create_table :poems do |t|
      t.string :title, null: false
      t.string :link
      t.string :journal
      t.text :quote

      t.timestamps
    end
  end
end
