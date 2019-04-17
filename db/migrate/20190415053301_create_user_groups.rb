class CreateUserGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :user_groups do |t|
      t.references :user, nill: false, foreign_key: true
      t.references :group, nill: false, foreign_key: true
      t.timestamps
    end
  end
end
