import { Accordion } from '../accordion';
import { render, screen } from '@testing-library/react';

describe('LinkButton', () => {
  const defaultProps: AccordionProps = {
    title: 'Accordion Title',
    icon: 'PhoneIcon',
    iconOpen: 'ChevronUpIcon',
    iconClosed: 'ChevronDownIcon',
    open: true,
    children: <button>Hello Accordion</button>,
  };

  const setup = (props: AccordionProps = defaultProps) =>
    render(<Accordion {...props} />);

  it('should display the accordion open by default', async () => {
    setup();
    const comp = screen.getByTestId('accordion-body');
    expect(comp.parentElement?.style.height).toEqual('auto');
  });

  it('should display the accordion closed when the open prop is set to false', async () => {
    setup({ ...defaultProps, open: false });
    const comp = screen.getByTestId('accordion-body');
    expect(comp.parentElement?.style.height).toEqual('0px');
  });
});
