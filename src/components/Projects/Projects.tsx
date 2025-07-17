const ProjectsList = [
  {
    name: "Napster Companion",
    description:
      "Conversational AI experience that lets you engage in real-time video chat with customizable AI personas.",
    link: "https://companion.napster.ai/",
    stack:
      "Vite, React, TypeScript, Axios, TanStack Query, Tailwind, Redux, WebRTC, Sockets, LLMs, SSR",
  },
  {
    name: "Cogcache",
    description:
      "Is an enterprise-grade AI infrastructure solution focused on accelerating, aligning, and optimizing LLM ",
    link: "https://touchcast.com/cogcache",
    stack:
      "React, TypeScript, Axios, TanStack Query, LLMs, Jest, React Testing Library",
  },
  {
    name: "Showcase",
    description:
      "App that lets users create interactive, broadcast-style videos by overlaying live media elements ",
    link: "https://portaldev.touchcast.io/showcase/big-beautiful-showcase#/",
    stack: "React, TypeScript, Axios, Redux, Jest, React Testing Library",
  },
  {
    name: "Touchcast",
    description:
      "Generative Web platform that enables organizations to create, publish, manage, and distribute immersive AI‑powered media and interactive experiences",
    link: "https://touchcast.com/",
    stack:
      "React, TypeScript, Axios, Redux,  Sockets, HLS, Jest, React Testing Library,",
  },
  {
    name: "Touchcast Microsoft Teams App",
    description:
      "App that brings the power of Touchcast to Microsoft Teams, enabling AI-driven media experiences",
    link: "https://teams.microsoft.com/l/app/770b1319-9940-412b-8828-a26b45aaec42?source=app-details-dialog",
    stack: "React, TypeScript, Axios, Redux, Jest, React Testing Library",
  },
  {
    name: "Pioneer (Joystream)",
    description:
      "the governance interface for the Joystream DAO, a decentralized video platform",
    link: "https://pioneerapp.xyz/",
    stack:
      "React, TypeScript, GraphQL, Redux, Jest, React Testing Library, Polkadot.js",
  },
  {
    name: "Gearbox App",
    description: "V2 app for Gearbox Finance",
    link: "https://app.gearbox.fi/",
    stack: "React, Axios, TypeScript, Redux, Ethers, Wagmi",
  },
  {
    name: "Gearbox Trading App",
    description: "V2 trading app for Gearbox Finance",
    link: "https://pure.gearbox.fi/trade",
    stack: "React, Axios, TypeScript, Redux, Ethers, Wagmi",
  },
  {
    name: "Gearbox Analytics",
    description: "Analytics dashboard for Gearbox Finance",
    link: "https://charts.gearbox.finance/overview",
    stack: "React, Axios, TypeScript, Redux, Ethers, Wagmi",
  },
  // {
  //   name: "Gearbox Landing",
  //   description: '',
  //   link: "https://gearbox.fi/",
  // },
];

const Projects = () => {
  return (
    <>
      <h3 className="text-2xl md:text-4xl mt-8 md:mt-24 text-white">
        Projects
      </h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
        {ProjectsList.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-800 bg-opacity-70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <h4 className="text-xl font-semibold text-white">{project.name}</h4>
            <p className="text-zinc-300 mt-2 flex-1">
              {project.description}
              <br />
              <span className="text-sm text-zinc-400 mt-2">
                Stack: {project.stack}
              </span>
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 mt-4 inline-block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
