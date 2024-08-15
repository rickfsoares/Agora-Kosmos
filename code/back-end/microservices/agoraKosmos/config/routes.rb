Rails.application.routes.draw do
  get "/stocks", to: "stocks#index"
  get "/stocks/pages", to: "stocks#all_pages_stock"
  get "/stocks/search", to: "stocks#seach_stock"
  get "/stocks/:id", to: "stocks#show"
  get "/news", to: "news#get_news"
  get "/news/filter", to: "news#filter_news"
  get "/news/pages", to: "news#get_all_pages_of_news"
  get "/topics", to: "topic#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end