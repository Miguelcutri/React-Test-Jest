import { render, screen } from '@testing-library/react';
import Alert from './index';


test('renders texto', () => {
    //rederizar o componente a ser testado
    render(<Alert />);
    // buscar um elemento atraves de tag, texto, data-testid, etc
    const TextoElement = screen.getByTestId("texto");
    // esperar que algo ocorra 
    expect(TextoElement).toHaveTextContent("Você deve aceitar os termos");
  });