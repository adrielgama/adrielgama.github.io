/* eslint-disable @next/next/no-img-element */
import * as Separator from '@radix-ui/react-separator';
import React from 'react';

import Button from '@/components/buttons/Button';
import { CardProps } from '@/components/card/types/card';

export const Card: React.FC<CardProps> = ({
  image,
  altImage,
  title,
  text,
  link,
  underConstruction,
}) => {
  return (
    <div className='mb-8 flex flex-col items-center justify-between gap-4 md:flex-row'>
      <div className='flex w-full max-w-lg flex-col justify-between gap-6 pb-10 pt-8'>
        <div className='flex  flex-col gap-4'>
          <h2 className='text-light max-sm:text-1xl text-4xl font-bold max-lg:text-4xl max-md:text-2xl'>
            {title}
          </h2>
          {underConstruction && (
            <p className='text-xs text-red-400'>Under Construction</p>
          )}
          <div className='text-gray-400'>
            <p className='font-semibold text-gray-300'>Languages and tools:</p>
            <p className=''>{text}</p>
          </div>
        </div>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <Button className='max-w-fit hover:text-gray-600'>
            View project
          </Button>
        </a>
      </div>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img
          src={image}
          alt={altImage}
          className='hover:border-grey100 max-h-[40vh] hover:border-2 hover:shadow-lg'
        />
      </a>
      <Separator.Root
        className='bg-white data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px md:hidden'
        decorative
        orientation='horizontal'
      />
    </div>
  );
};
