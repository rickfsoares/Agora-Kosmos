# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: news.proto for package 'news'

require 'grpc'
require 'news_pb'

module News
  module NewsService
    class Service

      include ::GRPC::GenericService

      self.marshal_class_method = :encode
      self.unmarshal_class_method = :decode
      self.service_name = 'news.NewsService'

      rpc :GetNews, ::News::NewsRequest, ::News::NewsResponse
      rpc :GetNewsByTopic, ::News::TopicRequest, ::News::NewsResponse
    end

    Stub = Service.rpc_stub_class
  end
end