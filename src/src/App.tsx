import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const NavLinks = [
  {
    url: "./about-me",
    title: "About Me",
  },
  {
    url: "./blog",
    title: "Blog",
  },
  {
    url: "./pure-non-dualism-freedom",
    title: "Pure Non Dualism & Freedom",
  },
  {
    url: "./course-in-miracles",
    title: "A Course in Miracles",
  },
  {
    url: "",
    title: "Satsang's (Sacred Gatherings) with Akash Sky",
  },
];

const headerNav = (
  <div class="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
    <a class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
      <h2>Akash Sky</h2>
    </a>
    <nav class="flex flex-wrap items-center justify-center pl-6 ml-6 text-base border-l border-gray-200 md:mr-auto">
      {Object.keys(NavLinks).map((el) => {
        return (
          <a href="#_" class="mr-5 font-medium hover:text-gray-900">
            {NavLinks[el].title}
          </a>
        );
      })}
    </nav>
  </div>
);

const SectionHeader = ({ text }: { text: string }) => {
  return (
    <h5 class="font-semibold  rounded-xl bg-gray-900 text-white w-fit py-2 px-10">
      {text}
    </h5>
  );
};

const ResumeHeaderTitle = (props: { text?: string }) => {
  const { text = "Sebastian Mititelu" } = props;
  return <h1 class="text-4xl font-semibold">{text}</h1>;
};
const ResumeHeaderRole = (props: { text?: string }) => {
  const { text = "Software / React Developer" } = props;
  return <h3 class="text-2xl font-thin">{text}</h3>;
};

const ResumeHeaderContact = (props: {
  text?: string;
  fieldMap?: Record<string, string>;
}) => {
  const {
    text = "contact",
    fieldMap = {
      phone: "+447983345901",
      email: "seb@mititelu.co.uk",
      "Linked In Profile": "linkedin.com/in/sebastian-mititelu-a54383140",
    },
  } = props;

  const fieldKeyList = Object.keys(fieldMap);
  return (
    <section class="container flex flex-col align-end">
      <h5 class="text-end font-semibold">{text}</h5>
      {fieldKeyList.length > 0 &&
        fieldKeyList.map((fieldKey) => {
          return (
            <p class="text-end italic">
              {fieldKey}{" "}
              <a href={fieldMap[fieldKey]} class="not-italic">
                {fieldMap[fieldKey]}
              </a>
            </p>
          );
        })}
    </section>
  );
};

const ResumeHeaderDescription = (props: {
  text?: string;
  paragraphList?: string[];
}) => {
  const {
    text = "Summary",
    paragraphList = [
      `I am a simple programmer, I like my code functional, typed, clean & reusable & prefer working with people that are solution-oriented, help  learn from each other, it is just how I work.`,
      `My previous experience has helped me gain both independent and collaborative work in high-paced environments in developing Web & Cross-Platform Software full-stack with modern technologies. My go-to stack being Next.JS, Prisma,GraphQL, PostgresSOL or Mongo & Docker in either AWS or GCE.`,
    ],
  } = props;
  return (
    <section class="container flex flex-col rounded-3xl py-2 mx-auto my-6 px-4  bg-slate-200 w-10/12">
      <SectionHeader text={text} />
      {paragraphList.length > 0 &&
        paragraphList.map((el) => {
          return (
            <>
              <p>{el}</p>
              <br />
            </>
          );
        })}
    </section>
  );
};

type JobExperience = {
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  outcomeList: string[];
};

const WorkXP = (
  props:
    | {
        text?: string;
        jobList?: JobExperience[];
        subContainerClass?: string;
        extraClass?: string;
      }
    | {
        text?: string;
        jobList?: string[];
        subContainerClass?: string;
        extraClass?: string;
      }
) => {
  const {
    text = "Work Experience - Top 3",
    subContainerClass = "w-fit-content",
    extraClass = "flex-col",
    jobList = [
      {
        role: "React / Software Developer",
        company: "Sky TV",
        start: "January 2023",
        end: "present",
        location: "London, UK",
        outcomeList: [
          "Developed and delivered high-quality web applications using React, Node, Next.js, and TypeScript",
          "Worked with a team of engineers to design and implement new features",
          "Contributed to the development of the company's software development process",
        ],
      },
      {
        role: "Web Development Teacher / Mentor",
        company: "OpenClassrooms",
        start: "October 2022",
        end: "present",
        location: "Remote, UK & US",
        outcomeList: [
          "Trained & Mentored over 150 students on becoming Web Developers",
          "Taught programming in Webinars to non-technical people",
        ],
      },
      {
        role: "Software Developer",
        company: "Fresh Relevance",
        start: "June 2019",
        end: "present",
        location: "Remote, UK",
        outcomeList: [
          "Developed and delivered high-quality web applications using React, Django, and TypeScript",
          "Converted 70% of the codebase to TypeScript",
          "Established great communication for deliverables between stakeholders to allow quick, agile delivery",
        ],
      },
    ],
  } = props;

  return (
    <>
      <SectionHeader text={text} />
      <div class={`flex w-fit-content h-1/8 flex-wrap ${extraClass}`}>
        {jobList.length > 0 &&
          jobList.map((job) => {
            return (
              <section class={`py-2 mx-2 my-2 px-1 ${subContainerClass}`}>
                {typeof job === "string" ? (
                  <h6>{job}</h6>
                ) : (
                  <>
                    <h6 class="font-bold">
                      {job.role}, {job.company}
                    </h6>
                    <p class="italic">
                      {job.start} to {job.end}
                    </p>
                    {Array.isArray(job.outcomeList) &&
                      job.outcomeList.length > 0 && (
                        <ul class="list-disc w-full flex flex-wrap flex-col px-4 py-2">
                          {job.outcomeList.map((outcome) => {
                            return <li>{outcome}</li>;
                          })}
                        </ul>
                      )}
                  </>
                )}
              </section>
            );
          })}
      </div>
    </>
  );
};

const otherRoles = [
  {
    role: "Computer Science Master Students Mentor Coordinator",
    company: "University of Southampton",
    start: "September, 2020",
    end: "April, 2023",
    location: "Remote, UK",
    outcomeList: [
      "coordinate & train M.Sc. Computer Science over 150 mentors & 1000s of students",
    ],
  },
  {
    role: "Computer Science Demonstrator / Teacher",
    company: "University of Southampton",
    start: "September, 2020",
    end: "July, 2022",
    location: "Remote, UK",
  },
];

const educationRoleList = [
  {
    role: "PhD Human-Computer Interaction",
    company: "University of Southampton",
    start: "September, 2020",
    end: "July, 2022",
    location: "Remote, UK",
    outcomeList: [
      "Got an article published at a CHI 2020 workshop",
      "Led & organized 2 main studies with over 50 participants",
    ],
  },
  {
    role: "MEng Computer Science",
    company: "University of Southampton",
    end: "July, 2020",
    location: "Southampton, UK",
    outcomeList: [
      "Specialization in Cybersecurity & AI",
      "Project Coordinator & Full-Stack Engineer for National Crime Agency",
      "developed a User-Interface with React, Electron &Flaskt orun Machine Learning algorithms for non-expert machine learning for Data Exploration purposes",
    ],
  },
  {
    role: "BSc Computer Science",
    company: "University of Southampton",
    end: "July, 2019",
    location: "Southampton, UK",
    outcomeList: [
      "Core Programming Language was Java",
      "Projects with AWS, Serverless, GCE",
      "Developed my own programming language ni Haskell",
    ],
  },
];

const relevantCertList = [
  "Udemy - React Testing with Jest & Enzyme",
  "Udemy - R e a c t- The Complete Guide (incl Hooks, React Router, Redux)",
  "MASPM - Product Management: Building a Product Roadmap",
  "LinkedIn - Picking the Right Chart - Charts with D3, HTML, JavaScript & CSS",
];

const App: Component = () => {
  return (
    <div class="w-screen h-full px-20 py-5">
      <header class="w-full mt-5 text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
        <div class=" flex flex-row justify-between w-full">
          <div class="flex flex-col">
            <ResumeHeaderTitle />
            <ResumeHeaderRole />
          </div>
          <ResumeHeaderContact />
        </div>
        <ResumeHeaderDescription />
      </header>
      <main>
        <section class="w-full flex flex-col">
          <WorkXP subContainerClass="flex-row w-1/4" extraClass="flex-row gap-row-4 justify-between" />
        </section>
        <div class="flex flex-wrap w-full">
          <section class="flex flex-col w-1/2">
            <WorkXP text="Other Roles" jobList={otherRoles} />
          </section>
          <section class="flex flex-col w-1/2">
            <WorkXP text="Relevant Certifications" jobList={relevantCertList} />
          </section>
        </div>
        <section class="flex flex-col w-full flex-wrap h-22">
          <WorkXP
            text="Education History"
            jobList={educationRoleList}
            subContainerClass="flex h-1/2 flex-wrap flex-row w-1/4"
            extraClass="flex-row gap-row-40 justify-between"
          />
        </section>
      </main>
    </div>
  );
};

export default App;
