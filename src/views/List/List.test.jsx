// test list filtering by nation
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CharacterList from '../List/List';


describe('Character List', () => {
  it('should render a list of characters that are filterable by dropdown', async () => {
    // render
    render(<CharacterList data={data} />);

    // loading remove
    await waitForElementToBeRemoved(screen.getByAltText(/avatar wheel of punishment spinner/i));

    // // find dropdown
    // const dropdown = screen.getByRole('listbox');

    // filter with dropdown
    userEvent.selectOptions(screen.getByRole('listbox'), ['nation.fireNation']);
    expect(screen.getByRole('option', {name: 'Fire Nation'}).selected).toBe(true);

    // expect name/character
    const result = await screen.findAllByText(/fire nation/i);
    expect(result.textContent).toEqual(/fire nation/i);
  })
})