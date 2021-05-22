import React from 'react';
import { shallow } from 'enzyme'
import ExpenseNotFoundPage from '../../components/NotFoundPage'

test('this should render not found page 404', () => {
 const render = shallow(<ExpenseNotFoundPage />)
 expect(render).toMatchSnapshot();
})