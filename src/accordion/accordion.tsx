import { useState } from 'react';
import { Icon } from '../icon/icon';

import {
  Accordion as TWAccordion,
  AccordionBody,
  AccordionHeader,
} from '@material-tailwind/react';

export const Accordion: React.FC<AccordionProps> = ({
  open,
  children,
  title,
  icon,
  iconOpen,
  iconClosed,
}) => {
  const [accordionOpen, setAccordionOpen] = useState(open ?? false);

  const renderHeading = () => {
    return (
      <>
        <div className='text-tst-primary-black/80 flex w-full gap-5 heading-title'>
          {icon && (
            <Icon
              icon={icon}
              className={`w-7 h-70  ${
                accordionOpen
                  ? `xsm:text-tst-primary-gray-dark/90 md:text-tst-primary-white/90 heading-icon-color-open`
                  : `xsm:text-tst-primary-gray-dark/50 md:text-tst-primary-white/60 heading-icon-color-closed`
              } duration-30`}
            />
          )}
          <h3
            className={`${
              accordionOpen
                ? `xsm:text-tst-primary-gray-dark/90 md:md:text-tst-primary-white/90 heading-text-color-open`
                : `xsm:text-tst-primary-gray-dark/50 md:md:text-tst-primary-white/60 heading-text-color-closed`
            } duration-30 heading-title py-5`}
          >
            {title}
          </h3>
        </div>
        <Icon
          className={`${
            accordionOpen
              ? `xsm:text-tst-primary-gray-dark/90 md:md:text-tst-primary-white/90 heading-action-icon-color-open`
              : `xsm:text-tst-primary-gray-dark/50 md:md:text-tst-primary-white/60 heading-action-icon-color-closed`
          } w-6 h-70 heading-open-close-icon-color`}
          icon={`${
            accordionOpen
              ? iconOpen ?? `ChevronUpIcon`
              : iconClosed ?? `ChevronDownIcon`
          }`}
        />
      </>
    );
  };

  return (
    <div className='accordion-component'>
      <TWAccordion
        className='overflow-y-hidden accordion'
        open={accordionOpen}
        placeholder={undefined}
      >
        <AccordionHeader
          onClick={() => setAccordionOpen(!accordionOpen)}
          className='py-2'
          placeholder={undefined}
        >
          <div
            className={`transition: ${
              accordionOpen
                ? `rounded-b-none xsm:bg-tst-primary-slate-lighter md:bg-tst-primary-red-dark/80 !text-tst-primary-gray duration-[500ms]`
                : `rounded-b-md xsm:bg-tst-primary-slate-lighter md:bg-tst-primary-red-dark/60 !text-tst-primary-gray duration-[500ms]`
            } w-full rounded-t-md px-8 border-tst-primary-red/10 border-t-[1px] border-x-[1px] flex justify-between mx-auto heading accordion-heading`}
          >
            {renderHeading()}
          </div>
        </AccordionHeader>
        <AccordionBody data-testid='accordion-body'>
          <div className='bg-tst-primary-slate-lighter/10 px-8 rounded-b-sm accordion-body'>
            {children}
          </div>
        </AccordionBody>
      </TWAccordion>
    </div>
  );
};
