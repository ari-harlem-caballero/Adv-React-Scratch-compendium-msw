// test list displays
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import App from './App'

// character data
const data = [
  {
    _id: '5cf5679a915ecad153ab6a45',
    name: 'Sokka',
    photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/c/cc/Sokka.png/revision/latest?cb=20140905085428',
    affiliation: 'Water Tribe'
  },
  {
    _id: '5cf5679a915ecad153ab6ab6',
    name: 'Zuko',
    photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/4/4b/Zuko.png/revision/latest?cb=20180630112142',
    affiliation: 'Fire Nation'
  },
  {
    _id: '5cf5679a915ecad153ab69dd',
    name: 'Momo',
    photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/4/43/Inquisitive_Momo.png/revision/latest?cb=20081225191217',
    affiliation: 'Air Nomads'
  }
];

// setupServer (rest.get, ctx)
const server = setupServer(
  rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=500', (req, res, ctx) =>
  res(ctx.json([data]))
  )
);

describe('App', () => {
  //beforeAll
  beforeAll(() => server.listen());
  //afterAll
  afterAll(() => server.close());

  it('shoulder render a list of characters', async () => {
    // render App
    render(<App />)

    // loading
    screen.getByText(/loading/i);

    // find character
    await screen.findByText(/sokka/i);
  });
});