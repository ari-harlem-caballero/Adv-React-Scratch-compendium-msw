// test list displays
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('shoulder render a list of characters', async () => {
    // render App
    render(<App />)

    // loading
    screen.getByAltText(/avatar wheel of punishment spinner/i);

    await waitForElementToBeRemoved(screen.getByAltText(/avatar wheel of punishment spinner/i));

    // find character
    const result = await screen.findByText('Sokka');
    expect(result.textContent).toEqual('Sokka');
  });
});