require 'spec_helper'

describe 'routes for pages' do
  it 'routes /welcome to the welcome page' do
    { get: '/welcome' }.should route_to( controller: 'high_voltage/pages', action: 'show', id: 'welcome' )
  end
end
