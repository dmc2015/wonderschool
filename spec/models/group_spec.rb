require 'rails_helper'


RSpec.describe Group, type: :model do
  describe Group do

    it 'is valid with valid attributes' do
      group = create(:group, {:id => "1", :group => "My Group"})
      expect(group).to be_valid
    end

    it 'it is not valid without a group' do
      group = build(:group, {:group => nil})
      expect(group).not_to be_valid
    end

    it "3 groups should be created" do
    3.times{ |index| group = create(:group, {:id => index, :group => index}) }
      expect(Group.all.count).to eq(3)
    end

  end
end
