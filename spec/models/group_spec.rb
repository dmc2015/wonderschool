require 'rails_helper'

RSpec.describe Group, type: :model do
  describe Group do

    it 'is valid with valid attributes' do
      expect(Group.new).to be_valid
    end

    let(:group) {create(:group, {group: nil})}
    it 'it is not valid without a group' do
      expect(group).to_not be_valid
    end


    # let(:group) {3.times.map {create(:group)}}
    # it "3 groups should be created" do
    #   expect(Group.all.count).to eq(3)
    # end

  end
end
