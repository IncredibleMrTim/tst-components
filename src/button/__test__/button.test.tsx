import { Button } from '../button';
import { render, screen } from '@testing-library/react';

describe('LinkButton', () => {
  it('should display the buttons children prop as the button label', () => {
    render(<Button>BUTTON</Button>);
    expect(screen.getByText('BUTTON')).toBeInTheDocument();
  });

  it('fire the onClick event of the button when clicked', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>BUTTON</Button>);
    screen.getByText('BUTTON').click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should override the className', () => {
    render(<Button className='test'>BUTTON</Button>);
    expect(screen.getByRole('button')).toHaveClass('test');
  });
});
