import aditipic from "../assets/aditi.jpeg";

// for typing effect
import { ReactTyped } from "react-typed";

// for image tilt
import Tilt from "react-parallax-tilt";

export default function About() {
  return (
    <section className="mt-40 flex w-full flex-col items-center gap-8 md:flex-row md:gap-4">
      <Tilt
        glareEnable={false}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.05}
        transitionSpeed={1000}
        className="relative z-20 max-w-[450px] overflow-hidden rounded-full border-4 border-[#8245ec] md:hidden md:w-auto md:flex-1"
      >
        <img
          className="aspect-square w-full object-cover"
          src={aditipic}
          alt="no photo"
        />
      </Tilt>
      <div className="xs:space-y-6 flex-1 space-y-4 text-center md:text-left">
        <h1 className="xs:text-3xl xs:leading-14 text-2xl leading-9 font-bold text-white md:text-4xl">
          Hi,I am <br />
          <span className="xs:text-4xl text-2xl font-bold md:text-[42px] lg:text-5xl">
            Aditi Parihar
          </span>
        </h1>

        <h2 className="xs:text-xl text-lg font-bold text-white md:text-2xl">
          I'm into <br />
          <ReactTyped
            className="text-[#8245ec]"
            strings={["Frontend Development", "Backened Development"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            loop
          >
            <input type="text" className="ml-10 md:ml-0" />
          </ReactTyped>
        </h2>
        <p className="xs:text-base text-[14px] leading-7 text-[#D1D5DB] md:text-[17px] lg:text-lg">
          I’m a full-stack web developer with hands-on experience in building
          projects using the MERN stack. Through personal and academic projects,
          I’ve developed skills in both front-end and back-end technologies to
          create smooth and responsive user experiences.
        </p>
        <div
          className="xs:text-[14px] inline-block rounded-full bg-[#8245ec] px-4 py-2 text-center text-xs font-semibold md:text-base"
          style={{ boxShadow: " 0px 0px 40px 0px rgb(130, 69, 236)" }}
        >
          <a className="text-white" href="#">
            DOWNLOAD CV
          </a>
        </div>
      </div>
      <Tilt
        glareEnable={false}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.05}
        transitionSpeed={1000}
        className="relative z-20 hidden flex-1 overflow-hidden rounded-[30%] border-4 border-[#8245ec] md:block"
      >
        <img className="" src={aditipic} alt="no photo" />
      </Tilt>
    </section>
  );
}
