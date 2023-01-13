import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';
import { cards } from '../../Mocs/CardMoc';

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(<Home quizes={cards} />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
