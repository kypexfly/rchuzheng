import { Balancer } from "react-wrap-balancer";
import { ExternalLink } from "tabler-icons-react";
import { buttonVariants } from "../ui/button";

export function HeaderSection() {
  return (
    <header className="text-center sm:text-left my-16 grid grid-cols-4 md:grid-cols-12">
      <div className=" col-span-full sm:col-span-2 md:col-span-5 order-first sm:order-last max-h-96">
        <img
          className="py-3 object-center sm:object-right-top object-contain w-full h-full"
          alt=""
          width={300}
          height={300}
          // src="https://ouch-cdn2.icons8.com/lTABGk9GHVKDt6RO3YkKE9XxQv9wP558TYsTWVMAzjc/rs:fit:368:330/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzE2/L2Y1YmJjN2Y5LTY3/NWItNDBjMC05Nzky/LWQyYTZhM2Y3MTI3/Yi5wbmc.png"
          src="https://ouch-cdn2.icons8.com/bVDAfqOecpe2mEKZvcLz69YiPg72XaP8PCLLsQ5vQM4/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODgw/LzAyZDgzNGEyLTM3/MzgtNDdmMC04N2Mw/LTA2N2Q0YjEyOGM3/YS5wbmc.png"
        />
      </div>

      <div className="col-span-full sm:col-span-2 md:col-span-7 self-center">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
          <span className="text-gradient-flame">Ricardo Chu</span>
        </h1>

        <h2 className="block mb-3 leading-relaxed text-2xl font-bold text-gray-800 dark:text-white">
          FullStack Developer
        </h2>

        <h3 className="mb-3 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
          <Balancer>
            +2 years of experience in web development, experienced with React, Typescript, Node.js
            and more. Attention to detail, UX and performance.
          </Balancer>
        </h3>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-8 mx-auto sm:mx-0"
          src="https://skillicons.dev/icons?i=js,ts,react,nextjs,postgres,mongodb,nodejs,tailwind"
          alt="JavaScript, TypeScript, React.js, Next.js, PostgreSQL, MongoDB, Node.js, TailwindCSS"
          title="JavaScript, TypeScript, React.js, Next.js, PostgreSQL, MongoDB, Node.js, TailwindCSS"
        />

        <div className="flex gap-2 justify-center sm:justify-start mt-12">
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
