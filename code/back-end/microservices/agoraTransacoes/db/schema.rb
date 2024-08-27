# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2024_08_24_201933) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "news", force: :cascade do |t|
    t.string "title"
    t.string "summary"
    t.string "url"
    t.string "bannerImage"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "topic_id", null: false
    t.index ["topic_id"], name: "index_news_on_topic_id"
  end

  create_table "stocks", force: :cascade do |t|
    t.string "nome"
    t.string "descricao"
    t.decimal "cotacao"
    t.integer "volume"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "topics", force: :cascade do |t|
    t.string "nome"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "transactions", force: :cascade do |t|
    t.integer "idMercadoPago"
    t.string "status"
    t.decimal "valor"
    t.string "qrCodeBase64"
    t.string "qrCode"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "dataCriacao", precision: nil
  end

  add_foreign_key "news", "topics"
end