import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import DraggableNewComponent from '../../../../../../src/dashboard/components/gridComponents/new/DraggableNewComponent';
import NewDivider from '../../../../../../src/dashboard/components/gridComponents/new/NewDivider';

import { NEW_DIVIDER_ID } from '../../../../../../src/dashboard/util/constants';
import { DIVIDER_TYPE } from '../../../../../../src/dashboard/util/componentTypes';

describe('NewDivider', () => {
  function setup() {
    return shallow(<NewDivider />);
  }

  it('should render a DraggableNewComponent', () => {
    const wrapper = setup();
    expect(wrapper.find(DraggableNewComponent)).to.have.length(1);
  });

  it('should set appropriate type and id', () => {
    const wrapper = setup();
    expect(wrapper.find(DraggableNewComponent).props()).to.include({
      type: DIVIDER_TYPE,
      id: NEW_DIVIDER_ID,
    });
  });
});
