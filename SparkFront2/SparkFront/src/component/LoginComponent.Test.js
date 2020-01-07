import React from 'react';
import ReactDom from 'react-dom';
import LoginComponent from './LoginComponent';
import { isTsAnyKeyword} from '@babel/types';

it("renders without crashing",()=>{
    const div=document.createElement("div");
    ReactDom.render(<LoginComponent/>,div);
}
)
it('Should capture firstname correctly onChange', function(){
    const component = mount(<Form />);
    const input = component.find('input').at(0);
    input.instance().value = 'hello';
    input.simulate('change');
    expect(component.state().firstname).toEqual('hello');
  })