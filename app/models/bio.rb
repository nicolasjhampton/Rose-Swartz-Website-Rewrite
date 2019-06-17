class Bio < ApplicationRecord

    def full_name
        [first_name.capitalize, last_name.capitalize].join(" ")
    end
end
