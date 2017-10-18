import React from 'react';
import { shallow } from 'enzyme';
import Game from './';

describe('<Game />', () => {

	let wrapper;

	beforeEach(()=> {
		wrapper = shallow(
			<Game {...props}/>
		);
	});

	it('renders the component', () => {
		expect(wrapper.length).toEqual(1);
	});

});
