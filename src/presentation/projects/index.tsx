import { ChevronLeft } from 'lucide-react';
import React from 'react';

import { Card } from '../../components/card';
import Layout from '../../components/layout/Layout';
import PrimaryLink from '../../components/links/PrimaryLink';
import UnderlineLink from '../../components/links/UnderlineLink';
import Seo from '../../components/Seo';
import { projectList } from '../../presentation/projects/projectList';

export const ProjectsPage = () => {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-dark'>
          <div className='layout relative flex h-screen flex-col items-center justify-center py-4 sm:py-12'>
            <h3 className='text-light absolute top-8 hidden text-start uppercase sm:flex'>
              Projects
            </h3>
            <PrimaryLink
              className='text-grey300 absolute left-2 top-2 mt-6 flex text-start hover:text-gray-600'
              href='/'
            >
              <ChevronLeft className='mr-2' size={16} />
              Back to Home
            </PrimaryLink>
            <div className='no-scrollbar container mb-4 mt-16 w-full overflow-y-scroll scroll-smooth p-4'>
              {projectList.map(
                ({ altImage, image, link, text, title, underConstruction }) => (
                  <Card
                    key={title}
                    image={image}
                    altImage={altImage}
                    title={title}
                    text={text}
                    link={link}
                    underConstruction={underConstruction}
                  />
                )
              )}
            </div>

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
