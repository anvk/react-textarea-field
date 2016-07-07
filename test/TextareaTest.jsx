import expect from 'unexpected';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Textarea from '../src/Textarea';

const shallowRenderer = TestUtils.createRenderer();

describe('Your Component Test Case', () => {

  it('should render', () => {
    shallowRenderer.render(<Textarea />);
    expect(shallowRenderer.getRenderOutput(), 'to be defined');
  });

});
