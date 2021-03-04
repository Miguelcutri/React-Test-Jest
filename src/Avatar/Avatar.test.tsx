import { render, screen } from '@testing-library/react';
import Avatar from './index';


test('renders img', () => {
    //rederizar o componente a ser testado
    render(<Avatar />);
    // buscar um elemento atraves de tag, texto, data-testid, etc
    const imgElement = screen.getByTestId("img");
    // esperar que algo ocorra 
    expect(imgElement).toHaveProperty("src");
  });