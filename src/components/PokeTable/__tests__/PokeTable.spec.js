// test/CustomCard.spec.js

// Libraries

import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { mount } from '@vue/test-utils';

// Components
import PokeTable from '../PokeTable';

Vue.use(Vuetify);

describe('PokeTable.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('should have a unique id attribute', () => {
    const wrapper = mount(PokeTable, {
      Vue,
      vuetify,
    });
    expect(wrapper.contains('#PokeTable')).toBeTruthy();
  });
});
