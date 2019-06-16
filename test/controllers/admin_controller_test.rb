require 'test_helper'

class AdminControllerTest < ActionDispatch::IntegrationTest
  test "should get sync" do
    get admin_sync_url
    assert_response :success
  end

end
