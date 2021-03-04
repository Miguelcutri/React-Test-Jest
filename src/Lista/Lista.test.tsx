import {render,screen} from '@testing-library/react';
import Lista from './index';

test('renders lista', ()=>{
  render(<Lista/>);
  const ListaElement = screen.getByTestId("lista");
  const ItemElement = screen.getByTestId("item");
  expect(ListaElement).toContainElement(ItemElement);
})