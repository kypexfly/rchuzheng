import { Balancer } from "react-wrap-balancer";

export function HeaderSection() {
  return (
    <header className="text-center my-16">
      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
        <span className="text-gradient-flame">Ricardo Chu</span>
      </h1>
      <h2 className="block mb-3 leading-relaxed text-2xl font-bold text-gray-800 dark:text-white ">
        Frontend Developer
      </h2>
      <h3 className="mb-3 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
        <Balancer>
          Experience with React, Typescript, Node.js and more. <br />
          Attention to detail, UX and performance.
        </Balancer>
      </h3>
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="h-8 mx-auto"
        src="https://skillicons.dev/icons?i=js,ts,react,nextjs,postgres,mongodb,nodejs,tailwind"
        alt="JavaScript, TypeScript, React.js, Next.js, PostgreSQL, MongoDB, Node.js, TailwindCSS"
        title="JavaScript, TypeScript, React.js, Next.js, PostgreSQL, MongoDB, Node.js, TailwindCSS"
      />
    </header>
  );
}
