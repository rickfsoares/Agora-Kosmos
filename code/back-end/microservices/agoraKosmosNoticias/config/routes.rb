Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "/news", to: "news#index"
  get "/news/filter", to: "news#filter_news_by_topic"
  get "/news/collect", to: "news#collect_news"
  get "/news/pages", to: "news#all_pages_of_news"
  get "/topics", to: "topics#index"
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
