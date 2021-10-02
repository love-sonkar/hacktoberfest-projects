import Link from 'next/link';

import languages from 'assets/languages.json';
import { motion } from 'framer-motion';

const { main: mainLanguages, others: otherLanguages } = languages;

const Hero = () => {
  return (
    <div
      className="min-h-screen hero"
      style={{
        backgroundImage:
          'url("https://hacktoberfest.digitalocean.com/_nuxt/img/logo-hacktoberfest-full.f42e3b1.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '80%'
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Select your language</h1>
          <p className="mb-5">
            Select the programming language you would like to find repositories
            for.
          </p>
          {mainLanguages.map(language => (
            <Link key={language} href={`/repos/${language.toLowerCase()}`}>
              <a>
                <motion.button
                  initial={{ scale: 0.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="m-2 bg-primary hover:bg-hero-button-hover border-0 btn btn-lg"
                >
                  {language}
                </motion.button>
              </a>
            </Link>
          ))}
          <a href="https://github.com/max-programming/hacktoberfest-projects/">
            <button className="m-2 bg-accent hover:bg-primary border-0 btn btn-lg">
              Add another language
            </button>
          </a>

          <div className="dropdown">
            <div tabIndex={0} className="m-1 btn">
              Other languages
            </div>

            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 overflow-auto"
            >
              {otherLanguages.map(language => (
                <Link key={language} href={`/repos/${language.toLowerCase()}`}>
                  <a>
                    {language}
                  </a>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
