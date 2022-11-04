import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FutureImage from 'next/future/image';

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

type Wireframe = {
  name: string;
  image: JSX.Element;
};
const wireframes: Wireframe[] = [
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
    name: 'Discover',
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

const Home: NextPage = () => {
  const [currentCompetitor, setCurrentCompetitor] = useState<number>(0);
  const [currentPersona, setCurrentPersona] = useState<number>(0);
  const [currentWireframe, setCurrentWireframe] = useState<number>(-1);

  return (
    <>
      <Head>
        <title>SOEN 357 - Mini Project</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='mx-auto flex flex-col items-center justify-center min-h-screen px-16'>
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
          <section>
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
              <h1 className='text-3xl'>
                Enter <strong className='text-[#62814b]'>foodly</strong>,
              </h1>{' '}
              <p className='text-xl leading-8'>
                a passport-like app that keeps track of restaurants you have
                visited and gives you rewards for dining at them using an NFC
                tag solution
              </p>
            </div>
          </section>
          <section>
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
          <section>
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
              {/* TODO: SKETCH DESCRIPTIONS AND DECISIONS */}
              <div className='grid grid-cols-3 gap-2 place-items-center'>
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
              {/* TODO: WIREFRAME DESCRIPTIONS AND DECISIONS */}
              <div className='grid grid-cols-8 gap-4 place-items-center'>
                {wireframes.map((wireframe, index) => (
                  <motion.div
                    onHoverStart={() => {
                      setCurrentWireframe(index);
                    }}
                    onHoverEnd={() => {
                      console.log(currentWireframe);
                      setCurrentWireframe(-1);
                    }}
                    whileHover={{
                      scale: 1.2,
                    }}
                    className={`z-0 relative unset-img col-span-2 hover:shadow-xl hover:z-10 transition-shadow duration-300 rounded-[14px] overflow-hidden ${
                      index === 8 ? 'col-start-2' : ''
                    }`}
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
          <section>
            <h1 className='text-6xl mb-10 font-bold'>Visual Design</h1>
            <div>
              <h2 className='text-4xl font-bold text-gray-600'>
                Color Palette
              </h2>
              <p className='mt-3 text-xl leading-8'>
                We chose an earthy toned color palette to invoke feelings of
                calm and trust in our users. The main theme will be a shade of
                green because it embodies freshness and quality. We chose Cosmic
                Latte as our background because it is a warm toned yet simple
                background color that invokes feelings of calmness and peace, as
                warm toned colors are known to be associated with warmer
                environments such as beaches. Tan was chosen to complement the
                Latte in a darker shade, for accents and to easier represent
                grouped elements later on. Kobe was chosen as an accent to offer
                contrast against the lighter backgrounds and the main theme.
                Being a darker shade of red, it creates the feeling of power,
                which is important in any user validation that involves some
                decisive action (for example, an “Edit user account” button).
                These colors combined bring the user feelings of familiarity and
                reassurance all while motivating the user to take action and
                manipulate the platform.
              </p>
              <div className='relative w-full h-[240px]'>
                <Image
                  src='/palette.png'
                  alt='Color Palette'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
            <div className='mt-8'>
              <h2 className='text-4xl font-bold text-gray-600'>Typography</h2>
              <p className='mt-3 text-xl leading-8'>
                We chose Proxima Nova font for our application because it is a
                scalable font that is legible at any size which will allow for a
                homogenized font across the entire app. The appearance is not
                jarring to the user’s eyes and conveys the same soft tone that
                our overall UI design aims for. Additional features which make
                this font ideal for our usage are that Proxima Nova offers 8
                font weights, and has case-sensitive forms for all-caps
                settings, which is great in terms of accessibility
                customization. Commonly seen on banners in grocery store aisles,
                the font brings the user to think of a familiar setting
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
          <section>
            <h1 className='text-6xl mb-10 font-bold'>Final Design</h1>
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
