import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FutureImage from 'next/future/image';
import { useScrollYPosition } from 'react-use-scroll-position';

type Competitor = {
  logo: JSX.Element;
  name: string;
  description: string;
  focus: string;
  rewards: string;
  issues: string;
};
const competitors: Competitor[] = [
  {
    logo: (
      <Image
        src='/yelp.png'
        alt='Yelp Logo'
        layout='fill'
        objectFit='contain'
      />
    ),
    name: 'Yelp',
    description: 'Local business locator and review app',
    focus:
      'Users can rate and review local businesses and rate the reviews themselves',
    rewards: 'Offers and deals',
    issues:
      'Nefarious and targeted negative reviews can be catastrophic for restaurants, few rewards',
  },
  {
    logo: (
      <Image
        src='/zomato.png'
        alt='Zomato Logo'
        layout='fill'
        objectFit='contain'
      />
    ),
    name: 'Zomato',
    description: 'Restaurant locator and food delivery app based in India',
    focus:
      'Connecting users to nearby restaurants for dining or delivery while providing a culinary social media experience for its users',
    rewards:
      'Coupons, “Piggybank” rewards system gives users 10% of their money back on each order and can be used to pay 10%',
    issues:
      'Still promotes multinational chains which harm business for local restaurants, Piggybank is a paid feature and exclusive to India, Grammar errors, cannot change language settings in app, UI not the most functional',
  },
  {
    logo: (
      <Image
        src='/uber-eats.png'
        alt='Uber Eats Logo'
        layout='fill'
        objectFit='contain'
      />
    ),
    name: 'Uber Eats',
    description: 'Food takeout and delivery app',
    focus:
      'Connecting users and drivers with nearby restaurants for takeout and delivery',
    rewards:
      'Free items, Free delivery, Discounts after a certain number of orders from the same place',
    issues:
      'Price markups for items on the app, delivery and service fees, geared towards delivery, only partnered restaurants are featured',
  },
  {
    logo: (
      <Image
        src='/opentable.png'
        alt='OpenTable Logo'
        layout='fill'
        objectFit='contain'
      />
    ),
    name: 'OpenTable',
    description:
      'Restaurant reservation app that allows users to order delivery and takeout as well as share their experiences',
    focus:
      'Promoting local restaurants to users for dining reservations and delivery',
    rewards:
      'Dining Reward Cheque’s redeemed with points earned from successful reservations',
    issues:
      'Heavy emphasis on traditional sit-down restaurants, geared towards higher-end restaurants, only partnered restaurants are featured',
  },
];

type Persona = {
  name: string;
  description: string;
  image: JSX.Element;
};
const personas: Persona[] = [
  {
    name: 'Ester Kreuzer',
    description:
      'Ester represents the classic “broke university student” who is living away from home and on campus for the first time. She has trouble cooking for herself and wants to find cheap restaurants to go to with her friends or by herself on campus. What she expects from a food related app is to be able to earn rewards for regularly visited restaurants in order to save money.',
    image: (
      <FutureImage
        src='/personas/ester.png'
        alt='Ester Kreuzer'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Gregoire Martin',
    description:
      'Gregoire is a representative of the millennial working class man in the tech industry. He is the planner in all of his social circles and is always eager to suggest new restaurant options for friends and coworkers. He is frustrated that many of his favorite restaurants lack a rewards program. He expects to receive recommendations relevant to him be they for frequently visited restaurants or similar culinary experiences to those he has enjoyed in the past.',
    image: (
      <FutureImage
        src='/personas/gregoire.png'
        alt='Gregoire Martin'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Jean-Guy Lachance',
    description:
      'Jean-Guy represents the aging francophone population of Quebec. He is retired and wants to save money on weekly visits for breakfast with his grandchildren. He is a proud man who loves his province and its rich heritage. He expects to be able to support local French restaurants and be able to use the app in French without being very technologically savvy.',
    image: (
      <FutureImage
        src='/personas/jeanguy.png'
        alt='Jean-Guy Lachance'
        fill
        className='custom-img'
      />
    ),
  },
];

type Prototype = {
  name: string;
  image: JSX.Element;
};
const wireframes: Prototype[] = [
  {
    name: 'Sign In - Main',
    image: (
      <FutureImage
        src='/wireframes/auth1.png'
        alt='Auth Page 1 Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Sign In - Email',
    image: (
      <FutureImage
        src='/wireframes/auth2.png'
        alt='Auth Page 2 Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Sign Up - Main',
    image: (
      <FutureImage
        src='/wireframes/auth3.png'
        alt='Auth Page 3 Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Sign Up - Email',
    image: (
      <FutureImage
        src='/wireframes/auth4.png'
        alt='Auth Page 4 Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Home',
    image: (
      <FutureImage
        src='/wireframes/home.png'
        alt='Home Page Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Restaurant',
    image: (
      <FutureImage
        src='/wireframes/restaurant.png'
        alt='Restaurant Page Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Discover',
    image: (
      <FutureImage
        src='/wireframes/discover.png'
        alt='Home Page Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Random Restaurant',
    image: (
      <FutureImage
        src='/wireframes/random.png'
        alt='Random Restaurant Page Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Passport - Main',
    image: (
      <FutureImage
        src='/wireframes/passport1.png'
        alt='Passport Page 1 Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Passport - Restaurant',
    image: (
      <FutureImage
        src='/wireframes/passport2.png'
        alt='Passport Page 2 Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Passport - Claim',
    image: (
      <FutureImage
        src='/wireframes/passport3.png'
        alt='Passport Page 3 Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Passport - Claimed',
    image: (
      <FutureImage
        src='/wireframes/passport4.png'
        alt='Passport Page 4 Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
];

const mockups: Prototype[] = [
  {
    name: 'Sign In - Main',
    image: (
      <FutureImage
        src='/mockups/auth1.png'
        alt='Auth Page 1 Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Sign In - Email',
    image: (
      <FutureImage
        src='/mockups/auth2.png'
        alt='Auth Page 2 Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Sign Up - Main',
    image: (
      <FutureImage
        src='/mockups/auth3.png'
        alt='Auth Page 3 Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Sign Up - Email',
    image: (
      <FutureImage
        src='/mockups/auth4.png'
        alt='Auth Page 4 Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Home',
    image: (
      <FutureImage
        src='/mockups/home.png'
        alt='Home Page Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Restaurant',
    image: (
      <FutureImage
        src='/mockups/restaurant.png'
        alt='Restaurant Page Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Discover',
    image: (
      <FutureImage
        src='/mockups/discover.png'
        alt='Home Page Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Random Restaurant',
    image: (
      <FutureImage
        src='/mockups/random.png'
        alt='Random Restaurant Page Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Passport - Main',
    image: (
      <FutureImage
        src='/mockups/passport1.png'
        alt='Passport Page 1 Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Passport - Restaurant',
    image: (
      <FutureImage
        src='/mockups/passport2.png'
        alt='Passport Page 2 Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Passport - Claim',
    image: (
      <FutureImage
        src='/mockups/passport3.png'
        alt='Passport Page 3 Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
  {
    name: 'Passport - Claimed',
    image: (
      <FutureImage
        src='/mockups/passport4.png'
        alt='Passport Page 4 Wireframe'
        fill
        className='custom-img'
      />
    ),
  },
];

type Color = {
  name: string;
  code: string;
};
const colors: Color[] = [
  {
    name: 'Fern Green',
    code: '#62814b',
  },
  {
    name: 'Kobe',
    code: '#7c2a13',
  },
  {
    name: 'Tan',
    code: '#ceb793',
  },
  {
    name: 'Cosmic Latte',
    code: '#f7f3e3',
  },
  {
    name: 'White',
    code: '#ffffff',
  },
];

const Home: NextPage = () => {
  const scrollY = useScrollYPosition();
  const [currentCompetitor, setCurrentCompetitor] = useState<number>(0);
  const [currentPersona, setCurrentPersona] = useState<number>(0);
  const [currentWireframe, setCurrentWireframe] = useState<number>(-1);
  const [currentMockup, setCurrentMockup] = useState<number>(-1);

  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  return (
    <>
      <Head>
        <title>SOEN 357 - Mini Project</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='relative mx-auto flex flex-col items-center justify-center min-h-screen px-16'>
        <div className='fixed right-4 top-1/2 -translate-y-1/2 flex flex-col z-50'>
          {sectionsRef.current?.map((element, index) => (
            <button
              onClick={() => window.scrollTo(0, element?.offsetTop as number)}
              key={index}
              className='flex justify-end items-center gap-2'
            >
              <h2
                className={`text-right ${
                  scrollY >= (element?.offsetTop || 0) &&
                  scrollY <
                    (sectionsRef.current[index + 1]?.offsetTop || Math.min())
                    ? 'text-lg'
                    : 'text-sm'
                }`}
              >
                {
                  sectionsRef.current[index]?.getElementsByTagName('h1')[0]
                    ?.textContent
                }
              </h2>
              <div className='h-[1px] w-4 bg-black' />
            </button>
          ))}
        </div>
        <section className='h-screen w-full flex justify-around items-center'>
          <div className='basis-0 grow flex justify-center items-center'>
            <div className='w-9/12 max-w-sm'>
              <FutureImage
                src='/foodly-logo.svg'
                alt='Logo'
                fill
                className='custom-img'
              />
            </div>
          </div>
          <div className='basis-0 grow flex flex-col items-start'>
            <h3 className='text-xl text-gray-400'>UX/UI Case Study</h3>
            <h1 className='text-5xl -mt-1 font-bold'>Foodly</h1>
            <div className='flex items-center mt-3 gap-2'>
              <h2 className='text-sm bg-black py-1 px-5 text-white rounded-full whitespace-nowrap'>
                Seina Assadian
              </h2>
              <h2 className='text-sm bg-black py-1 px-5 text-white rounded-full whitespace-nowrap'>
                Orion Kevlar
              </h2>
              <h2 className='text-sm bg-black py-1 px-5 text-white rounded-full whitespace-nowrap'>
                Alexandra Zana
              </h2>
            </div>
          </div>
        </section>
        <div className='max-w-4xl w-full py-40 flex flex-col gap-40'>
          <section ref={(el) => (sectionsRef.current[0] = el)}>
            <h1 className='text-6xl mb-10 font-bold'>Introduction</h1>
            <div>
              <h2 className='text-4xl font-bold text-gray-600'>The Problem</h2>
              <p className='mt-3 text-xl leading-8'>
                The COVID-19 pandemic has had a devastating impact on the food
                service industry.{' '}
                <a href='https://www.restaurantscanada.org/industry-news/recovery-and-rebirth-for-restaurants-in-a-post-pandemic-world/'>
                  Many establishments were faced with labor shortages, increased
                  debts, as well as greater food and overall costs
                </a>
                . Although large franchises were able to bounce back from these
                hardships thanks to{' '}
                <a href='https://covidbailouttracker.com/ '>
                  bailouts and subsidies
                </a>
                , local mom-and-pop{' '}
                <a href='https://www.restaurantscanada.org/industry-news/recovery-and-rebirth-for-restaurants-in-a-post-pandemic-world/'>
                  restaurants were struck the hardest. 81% of these independent
                  establishments were forced to take on additional debt due to
                  the pandemic
                </a>
                , and approximately{' '}
                <a href='https://www.restaurantscanada.org/wp-content/uploads/2021/04/infographic_RC_Final.pdf '>
                  10% were forced to close their doors indefinitely
                </a>
                .
              </p>
            </div>
            <div className='mt-8'>
              <h2 className='text-4xl font-bold text-gray-600'>Our Solution</h2>
              <p className='mt-3 text-xl leading-8'>
                Since the easing of lockdown restrictions, there has been a
                resurgence in in-person dining. Indeed, a survey conducted by
                Restaurants Canada shows that{' '}
                <a href='https://www.restaurantscanada.org/industry-news/recovery-and-rebirth-for-restaurants-in-a-post-pandemic-world/'>
                  50% of people above the age of 18 are more eager to dine-in,
                  and less likely to order out
                </a>
                . Additionally, in order to comply with COVID restrictions,{' '}
                <a href='https://www.cnbc.com/2021/08/21/qr-codes-have-replaced-restaurant-menus-industry-experts-say-it-isnt-a-fad.html'>
                  many restaurants have transitioned to a fully online menu
                  system through the use of QR codes
                </a>
                . In fact, there was a{' '}
                <a href='https://www.qrcode-tiger.com/qr-code-statistics-2022-q1#QR_code_scans_quadrupled_in_2022'>
                  433% increase in QR code scans from 2021 to 2022
                </a>
                .
              </p>
              <p className='mt-4 text-xl leading-8'>
                With the resurgence of people dining in and QR codes becoming
                the status quo for most food service establishments, the
                population is clearly trending towards a phone-first approach to
                the restaurant experience. So what better way to aid these local
                businesses than to provide a service that directly integrates
                with the current solutions?
              </p>
            </div>
            <div className='mt-6'>
              <h3 className='text-3xl'>
                Enter <strong className='text-[#62814b]'>foodly</strong>,
              </h3>{' '}
              <p className='text-xl leading-8'>
                a passport-like app that keeps track of restaurants you have
                visited and gives you rewards for dining at them using an NFC
                tag solution
              </p>
            </div>
          </section>
          <section ref={(el) => (sectionsRef.current[1] = el)}>
            <h1 className='text-6xl mb-10 font-bold'>Research</h1>
            <div>
              <h2 className='text-4xl font-bold text-gray-600'>
                Comparative Study
              </h2>
              <p className='mt-3 text-xl leading-8'>
                There is no shortage of apps and websites to locate local
                restaurants and even offer services to make reservations, leave
                reviews, place orders for delivery or takeout, and earn rewards.
                In order to truly understand the problem space, we have tested
                and analyzed the main competitors offering a mutually beneficial
                relationship between local restaurants and customers.
              </p>
              <div className='relative flex justify-center my-16'>
                <AnimatePresence>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.5, x: -160 }}
                    animate={{ opacity: 1, scale: 0.75, x: -100 }}
                    exit={{ opacity: 0, x: -160, scale: 0.5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    key={
                      competitors[currentCompetitor - 1]?.name ||
                      competitors[competitors.length - 1]?.name
                    }
                    className='absolute left-0 hover:cursor-pointer'
                    onClick={() => {
                      if (currentCompetitor === 0) {
                        setCurrentCompetitor(competitors.length - 1);
                      } else {
                        setCurrentCompetitor(currentCompetitor - 1);
                      }
                    }}
                  >
                    <CompetitorCard
                      competitor={
                        competitors[currentCompetitor - 1] ||
                        competitors[competitors.length - 1]
                      }
                    />
                  </motion.div>
                  <motion.div
                    layout
                    animate={{ scale: 1, x: 0 }}
                    className='z-10'
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    key={competitors[currentCompetitor]?.name}
                  >
                    <CompetitorCard
                      competitor={competitors[currentCompetitor]}
                      active
                    />
                  </motion.div>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.5, x: 160 }}
                    animate={{ opacity: 1, scale: 0.75, x: 100 }}
                    exit={{ opacity: 0, x: 160, scale: 0.5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    key={
                      competitors[currentCompetitor + 1]?.name ||
                      competitors[0]?.name
                    }
                    className='absolute right-0 hover:cursor-pointer'
                    onClick={() => {
                      if (currentCompetitor === competitors.length - 1) {
                        setCurrentCompetitor(0);
                      } else {
                        setCurrentCompetitor(currentCompetitor + 1);
                      }
                    }}
                  >
                    <CompetitorCard
                      competitor={
                        competitors[currentCompetitor + 1] || competitors[0]
                      }
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div>
              <h2 className='text-4xl font-bold text-gray-600'>Surveys</h2>
              <p className='mt-4 text-xl leading-8'>
                In order to collect data regarding our target demographic
                quickly and efficiently, we opted to create a Google Forms
                survey that was accessible through a sharable link. The survey
                consisted of 20 questions, and was designed to collect data
                regarding the user’s dining habits, their opinions on the
                current QR code system, and their thoughts on our proposed
                solution.
              </p>
              <div className='relative w-full h-0 pt-[75%] pb-0 shadow-xl mt-6 mb-4 overflow-hidden rounded-xl will-change-transform'>
                <iframe
                  loading='lazy'
                  className='absolute w-full h-full inset-0'
                  src='https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFQvBt6Vag&#x2F;view?embed'
                  allowFullScreen
                  allow='fullscreen'
                />
              </div>
            </div>

            <div className='mt-8'>
              <h2 className='text-4xl font-bold text-gray-600'>Findings</h2>
              <p className='mt-3 text-xl leading-8'>
                From our research we found that both females and males aged
                between 25-34 years of age were the most likely demographic to
                prefer a dining experience. The second most likely group to
                enjoy a dining experience is females between ages 35-44, and
                that both females and males over 55 were the least likely group
                to seek out a dining experience.
              </p>
              <p className='mt-4 text-xl leading-8'>
                Of the 63 individuals who answered the questionnaire, a majority
                of 37 said they ordered takeout from online delivery services,
                such as Uber Eats, multiple times a month, with 18 out of those
                37 ordering multiple times a week. On the flip side, when asked
                what factor would most likely prevent them from ordering takeout
                from an online delivery service, a striking 24 individuals
                answered that prices were too high. This correlates with a 53%
                majority of our sample population stating that their greatest
                motivation for signing up to a rewards program at a restaurant
                is the potential for discounts and savings.
              </p>
              <p className='mt-4 text-xl leading-8'>
                It was also noted across all demographics that users were more
                inclined to use an app made locally (in Quebec) over a
                multinational app. The preference for having a physical card
                with which to keep track of rewards was not the favorable option
                amongst the sample population, as almost 80% of individuals
                stated preferring a mobile app version that would keep track of
                their points. Furthermore, 38% of users we surveyed reported
                that they already make use of one or more rewards programs
                offered by larger restaurant chains such as Starbucks, Tim
                Hortons, McDonald’s.
              </p>
            </div>
          </section>
          <section ref={(el) => (sectionsRef.current[2] = el)}>
            <h1 className='text-6xl mb-10 font-bold'>Analysis</h1>
            <p className='mt-3 text-xl leading-8'>
              Our research suggests that there is a real interest from Quebecers
              for an app made locally that allows local restaurants to offer
              similar rewards programs as larger chain restaurants, with
              incentives for loyalty such as discounts and promotions on items.
              Additionally, users answered that they preferred to use a phone
              app rather than a physical card for restaurant rewards programs.
              Following the research highlighting that discounts and promotions
              would be the biggest motivator to signing up for a rewards program
              at a restaurant, it is clear to us that our application proves to
              be the most exciting solution.
            </p>
            <p className='mt-4 text-xl leading-8'>
              As such, we can conclude that there is genuine market interest in
              our application overall, and that our target user base should
              include men and women of all ethnicities over the age of 18.
            </p>
            <div className='mt-8'>
              <h2 className='text-4xl font-bold text-gray-600'>
                User Personas
              </h2>
              <p className='mt-3 text-xl leading-8'>
                From our findings we have sculpted a set of user personas to
                represent hypothetical users who are likely to be interested in
                our app. We have derived their physical and social
                characteristics as well as their motivations, pain points and
                expectations.
              </p>
              <div className='mt-8 w-full flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center shadow-md rounded-lg bg-gray-100'>
                  {personas.map((persona, index) => (
                    <motion.button
                      key={persona.name}
                      className={`py-3 px-6 rounded-md uppercase font-bold ${
                        currentPersona === index
                          ? 'shadow-md bg-white z-10'
                          : 'shadow-none bg-gray-100 z-0'
                      }`}
                      animate={{
                        scale: currentPersona === index ? 1.1 : 1,
                      }}
                      onClick={() => setCurrentPersona(index)}
                    >
                      {persona.name}
                    </motion.button>
                  ))}
                </div>
                <div className='mt-6'>
                  <div className='relative w-full'>
                    {personas[currentPersona]?.image}
                  </div>
                  <p className='mt-4 text-xl leading-8'>
                    {personas[currentPersona]?.description}
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-8'>
              <h2 className='text-4xl font-bold text-gray-600'>Journey Map</h2>
              <div className='relative w-full'>
                <FutureImage
                  src='/journeymap.png'
                  alt='Journey Map'
                  fill
                  className='custom-img'
                />
              </div>
              <p className='mt-3 text-xl leading-8'>
                Gregoire’s journey map is inspired by the activity of looking
                for a new local restaurant where to host his weekly book club
                meetings. His main goal is to find something that would offer
                rewards for weekly visits, as they are a larger group who would
                love to have a new “usual spot”. We know from his user persona
                that one of his main frustrations is the lack of rewards
                programs in most restaurants, which is something he values as he
                does not really like change and is definitely a planner who
                likes to stick to routine. He feels excited to discover an
                application where he can find local restaurants who offer
                rewards and incentives, as he loves to support his community.
                His expectations are to be able to find lesser known
                restaurants, to be able to earn rewards, and to be able to get
                relevant recommendations based on various factors, all of which
                he discovers that our app can do. Thus, he feels relieved, for
                having found an app that suits his needs.
              </p>
            </div>
            <div className='mt-8'>
              <h2 className='text-4xl font-bold text-gray-600'>Sketches</h2>
              <p className='mt-3 text-xl leading-8'>
                Using the lessons learned from our user research and
                requirements phases, we started prototyping designs, beginning
                with low-fidelity sketches. The basic pages we aimed to include
                were for authentication, home/landing, random daily rewards,
                discovery and several passport related pages. Additionally, we
                sought to include the placement and relative location of our
                basic UI elements including Input Controls, Navigational
                Components and Informational Components.
              </p>
              <div className='mt-4 grid grid-cols-3 gap-2 place-items-center'>
                <div className='relative w-full h-[300px]'>
                  <Image
                    src='/sketches/auth.png'
                    alt='Auth Sketch'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <div className='relative w-full h-[300px]'>
                  <Image
                    src='/sketches/home.png'
                    alt='Home Page Sketch'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <div className='relative w-full h-[300px]'>
                  <Image
                    src='/sketches/discover.png'
                    alt='Discover Page Sketch'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <div className='relative w-full h-[300px]'>
                  <Image
                    src='/sketches/random.png'
                    alt='Random Page Sketch'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <div className='relative w-full h-[300px]'>
                  <Image
                    src='/sketches/passport1.png'
                    alt='Passport Page 1 Sketch'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <div className='relative w-full h-[300px]'>
                  <Image
                    src='/sketches/passport2.png'
                    alt='Passport Page 2 Sketch'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </div>
            </div>
            <div className='mt-8'>
              <h2 className='text-4xl font-bold text-gray-600'>Wireframes</h2>
              <p className='mt-3 text-xl leading-8'>
                From the initial sketches, we constructed wireframes to begin
                aligning UI elements and differentiating them via shade which we
                will later fill with different colours in our final design. The
                wireframe process produces a more clear picture from which to
                draw upon for the final mockups. This phase is where we began to
                consider the relative size of the UI elements to ensure our app
                is visible and accessible to as many users as possible.
              </p>
              <div className='mt-4 grid grid-cols-4 gap-4 place-items-center'>
                {wireframes.map((wireframe, index) => (
                  <motion.div
                    onHoverStart={() => {
                      setCurrentWireframe(index);
                    }}
                    onHoverEnd={() => {
                      setCurrentWireframe(-1);
                    }}
                    whileHover={{
                      scale: 1.2,
                    }}
                    className='z-0 relative unset-img shadow-md hover:shadow-xl hover:z-10 transition-shadow duration-300 rounded-[14px] overflow-hidden'
                    key={wireframe.name}
                  >
                    <span
                      className={`absolute z-10 inset-0 transition-all duration-300 ease-in-out ${
                        currentWireframe !== index && currentWireframe !== -1
                          ? 'bg-black/25'
                          : ''
                      }`}
                    />
                    {currentWireframe === index && (
                      <motion.span
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          type: 'tween',
                          duration: 0.3,
                          ease: 'easeInOut',
                        }}
                        className='block absolute top-4 left-0 px-4 py-1 rounded-r-md bg-black/75 text-white text-sm z-20'
                      >
                        {wireframe.name}
                      </motion.span>
                    )}
                    {wireframe.image}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <section ref={(el) => (sectionsRef.current[3] = el)}>
            <h1 className='text-6xl mb-10 font-bold'>Visual Design</h1>
            <div>
              <h2 className='text-4xl font-bold text-gray-600'>
                Color Palette
              </h2>
              <p className='mt-3 text-xl leading-8'>
                We chose an earthy toned color palette to invoke feelings of
                calm and trust in our users. We decided on Cosmic Latte as our
                primary color because it is a warm-toned yet simple background
                color that invokes feelings of calmness and peace, as such
                colors are known to be associated with warmer environments such
                as beaches. Tan was chosen to complement the Latte in a darker
                shade to facilitate the representation of grouped elements. On
                the other end of the spectrum, we chose White to represent a
                lighter shade of Latte, and we use it to indicate UI components
                that are more important in the visual hierarchy, like input
                boxes or the navigation menu. Kobe was chosen as an accent to
                offer contrast against the lighter backgrounds and the main
                theme. Being a darker shade of red, it stands out from the rest
                of the palette&apos;s lighter tone, and allows us to highlight
                important areas such as section headers. Finally, we decided to
                use Forest Green as our primary accent color. Embodying
                freshness and quality, this shade of green provides a stark
                contrast from the rest of our palette, allowing us to attract
                the user&apos;s attention to key information and interactables
                within our UI according to the focal point Gestalt principle.
                These colors combined bring the user feelings of familiarity,
                freshness, and reassurance all while motivating the user to take
                action and manipulate the platform.
              </p>
              <div className='mt-4 relative w-full h-[240px] flex justify-center items-center gap-2'>
                {colors.map((color) => (
                  <div
                    key={color.name}
                    className='grow basis-0 flex flex-col justify-center items-center'
                  >
                    <div
                      className='h-44 w-32 shadow-xl rounded-full'
                      style={{ backgroundColor: color.code }}
                    ></div>
                    <div className='uppercase mt-4 text-center'>
                      <p className='font-semibold leading-[0.5]'>
                        {color.name}
                      </p>
                      <p className='text-md'>{color.code}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='mt-8'>
              <h2 className='text-4xl font-bold text-gray-600'>Typography</h2>
              <p className='mt-3 text-xl leading-8'>
                We landed on Proxima Nova as the font for our application
                because it is scalable, thus legible at any size. This will
                allow for a homogenized experience across the entire app. The
                font’s appearance is not jarring to the user’s eyes and conveys
                the same soft tone that our overall UI design aims for.
                Additional features which make this font ideal for our usage are
                that it offers 7 font weights, and has case-sensitive forms for
                all-caps settings, which is great in terms of accessibile and
                inclusive design. Commonly seen on banners in grocery store
                aisles, the font brings the user to think of familiar settings
                involving food.
              </p>
              <div className='w-full h-screen flex flex-col justify-center items-center text-center mt-3 text-7xl gap-6'>
                <p className='font-thin'>Proxima Nova Thin</p>
                <p className='font-light'>Proxima Nova Light</p>
                <p className='font-normal'>Proxima Nova Regular</p>
                <p className='font-semibold'>Proxima Nova Semibold</p>
                <p className='font-bold'>Proxima Nova Bold</p>
                <p className='font-extrabold'>Proxima Nova Extrabold</p>
                <p className='font-black'>Proxima Nova Black</p>
              </div>
            </div>
          </section>
          <section ref={(el) => (sectionsRef.current[4] = el)}>
            <h1 className='text-6xl mb-10 font-bold'>Final Design</h1>
            <div>
              <h2 className='text-4xl font-bold text-gray-600'>Mockup</h2>
              <p className='mt-3 text-xl leading-8'>
                The final step in the design process involved creating high
                fidelity mockups of our app in full colour based on our chosen
                colour palette and typography. They also include our choices of
                icons and logos. The interactable elements are clearly indicated
                by their colour, icons and position on the page.
              </p>

              <div className='mt-4 grid grid-cols-4 gap-4 place-items-center'>
                {mockups.map((mockup, index) => (
                  <motion.div
                    onHoverStart={() => {
                      setCurrentMockup(index);
                    }}
                    onHoverEnd={() => {
                      setCurrentMockup(-1);
                    }}
                    whileHover={{
                      scale: 1.2,
                    }}
                    className='z-0 relative unset-img shadow-md hover:shadow-xl hover:z-10 transition-shadow duration-300 rounded-[14px] overflow-hidden'
                    key={`mockup-${mockup.name}`}
                  >
                    <span
                      className={`absolute z-10 inset-0 transition-all duration-300 ease-in-out ${
                        currentMockup !== index && currentMockup !== -1
                          ? 'bg-black/25'
                          : ''
                      }`}
                    />
                    {currentMockup === index && (
                      <motion.span
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          type: 'tween',
                          duration: 0.3,
                          ease: 'easeInOut',
                        }}
                        className='block absolute top-4 left-0 px-4 py-1 rounded-r-md bg-black/75 text-white text-sm z-20'
                      >
                        {mockup.name}
                      </motion.span>
                    )}
                    {mockup.image}
                  </motion.div>
                ))}
              </div>

              <h3 className='mt-8 text-2xl font-semibold'>
                Authentication Pages
              </h3>
              <p className='mt-2 text-xl leading-8'>
                The authentication pages prompt the user to sign in by linking
                either their Google or Apple ID accounts or via the standard
                email and password methods. First time users can select the Sign
                up now Option at the bottom to create an account. This design
                prevents user frustration users may have when trying to
                authenticate since they must select an option and only then are
                they prompted to enter their information and sign in or sign up.
                Additionally, the navigation bar is not present on the sign in
                page to prevent users from accessing the rest of the application
                without an account as they would be unable to use virtually
                every important feature of the app. The name “foodly” was chosen
                as a play on words combining food and quickly as our app
                connects users to their favorite local restaurants quickly.
              </p>
              <p className='mt-4 text-xl leading-8'>
                The name “foodly” reassures users that we are a lighthearted fun
                organization with a catchy name! The logo is a plate mid run to
                reinforce that our app can get our users in front of their next
                meal quickly and that they will be so excited to earn rewards
                they will find themselves running to get there fast!
              </p>
              <h3 className='mt-4 text-2xl font-semibold'>Navigation Bar</h3>
              <p className='mt-2 text-xl leading-8'>
                The navigation bar was changed slightly from our initial
                sketches and wireframes to better align with Jakob’s law. The
                home and random (die) icon were switched such that the home
                would be placed on the left. This brings our design more in line
                with the status quo that users are used to. The current page
                shows the icon coloured Kobe while unselected options are in the
                lighter green colour to better distinguish which page the user
                has in front of them.
              </p>
              <h3 className='mt-4 text-2xl font-semibold'>Home Page</h3>
              <p className='mt-2 text-xl leading-8'>
                The homepage greets users with a recommendation for their next
                dining experience, followed by further recommendations, grouped
                by categories including proximity, popularity and recency.
                Pictures for each restaurant have been added to give the user a
                preview of what dishes that location serves. These cards have
                heart icons so users can quickly mark their favorites with ease.
                Clicking on a card will prompt the user whether they want to be
                redirected to the rewards page or send the location information
                for that restaurant to the user’s default map application
                showing them how to get to the restaurant. While app logos are
                often located in the top left of the page, our layout was better
                served by having it on the top right in order to avoid awkward
                spacing and offering some symmetry when juxtaposed with the text
                on the left hand side . The dollar signs indicate the price of
                the restaurant so users can quickly visually distinguish
                restaurants by their price range. The scroll limit indicator in
                the recommendations group quickly tells the user they are at the
                top of the list and can scroll down to see more.
              </p>
              <p className='mt-4 text-xl leading-8'>
                In order to address a concern that came up when looking at the
                app from the perspective of our user personas, we noticed that
                there was no option to change the language from english to
                french. In order to better accommodate our francophone users
                (which are the majority in the province of Quebec) we added a
                toggle to change the language from the home page. By default the
                app will use the phone&amp;s language settings but we opted to
                add our own solution to allow anglophone or francophone users to
                be able to navigate the app in their preferred language quickly.
              </p>
              <h3 className='mt-4 text-2xl font-semibold'>Restaurant Page</h3>
              <p className='mt-2 text-xl leading-8'>
                The restaurant page appears when the user has selected a
                restaurant from the Home Page. It displays the name of the
                restaurant and an image of what dishes that restaurant serves at
                the top. It also has a heart to allow the user to quickly toggle
                the favourites option for the restaurant they are viewing.
                Important information regarding location, opening hours and
                phone number are displayed right away since these are the most
                likely to be sought by an interested user. Next the restaurant
                can be added to the user&amp;s passport which creates a passport
                page for that restaurant and adds it to their list. Lastly, the
                menu is shown so users can quickly decide if they are interested
                in ordering anything from the restaurant in question. The
                navigation bar is removed on this page so as not to interrupt
                the user&amp;s flow while browsing the menu. The backward
                navigation arrow was included to allow the user to navigate back
                to the discover page.
              </p>
              <h3 className='mt-4 text-2xl font-semibold'>
                Random Rewards Page
              </h3>
              <p className='mt-2 text-xl leading-8'>
                The random rewards page shows a carousel the user can spin once
                daily to receive a bonus. This aims to address our goal of
                helping out as many local restaurants as possible as users are
                offered additional rewards for going to new places. Users will
                be initially drawn to the restaurant and rewards sections as
                they are the focal points of this page. Then interested users
                can select “Get Directions” to navigate their way to the
                restaurant.
              </p>
              <h3 className='mt-4 text-2xl font-semibold'>Discover Page</h3>
              <p className='mt-2 text-xl leading-8'>
                The Discover page allows users to search for or browse through
                different restaurants. The first category is for the user’s
                favorite locations, noted by the heart. Following categories can
                be scrolled through and are sorted ethnographically (i.e indian,
                italian, etc.) or socioeconomically (fast food).
              </p>
              <h3 className='mt-4 text-2xl font-semibold'>
                Passport Home Page
              </h3>
              <p className='mt-2 text-xl leading-8'>
                The passport home page greets the user with a tally of how many
                unique restaurants they have been to. This subtly incentivizes
                them to visit many different locations to drive up this number.
                The passport list contains a search bar as the top field so
                user’s can quickly find the passport they need. The list is also
                ordered alphabetically so that users wishing to browse the list
                can do so in a methodical manner. The inspiration for this
                design choice was how music apps like spotify and apple music
                order their songs or albums alphabetically so users will already
                be accustomed to this ordering and have an intuitive and
                familiar understanding of it.
              </p>
              <h3 className='mt-4 text-2xl font-semibold'>
                Passport Restaurant Page
              </h3>
              <p className='mt-2 text-xl leading-8'>
                When a passport is selected, the user will be redirected to this
                page containing more detailed information regarding their
                rewards. The progress bar shows both the user’s current standing
                and how much they need to earn the next reward. The “collect
                points” button takes the user to the Passport use page. Unlocked
                rewards are displayed first to show the user what they can claim
                immediately while locked rewards are shown afterwards to show
                them what they can work towards.
              </p>
              <h3 className='mt-4 text-2xl font-semibold'>
                Passport Claim Page
              </h3>
              <p className='mt-2 text-xl leading-8'>
                The passport claim page flashes directions to the user telling
                them how to claim their points. They hold their phone near the
                reader to validate the purchase and claim the points they have
                earned. The background offers a visual guide on how to do this
                by showing a phone with depictions of wireless signals emanating
                from it. This would be animated with a rippling effect to really
                drive this point home. Providing both textual and visual
                directions ensures that this feature is accessible to a vast
                array of users. Upon successful completion the user is
                redirected to the Passport success page.
              </p>
              <h3 className='mt-4 text-2xl font-semibold'>
                Passport Success Page
              </h3>
              <p className='mt-2 text-xl leading-8'>
                This page serves as feedback to the user that their points were
                claimed successfully. It shows them how many points they have
                earned by filling the bar which would also be animated. The next
                reward they are on track to earn is shown underneath as locked
                as they have not yet unlocked it. The backward navigation is
                intentionally not present here to prevent users from going back
                to the Passport Use Page accidentally. They can instead navigate
                forward using the continue button to take them back to the
                Passport Restaurant Page.
              </p>
            </div>
            <div className='mt-8'>
              <h2 className='text-4xl font-bold text-gray-600'>
                Interactive Prototype
              </h2>
              <iframe
                className='mt-3'
                width='100%'
                height='800'
                src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FqbeO0Qr0F3qJgQE1pu280i%2FSOEN-357-Mini-Project%3Fnode-id%3D29%253A118%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D29%253A118'
                allowFullScreen
              />
            </div>
          </section>
          <section ref={(el) => (sectionsRef.current[5] = el)}>
            <h1 className='text-6xl font-bold mb-10'>Reflection</h1>
            <p className='text-xl leading-8'>
              Looking back, the most challenging aspect of this project was to
              translate the conclusions we gathered from our user research into
              meaningful design choices for our system. Every design choice
              brought us back to the drawing board to beg the question “why is
              this choice the correct decision for our users?”. That being said,
              we are confident in our design choices because we have derived
              each of them by attempting to empathize with our target user base.
              We identified that there is user interest in a rewards application
              for local restaurants, and armed with that knowledge we designed
              an appealing and engaging app to cater to those users while also
              helping local restaurants battle inflation by getting more
              customers in the door and boosting customer retention.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

type CompetitorCardProps = {
  competitor?: Competitor;
  active?: boolean;
};
const CompetitorCard: React.FC<CompetitorCardProps> = ({
  competitor,
  active,
}) => {
  if (!competitor) return null;

  return (
    <div
      className={`w-[580px] h-[560px] shadow-xl p-8 rounded-2xl select-none ${
        active ? 'bg-white' : 'bg-gray-50'
      }`}
    >
      <div className='flex items-center justify-between gap-8'>
        <div>
          <h1 className='text-3xl font-bold'>{competitor.name}</h1>
          <h2 className='text-xl text-gray-500'>{competitor.description}</h2>
        </div>
        <div className='relative min-w-[180px] h-[80px]'>{competitor.logo}</div>
      </div>
      <div className='mt-8'>
        <h3 className='text-xl font-bold -mb-1'>Main Focus</h3>
        <p className='text-lg'>{competitor.focus}</p>
      </div>
      <div className='mt-4'>
        <h3 className='text-xl font-bold -mb-1'>Rewards</h3>
        <p className='text-lg'>{competitor.rewards}</p>
      </div>
      <div className='mt-4'>
        <h3 className='text-xl font-bold -mb-1'>Issues</h3>
        <p className='text-lg'>{competitor.issues}</p>
      </div>
    </div>
  );
};

export default Home;
