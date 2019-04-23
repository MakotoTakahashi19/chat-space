# require "rails_helper"

# feature "tweet", type: :feature do
#   let(:user) { create(:user)}

#   scenario "post tweet" do
#     # ログイン前には投稿ボタンがない
#     cisit root_path
#     expect(page).to have_no_content("投稿する")
  
#     # ログイン処理
#     visit new_user_session_path
#     fill_in "user_email", with: user.email
#     fill_in "user_password", with: user.password
#     # ログインボタンのクリック
#     find('input[name="commit"]').click
#     # ログイン処理後はrootにリダイレクトされているのを確認
#     expect(current_path).to eq root_path
#     # ログイン状態では投稿ボタンが表示されていることを確認
#     expect(page).to have_content("投稿する")

    
#   end
# end