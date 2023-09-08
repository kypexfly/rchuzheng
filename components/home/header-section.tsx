import { Balancer } from "react-wrap-balancer";
import { Button, buttonVariants } from "../ui/button";
import { ExternalLink } from "tabler-icons-react";
import Image from "next/image";

export function HeaderSection() {
  return (
    <header className="text-center sm:text-left my-16 grid grid-cols-4 md:grid-cols-12">
      {/* <div className=" col-span-full sm:col-span-2 md:col-span-5 order-first sm:order-last p-3">
        <img
          className="mx-auto"
          width={300}
          height={300}
          src="/experimental-laptop-with-windows-and-code-for-the-programmers-work.png"
        />
      </div> */}

      <div className="col-span-full">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
          <span className="text-gradient-flame">Ricardo Chu</span>
        </h1>

        <h2 className="block mb-3 leading-relaxed text-2xl font-bold text-gray-800 dark:text-white ">
          FullStack Developer
        </h2>

        <h3 className="mb-3 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
          <Balancer>
            Experience with React, Typescript, Node.js and more. <br />
            Attention to detail, UX and performance.
          </Balancer>
        </h3>

        <div className="flex gap-2 justify-center sm:justify-start mt-9">
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
            <ExternalLink className="ml-2" width={18} height={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
