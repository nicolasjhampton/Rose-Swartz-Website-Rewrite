require 'httparty'

class AdminController < ApplicationController
  # include HTTParty

  # base_uri = "https://www.facebook.com/v3.3/dialog/oauth?"
  

  def sync
    # redirect_to base_url  
    # client_id={app-id}
    # &redirect_uri={redirect-uri}
    # &state={state-param}
    # data = long_lived
    # puts data
    # render 'sync', locals: { data: data }
    # data
    state = "{st=state123abc,ds=123456789}"
    api_url = "https://www.facebook.com/v3.3"
    client_id = "854919137948503"
    # client_secret = "87aa0ddeb0ecadd5214aff730ca8b189"
    user_access_token = "EAAMJi1ZBHc1cBAAKItVXJRn1FcQ2ywp1CTuMTHuh8A5BAYbzoCHYniNmdFsYgHAjI6YhShxG00vy7IVZA9zc6aIssHPZC6kxqrLPikuIPIKrKOtDm6sXaAfIyCbGhXYMBlrdLhXkx7yiGiZAT8LshLR5kSlygYw5l4b2uymJMEX2qHIRaoonQQ77BQ4g3SAZD"
    redirect_uri = "http://localhost:3000/admin/login"
    link = "#{api_url}/dialog/oauth?client_id=#{client_id}&redirect_uri=\"#{redirect_uri}\"&state=\"#{state}\""
    render 'sync', locals: { link: link }
  end

  # def long_lived
  #   state = "farm"
  #   api_url = "https://www.facebook.com/v3.3"
  #   client_id = "854919137948503"
  #   client_secret = "87aa0ddeb0ecadd5214aff730ca8b189"
  #   user_access_token = "EAAMJi1ZBHc1cBAAKItVXJRn1FcQ2ywp1CTuMTHuh8A5BAYbzoCHYniNmdFsYgHAjI6YhShxG00vy7IVZA9zc6aIssHPZC6kxqrLPikuIPIKrKOtDm6sXaAfIyCbGhXYMBlrdLhXkx7yiGiZAT8LshLR5kSlygYw5l4b2uymJMEX2qHIRaoonQQ77BQ4g3SAZD"
  #   redirect_uri = "https://localhost:3000/facebook/callback/"
  #   # 1 Generate Long-Lived Access Token
  #   # response = self.class.get("#{api_url}/oauth/access_token?grant_type=fb_exchange_token&client_id=#{client_id}&client_secret=#{client_secret}&fb_exchange_token=#{user_access_token}")
  #   response = self.class.get("#{api_url}/dialog/oauth?client_id='#{client_id}'&redirect_uri='#{redirect_uri}'&state='#{state}'")
  #   puts response
  #   # access_token = JSON.parse(response.body)['access_token']
  #   # puts access_token

  #   # # 2 Get User ID
  #   # response = self.class.get("#{api_url}/me?access_token=#{access_token}")
  #   # id = JSON.parse(response.body)['id']
  #   # puts id

  #   # # 3 Get Permanent Page Access Token
  #   # response = self.class.get("#{api_url}/#{id}/accounts?access_token=#{access_token}")
  #   # puts response
  #   # data = JSON.parse(response.body)['data']

  #   # puts "#{data}"
  #   # data
  #   response
  # end
end
