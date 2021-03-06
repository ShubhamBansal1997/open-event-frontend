import Route from '@ember/routing/route';

export default Route.extend({
  titleToken() {
    return this.get('l10n').t('Create');
  },
  model() {
    return this.get('store').createRecord('discount-code', {
      event   : this.modelFor('events.view'),
      usedFor : 'ticket'
    });
  },
  resetController(controller) {
    this._super(...arguments);
    controller.get('model').unloadRecord();
  }
});
