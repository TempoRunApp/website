require 'spec_helper'

describe HighVoltage::PagesController do
  render_views

  # We'll perform these two tests for each of our static pages
  # To test a new page, add the name of the page to the list
  @pages = %w(welcome)

  @pages.each do |page|
    it "renders #{page} page" do
      get :show, id: page

      response.should be_successful
      response.should render_template page
    end
  end

end
