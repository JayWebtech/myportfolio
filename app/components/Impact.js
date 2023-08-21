import React from "react";
import AnimatedItem from "./AnimatedItem";
import { MdOutlineClose } from "react-icons/md";

const Impact = ({ impact, setImpact }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 transition-opacity ${
        impact ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="bg-opacity-100 backdrop-blur-3xl border border-gray-400  w-[1000px] h-[500px] overflow-y-scroll p-1 rounded-lg shadow-xl  border-opacity-10">
        <div className="flex">
          <MdOutlineClose
            className="text-white text-4xl ml-auto p-1  hover:bg-red-600 rounded-tr-md rounded-br-md"
            onClick={() => {
              const audio = new Audio("click.wav");
              audio.play();
              setImpact(false);
            }}
          />
        </div>

        <div className="flex flex-col items-start justify-start p-5">
          <AnimatedItem animationConfig={{ delay: 0.1 }}>
            <div className="flex flex-col w-full">
              <h1 className="text-4xl font-medium text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                Impact
              </h1>
              <section className="mt-2 text-white">
                <div className="container">
                  <div className="space-y-6">
                    {/* EcoHotels */}
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium">
                        Google Developers Students Club
                      </h3>
                      <h4 className="text-md font-medium">GDSC Lead</h4>
                      <p className="text-sm font-Rubik font-light">
                        As a dedicated Google Developers Students Club (DSC)
                        Lead, I have passionately spearheaded initiatives to
                        empower and inspire the next generation of tech
                        enthusiasts. In my role, I've had the privilege of
                        mentoring and guiding over 100 eager students through
                        their journey in the exciting realms of web and software
                        development. My commitment to nurturing talent has led
                        to the successful certification of these students,
                        equipping them with valuable skills and knowledge that
                        are not only essential in the modern digital landscape
                        but also in high demand across various industries.
                      </p>
                    </div>

                    {/* TAFHUB */}
                    <div className="flex flex-col space-y-2">
                      <h4 className="text-lg font-medium">
                        National Association of Computing Students (NACOS)
                      </h4>
                      <h4 className="text-md font-medium">NACOS President</h4>
                      <p className="text-sm">
                        In my role as President of the National Association of
                        Computing Students (NACOS), I've had the privilege of
                        leading a vibrant and forward-thinking community of
                        future technology leaders. NACOS, as a premier student
                        organization, is committed to promoting excellence in
                        the field of computing and nurturing the talents of its
                        members. As President, my primary objective has been to
                        drive innovation, collaboration, and professional growth
                        within the organization. I've worked tirelessly to
                        create a dynamic environment where students with a
                        passion for computing can thrive and evolve into
                        well-rounded, industry-ready professionals. <br></br>I
                        was able to train and certified 50+ students in Web
                        Design
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

export default Impact;
