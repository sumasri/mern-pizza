import {render,screen} from '@testing-library/react'
import { Provider } from 'react-redux'
import Cartscreen from '../Cartscreen'
import store from '../../store'

test('should render navbar component',()=>{
    render(
    <Provider store={store}>
         <Cartscreen/>
    </Provider>   
    
    );
    const navElement= screen.getByTestId('cart-test')
    expect(navElement).toBeInTheDocument();
})
