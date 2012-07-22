module Thefrontend

  # General utils and helpful methods
  module Utils

    # Generate a random string of the given length (lcase, upcase and digits)
    def random_string(length)
      rands = ('A'..'Z').to_a + ('a'..'z').to_a + (0..9).to_a
      (0..length).map { rands[rand(rands.length)] }.join
    end

  end

end