import { Balancer } from "react-wrap-balancer";
import { buttonVariants } from "../ui/button";
import { Icons } from "../icons";

export function HeaderSection() {
  return (
    <header className="text-center my-16">
      <div className="max-w-xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
          <span className="text-gradient-flame">Ricardo Chu</span>
        </h1>

        <h2 className="block mb-3 leading-relaxed text-2xl font-bold text-gray-800 dark:text-white">
          FullStack Developer
        </h2>

        <h3 className="mb-3 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
          <Balancer>
            I have over 2 years of experience in web development, where I have worked extensively
            with React, Typescript, and Node.js, among other technologies. Attention to detail, UX
            and performance.
          </Balancer>
        </h3>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-8 mx-auto"
          src="https://skillicons.dev/icons?i=js,ts,react,nextjs,postgres,mongodb,nodejs,tailwind"
          alt="JavaScript, TypeScript, React.js, Next.js, PostgreSQL, MongoDB, Node.js, TailwindCSS"
          title="JavaScript, TypeScript, React.js, Next.js, PostgreSQL, MongoDB, Node.js, TailwindCSS"
        />

        <div className="flex gap-2 justify-center mt-12">
          <a href="#contact" className={buttonVariants({ variant: "secondary" })}>
            Contact me
          </a>

          <a
            href="https://drive.google.com/file/d/1QUC9P8ZYpSCGvAPiYXM_bRs5Bx5W_LCJ/view?usp=sharing"
            className={buttonVariants()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <Icons.extlink className="ml-2" width={18} height={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
