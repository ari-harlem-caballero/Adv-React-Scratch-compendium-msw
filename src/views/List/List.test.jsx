// test list filtering by nation
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import CharacterList from '../List/List';

// character data
// setupServer (rest.get, ctx)

describe('Character List', () => {
  // beforeAll, afterAll

  it('should render a list of characters that are filterable by dropdown', async () => {
    // render
    // loading message
    // filter with dropdown
    // expect name/character
  })
})