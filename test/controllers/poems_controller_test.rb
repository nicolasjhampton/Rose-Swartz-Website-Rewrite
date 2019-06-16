require 'test_helper'

class PoemsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get poems_index_url
    assert_response :success
  end

end
