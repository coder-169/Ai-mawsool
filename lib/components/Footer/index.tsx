"use client";

import Image from "next/image";

import { useSupabase } from "@/lib/context/SupabaseProvider";
const Footer = (): JSX.Element => {
  const { session } = useSupabase();
  if (session?.user !== undefined) {
    return <div />;
  }

  return (
    <footer className="bg-white dark:bg-black w-full  border-t dark:border-white/10 mt-auto py-4">
      <div className="container px-5 py-8 w-full sm:w-4/5 mx-auto">
        <h3 className="text-base font-bold">ADDRESS</h3>
        <div className="my-4 scroll-py-2">
          <p className="text-gray-600">MAWSOOL INTERNATIONAL FZCO</p>
          <p className="text-gray-600">IFZA Business Park, DDP, 21745 - 001</p>
          <p className="text-gray-600">Dubai Silicon Oasis</p>
          <p className="text-gray-600">Dubai, United Arab Emirates</p>
        </div>
        <div className="w-full flex  items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={"/logo.png"} width={150} height={150} alt="logo" />
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Mawsool all rights Reserved—
            <a
              href="mailto:info@maswool.tech"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              info@mawsool.tech
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
