import React from 'react';
import Game from './';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import cardDeckGenerator from '../../helper/cardDeckGenerator';

Enzyme.configure({ adapter: new Adapter() });

describe('<Game />', () => {

	let wrapper;
	const props = {
		cards: cardDeckGenerator()
	}

	beforeEach(()=> {
		wrapper = shallow(
			<Game {...props} />
		);
	});

	it('renders the component', () => {
		expect(wrapper.length).toEqual(1);
	});

});
