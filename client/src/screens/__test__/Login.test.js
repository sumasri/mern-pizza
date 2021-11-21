import {render,screen} from '@testing-library/react'
import { Provider } from 'react-redux'
import Loginscreen from '../Loginscreen'
import store from '../../store'

test('should render navbar component',()=>{
    render(
    <Provider store={store}>
         <Loginscreen/>
    </Provider>   
    
    );
    const navElement= screen.getByTestId('login-test')
    expect(navElement).toBeInTheDocument();
})
test('input contains initial value',()=>{
    render(
        <Provider store={store}>
         <Loginscreen/>
    </Provider>
    )
    const inputElement= screen.getByTestId('input')
    expect(inputElement.value).toBe('')
})
test('login btn renders with correct text',()=>{
    render(
        <Provider store={store}>
         <Loginscreen/>
    </Provider>
    )
    const loginElement= screen.getByTestId('loginbtn')
    expect(loginElement.textContent).toBe('LOGIN')
})

