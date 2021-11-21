import {render,screen} from '@testing-library/react'
import { Provider } from 'react-redux'
import Navbar from '../Navbar'
import store from '../../store'

test('should render navbar component',()=>{
    render(
    <Provider store={store}>
         <Navbar/>
    </Provider>   
    
    );
    const navElement= screen.getByTestId('navbar-test')
    expect(navElement).toBeInTheDocument();
})