import { FileIcon, GitHub, In, Mail, XIcon } from "../Icons";
import cv from "./Ilya_smiyukha_CV.pdf";

const Contacts = () => {
  return (
    <>
      <div className="relative z-10 flex flex-wrap mt-8 divide-x-2">
        <a
          href="https://www.linkedin.com/in/ilya-smiukha/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:underline px-4 pl-0"
        >
          <In />
          LinkedIn
        </a>
        <a
          href="https://twitter.com/Ilya_Smiyukha"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:underline  px-4"
        >
          <XIcon /> X
        </a>
        <a
          href="https://github.com/IlyaSmiyukha"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:underline  px-4"
        >
          <GitHub />
          Github
        </a>
        <a
          href="mailto:ilya.smiyuha@gmail.com"
          className="flex items-center gap-1 hover:underline  px-4"
        >
          <Mail />
          Mail
        </a>
        <a
          href={cv}
          className="flex items-center gap-1 hover:underline  px-4"
          download
        >
          <FileIcon />
          Download CV
        </a>
      </div>
    </>
  );
};

export default Contacts;
