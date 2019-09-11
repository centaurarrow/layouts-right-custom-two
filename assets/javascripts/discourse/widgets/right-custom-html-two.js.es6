import { createWidget } from 'discourse/widgets/widget';

export default createWidget('right-custom-html-two', {
  tagName: 'div.right-custom-html-two.widget-container',
  buildKey: () => 'right-custom-html-two',

  defaultState() {
    return {
      renderScheduled: false
    };
  },

  html(attrs, state) {
    console.log('right-custom-html-two');
    if (!state.renderScheduled) {
      let html = this.siteSettings.layouts_right_custom_html_two;

      const category = attrs.category;
      if (category && category.layouts_right_custom_html_two) {
        html = category.layouts_right_custom_html_two;
      }

      Ember.run.scheduleOnce('afterRender', this, function() {
        $("div.right-custom-html-two").html('');
        $("div.right-custom-html-two").append(`<div class='contents'>${html}</div>`);
      });
    //  state.renderScheduled = true;
    }
    return '';
  }
});
