import { shallow } from 'enzyme';
import React from 'react';
import Mask from '../components/Mask';

describe('Test Mask', () => {
    it('测试初始化显示', () => {
        let m = Mask.show();
        expect(document.body.querySelector('.x-mask')).not.toBeNull()
    });
});