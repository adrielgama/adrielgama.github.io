import { FileText, Github, Linkedin } from 'lucide-react';
import React from 'react';

import Layout from '../../components/layout/Layout';
import ButtonLink from '../../components/links/ButtonLink';
import UnderlineLink from '../../components/links/UnderlineLink';
import UnstyledLink from '../../components/links/UnstyledLink';
import Seo from '../../components/Seo';
import Tooltip from '../../components/tooltip';

export const Home = () => {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-color-dark'>
          <div className='layout relative flex h-screen flex-col items-center justify-center py-12'>
            <p className='layout text-light relative mt-2 text-sm'>
              Hi, I&rsquo;m Adriel
            </p>
            <div className='layout flex flex-row items-baseline justify-start '>
              <h1 className='text-light relative mr-12 flex text-start uppercase'>
                React
              </h1>
              <div className='flex flex-row justify-center justify-items-start gap-7'>
                <UnstyledLink href='https://www.linkedin.com/in/adrielgama/'>
                  <Tooltip text='LinkedIn'>
                    <Linkedin className='fill-grey300 hover:fill-grey100 svg' />
                  </Tooltip>
                </UnstyledLink>
                <UnstyledLink href='https://github.com/adrielgama'>
                  <Tooltip text='Github'>
                    <Github className='svg' />
                  </Tooltip>
                </UnstyledLink>
                <UnstyledLink
                  href='./documents/ResumeAdrielGama2023.pdf'
                  download
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Tooltip text='Resume'>
                    <FileText className='svg' />
                  </Tooltip>
                </UnstyledLink>
              </div>
            </div>
            <h1 className='layout  text-dark  bg-light relative text-start uppercase'>
              Developer
            </h1>
            <p className='layout text-light mt-8 max-w-2xl text-justify text-sm md:text-center'>
              I&rsquo;m a Front-end developer with 4 years of experience in
              responsive web projects. My strength lies in translating complex
              designs into interactive and efficient interfaces, ensuring
              compatibility with various browsers and devices, with the aim of
              delivering innovative solutions that enhance the user experience.
            </p>

            <ButtonLink href='/projects' className='mt-6 hover:text-gray-500'>
              Projects
            </ButtonLink>

            <footer className='absolute bottom-2 text-gray-600'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://github.com/adrielgama'>
                Adriel Gama
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
};
