require "test_helper"

class Api::V1::TableControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_table_index_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_table_create_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_table_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_table_destroy_url
    assert_response :success
  end
end
