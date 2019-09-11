# name: layouts-right-custom-html-two
# about: Right custom html number two widget for use with Discourse Layouts
# version: 0.1
# authors: Angus McLeod & Raghu Avula

DiscourseEvent.on(:layouts_ready) do
  DiscourseLayouts::WidgetHelper.add_widget('right-custom-html-two', position: 'right', order: '2')
end

after_initialize do
  Site.preloaded_category_custom_fields << 'layouts_right_custom_html_two' if Site.respond_to? :preloaded_category_custom_fields
  add_to_serializer(:basic_category, :layouts_right_custom_html_two) { object.custom_fields['layouts_right_custom_html_two'] }
end
