import React from "react";
import AnimatedItem from "./AnimatedItem";
import { MdOutlineClose } from "react-icons/md";

const Experience = ({ experience, setexperience }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 transition-opacity ${
        experience ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="bg-opacity-100 backdrop-blur-3xl border border-gray-400  w-[1000px] h-[500px] overflow-y-scroll p-1 rounded-lg shadow-xl  border-opacity-10">
        <div className="flex">
          <MdOutlineClose
            className="text-white text-4xl ml-auto p-1  hover:bg-red-600 rounded-tr-md rounded-br-md"
            onClick={() => {
              const audio = new Audio("click.wav");
              audio.play();
              setexperience(false);
            }}
          />
        </div>

        <div className="flex flex-col items-start justify-start p-5">
          <AnimatedItem animationConfig={{ delay: 0.1 }}>
            <div className="flex flex-col w-full">
              <h1 className="text-4xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                Experience
              </h1>
              <section className="mt-2 text-white">
                <div className="container">
                  <div className="space-y-6">
                    {/* EcoHotels */}
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium">
                        MAY 2023 - Present
                      </h3>
                      <h4 className="text-md font-medium">
                        EcoHotels, Remote [Denmark] - Frontend Lead Developer
                      </h4>
                      <p className="text-sm">
                        1. Redesigned and optimized the company website using
                        React and Next.js, resulting in improved performance and
                        faster operations.
                        <br></br>
                        2. Developed and integrated corporate pages that
                        onboarded 10,000+ companies, contributing to increased
                        revenue.
                        <br></br>
                        3. Lead a team of 5 frontend developer to maintain the
                        company website.
                        <br></br>
                        4. Implement white-label solution for hotels loyalty
                        programme
                      </p>
                    </div>

                    {/* TAFHUB */}
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium">
                        JANUARY 2023 - JUNE 2023
                      </h3>
                      <h4 className="text-md font-medium">
                        TAFHUB, Remote [Greece] - Flutter Developer
                      </h4>
                      <p className="text-sm">
                        1. Contributed to the "FlutterShare" mobile application,
                        enhancing user experience and engagement.
                        <br></br>
                        2. Developed Pan & Pan, a game designed to enhance
                        cognitive abilities
                      </p>
                    </div>

                    {/* Google Developer Students Club */}
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium">JULY, 2023</h3>
                      <h4 className="text-md font-medium">
                        NIJOSTAM - Web Developer [Contract]
                      </h4>
                      <p className="text-sm">
                        1. Designed and developed the official website for the
                        NILEST Journal of Science, Technology, and Management, a
                        multidisciplinary and peer-reviewed publication by
                        NILEST.
                        <br></br>
                        2. This project involved creating a dynamic online
                        platform that serves as a beacon for scholarly
                        excellence, open access, and rigorous peer review.
                      </p>
                    </div>

                    {/* ENACTUS */}
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium">
                        AUGUST 2022 - FEBUARY 2023
                      </h3>
                      <h4 className="text-md font-medium">
                        Google Developer Students Club - GDSC Lead
                      </h4>
                      <p className="text-sm">
                        1. Organized hands-on workshops and events to promote
                        knowledge of developer products and also trained 134
                        students in various tech fields.
                        <br></br>
                        2. I led a team of 20 developers in creating 2 mobile
                        apps for the Google Solution Challenge in 2023.
                      </p>
                    </div>

                    {/* Ahmadu Bello University */}
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium">
                        JANUARY 2022 - DECEMBER 2022
                      </h3>
                      <h4 className="text-md font-medium">
                        ENACTUS - Technical Director
                      </h4>
                      <p className="text-sm">
                        1. Developed a functional website for ENACTUS NILEST
                        Team.
                        <br />
                        2. Provided maintenance, support, and advice to the team
                        leader and faculty advisor on the organization's systems
                        and facilities.
                        <br />
                        3. Managed the organization's website, ensuring its
                        smooth operation and functionality.
                      </p>
                    </div>

                    {/* JayWebtech */}
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium">
                        JULY, 2021 - DECEMBER 2021
                      </h3>
                      <h4 className="text-md font-medium">
                        Togman Technologies - Web Developer/Instructor
                      </h4>
                      <p className="text-sm">
                        I have successfully trained over 150 students in web
                        design/development, employing hands-on teaching methods
                        and covering a diverse skill set, while also building
                        and delivering client-satisfying websites through
                        effective project management and continuous learning
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </div>
  );
};

export default Experience;
