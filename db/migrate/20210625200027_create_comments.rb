class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :project_id
      t.string :u_name
      t.text :content

      t.timestamps
    end
  end
end
