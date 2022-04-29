// test list displays
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('shoulder render a list of characters', async () => {
    // render App
    render(<App />)

    // loading
    screen.getByAltText(/avatar wheel of punishment spinner/i);

    // find character
    await screen.findByText(/sokka/i);
  });
});