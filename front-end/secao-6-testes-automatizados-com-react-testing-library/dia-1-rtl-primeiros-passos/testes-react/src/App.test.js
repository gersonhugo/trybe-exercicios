import { render, screen } from '@testing-library/react';
import App from './App';

test('verfica se existe o campo Email', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

// test('verifica se existe um botão', () => {
//   render(<App />);
//   const button = screen.getAllByRole('button');
//   expect(button).toBeInTheDocument();
// })

test('verifica se existem dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
})

test('verifica se existe um botão de enviar', () => {
  render(<App />);
  const btnSend = screen.getByTestId('id-send');
  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type', 'button');
  expect(btnSend).toHaveValue('Enviar');
})
