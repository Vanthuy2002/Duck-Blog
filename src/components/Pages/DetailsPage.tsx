import React, { useEffect } from 'react';
import { Title } from '../module';
import LatestPost from '../Block/LatestPost';
import { Layout } from '../Layout';

const DetailsPage: React.FC = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <section className='marker:pt-8 pb-16 lg:pb-24 px-8 bg-white pt-28'>
        <div className='max-w-3xl flex justify-start items-start flex-col mx-auto'>
          <article className='format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
            <header className='mb-4 lg:mb-6 not-format'>
              <address className='flex items-center mb-6 not-italic'>
                <div className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
                  <img
                    className='mr-4 w-16 h-16 rounded-full'
                    src='/doraemon.jpg'
                    alt='Jese Leos'
                  />
                  <div>
                    <a
                      href='#'
                      rel='author'
                      className='text-xl font-bold text-gray-900 dark:text-white'
                    >
                      Jese Leos
                    </a>
                    <p className='text-base sm:text-center font-light text-gray-500 dark:text-gray-400'>
                      Graphic Designer, educator & CEO Flowbite
                    </p>
                    <p className='text-base font-light text-gray-500 dark:text-gray-400'>
                      12/7/2023
                    </p>
                  </div>
                </div>
              </address>
              <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>
                Best practices for successful prototypes
              </h1>
            </header>
          </article>
          <div className='post-content'>
            <div className='entry-content'>
              <Title>Chương 1</Title>
              <p className='leading-loose'>
                Gastronomy atmosphere set aside. Slice butternut cooking home.
                Delicious romantic undisturbed raw platter will meld. Thick
                Skewers skillet natural, smoker soy sauce wait roux. slices Food
                qualities braise chicken cuts bowl through slices butternut
                snack. Tender meat juicy dinners. One-pot low heat plenty of
                time adobo fat raw soften fruit. sweet renders bone-in marrow
                richness kitchen, fricassee basted pork shoulder. Delicious
                butternut squash hunk. Flavor centerpiece plate, delicious ribs
                bone-in meat, excess chef end. sweet effortlessly pork, low heat
                smoker soy sauce flavor meat, rice fruit fruit. Romantic
                fall-off-the-bone butternut chuck rice burgers. renders aromatic
                enjoyment, then slices taco. Minutes undisturbed cuisine lunch
                magnificent mustard curry. Juicy share baking sheet pork. Meals
                ramen rarities selection, raw pastries richness magnificent
                atmosphere. Sweet soften dinners, cover mustard infused skillet,
                Skewers on culinary experience.
              </p>

              <p className='leading-loose'>
                Juicy meatballs brisket baked shoulder. Juicy smoker soy sauce
                burgers brisket. polenta mustard hunk greens. Wine technique
                snack skewers chuck excess. Oil heat slowly. slices natural
                delicious, set aside magic tbsp skillet, bay leaves brown
                centerpiece. fruit soften edges frond slices onion snack pork
                steem on wines excess technique cup; Cover smoker soy sauce
                fruit snack. Sweet one-dozen scrape delicious, non sheet raw
                crunch mustard. Minutes clever slotted tongs scrape, brown steem
                undisturbed rice.
              </p>

              <p className='leading-loose'>
                Food qualities braise chicken cuts bowl through slices butternut
                snack. Tender meat juicy dinners. One-pot low heat plenty of
                time adobo fat raw soften fruit. sweet renders bone-in marrow
                richness kitchen, fricassee basted pork shoulder. Delicious
                butternut squash hunk. Flavor centerpiece plate, delicious ribs
                bone-in meat, excess chef end. sweet effortlessly pork, low heat
                smoker soy sauce flavor meat, rice fruit fruit. Romantic
                fall-off-the-bone butternut chuck rice burgers.
              </p>
              <figure>
                <img
                  src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                  alt=''
                />
                <figcaption>
                  Gastronomy atmosphere set aside. Slice butternut cooking home.
                </figcaption>
              </figure>
              <Title>Chương 2</Title>
              <p className='leading-loose'>
                Gastronomy atmosphere set aside. Slice butternut cooking home.
                Delicious romantic undisturbed raw platter will meld. Thick
                Skewers skillet natural, smoker soy sauce wait roux. slices Food
                qualities braise chicken cuts bowl through slices butternut
                snack. Tender meat juicy dinners. One-pot low heat plenty of
                time adobo fat raw soften fruit. sweet renders bone-in marrow
                richness kitchen, fricassee basted pork shoulder. Delicious
                butternut squash hunk. Flavor centerpiece plate, delicious ribs
                bone-in meat, excess chef end. sweet effortlessly pork, low heat
                smoker soy sauce flavor meat, rice fruit fruit. Romantic
                fall-off-the-bone butternut chuck rice burgers. renders aromatic
                enjoyment, then slices taco. Minutes undisturbed cuisine lunch
                magnificent mustard curry. Juicy share baking sheet pork. Meals
                ramen rarities selection, raw pastries richness magnificent
                atmosphere. Sweet soften dinners, cover mustard infused skillet,
                Skewers on culinary experience.
              </p>
            </div>
            <div className='mt-10 flex rounded-2xl bg-primary-400'>
              <div className='w-[200px] h-[200px] flex-shrink-0 rounded-2xl'>
                <img
                  src='https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                  alt=''
                  className='w-full h-full object-cover rounded-2xl'
                />
              </div>
              <div className='flex-1 p-5'>
                <h3 className='font-bold mb-5 text-xl'>Evondev</h3>
                <p className='text-sm leading-loose'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos non animi porro voluptates quibusdam optio nulla
                  quis nihil ipsa error delectus temporibus nesciunt, nam
                  officiis adipisci suscipit voluptate eum totam!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-10 max-w-5xl mx-auto'>
          <Title>Bài viết liên quan</Title>
          <div className='grid px-5 grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1'>
            <LatestPost></LatestPost>
            <LatestPost></LatestPost>
            <LatestPost></LatestPost>
            <LatestPost></LatestPost>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DetailsPage;
