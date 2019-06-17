class AddInitialBioData < ActiveRecord::Migration[5.2]
  def up
    Bio.create({
      first_name: "Rose",
      last_name: "Swartz",
      email: "rosa.swartz@gmail.com",
      summary: "Rose Swartz is a writer and visual artist \
      from Kalamazoo, Michigan. She currently lives in \
      Portland, Oregon. She practices darkroom photography \
      and primarily writes poetry."
    })
  end
 
  def down
    Bio.find_by(email: "rosa.swartz@gmail.com").destroy
  end
end
