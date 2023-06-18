import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { socialList } from "@/data";
import Image from "next/image";
import { ExternalLink } from "tabler-icons-react";

export default function About() {
  return (
    <>
      <Description />
      <Skills />
      <Education />
      <Articles />
    </>
  );
}

function Description() {
  return (
    <section className="my-16">
      <h1 className="text-center sm:text-left mb-6 text-gray-800 dark:text-white text-5xl font-bold tracking-tight">
        <Image src="/me.png" alt="Ricardo Chu photo" className="rounded-full block mx-auto mb-3 xs:inline xs:mr-3" width="80" height="80" />
        <span className="text-gradient-flame">About</span> Me
      </h1>
      <p className="max-w-prose mb-8 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
        Hey, I&apos;m Ricardo! 🤗 I love computers, science, math and videogames.
      </p>

      <p className="max-w-prose mb-8 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
        I&apos;m a 23-year-old Frontend Developer. From a young age, I have been fascinated by the intricacies of web
        development, exploring programming languages such as Javascript, Python and MATLAB/R for scientific and
        engineering applications.
      </p>
      <p className="max-w-prose mb-8 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
        I have managed graphic design communities for over 5 years. Throughout my career, conducted research projects on
        topics such as the sizing of residential photovoltaic systems and analyzing the harmonics of electric vehicles
        in distribution networks. I have a strong passion for learning and am always seeking new knowledge and
        experiences.
      </p>

      <p className="max-w-prose mb-8 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
        You can contact me in any of the following ways: <br />
        {socialList.map((s) => (
          <a key={s.label} href={s.url} className="flex gap-2 link" target="_blank" rel="noopener noreferrer">
            <s.icon /> {s.label}{" "}
          </a>
        ))}
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section className="my-16">
      <h2 className="mb-6 text-gray-800 dark:text-white text-3xl font-bold tracking-tight sm:text-3xl">
        ✨ Skills and Technologies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <ul className="font-normal text-gray-700 dark:text-gray-300 leading-relaxed list-inside list-disc">
          <li>Typescript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
        </ul>
        <ul className="font-normal text-gray-700 dark:text-gray-300 leading-relaxed list-inside list-disc">
          <li>React Query</li>
          <li>Zustand</li>
          <li>Tailwind</li>
          <li>Git, Github</li>
          <li>Framer Motion</li>
          <li>JWT Auth</li>
        </ul>
        <ul className="font-normal text-gray-700 dark:text-gray-300 leading-relaxed list-inside list-disc">
          <li>ESLint, Prettier</li>
          <li>Docker</li>
          <li>Javascript</li>
          <li>Python, Java</li>
          <li>Prisma</li>
          <li>Strapi</li>
        </ul>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="my-16">
      <h2 className="mb-6 text-gray-800 dark:text-white text-3xl font-bold tracking-tight sm:text-3xl">🎓 Education</h2>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-violet-500 dark:bg-violet-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 2023 - Present
          </time>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Backend with Java</h3>
          <p className="mb-4 max-w-prose font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
            Globant University
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-violet-500 dark:bg-violet-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            November 2017 - January 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Electrical Engineer</h3>
          <p className="max-w-prose mb-10 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
            Universidad Técnica Estatal de Quevedo
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-violet-500 dark:bg-violet-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            August 2021 - November 2021
          </time>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Web Developer</h3>
          <p className="max-w-prose mb-10 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">ZTM Academy</p>
        </li>
      </ol>
    </section>
  );
}

function Articles() {
  return (
    <section className="my-16">
      <h2 className="mb-6 text-gray-800 dark:text-white text-3xl font-bold tracking-tight sm:text-3xl">📃 Articles</h2>

      <Card>
        <CardHeader>
          <CardTitle>Sizing of a Photovoltaic System in the City of Quevedo for Residential Use</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <CardDescription>
            The sizing of a small photovoltaic system of a residence in the city of Quevedo is presented, with the
            objective of analyzing solar photovoltaic installations as a measure to promote the use of distributed
            generation in homes and the reduction of costs to be paid for electricity consumption.
          </CardDescription>
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://centrosuragraria.com/index.php/revista/article/view/131/304"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more <ExternalLink className="ml-1" size={18} />
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
