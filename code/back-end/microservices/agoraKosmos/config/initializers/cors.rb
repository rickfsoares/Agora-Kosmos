# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin Ajax requests.

# Read more: https://github.com/cyu/rack-cors

#Rails.application.config.middleware.insert_before 0, Rack::Cors do
#  allow do
#    origins "http://localhost:4200", "http://127.0.0.1:4200", "http://172.19.0.3:4200", "http://agora_kosmos_frontend:4200"
#
#    resource "*",
#      headers: :any,
#      expose: :any,
#      methods: [:get, :post, :put, :patch, :delete, :options, :head],
#      credentials: true
#  end
#end
