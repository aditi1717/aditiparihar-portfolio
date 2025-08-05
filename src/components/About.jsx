import aditipic from "../assets/Aditi.jpeg";

// for typing effect
import { ReactTyped } from "react-typed";

// for image tilt
import Tilt from "react-parallax-tilt";

export default function About() {
  return (
    <section id="about" className="w-full relative mt-25 sm:mt-40 flex max-w-[900px] px-6 mx-auto  flex-col items-center gap-8 md:flex-row md:gap-4">
       {/* for bulb like effect */}
			<div
				className=" absolute top-4 bg-transparent left-22 lg:left-14 rounded-full"
				style={{
					boxShadow: " 0px 0px 160px 44px rgb(130, 69, 236)",
				}}
			>
				{" "}
			</div>
      <Tilt
        glareEnable={false}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.05}
        transitionSpeed={1000}
        className="relative z-10 max-w-[450px] overflow-hidden rounded-full border-4 border-[#8245ec] md:hidden md:w-auto md:flex-1"
      >
        <img
          className="aspect-square w-full object-cover"
          src={aditipic}
          alt="no photo"
        />
      </Tilt>
      <div className="xs:space-y-6 flex-1 space-y-4 text-center md:text-left w-full break-words">
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
        <p className="text-sm xs:text-base leading-7 text-gray-400  md:text-[17px] lg:text-lg w-full">
          I’m a full-stack web developer with hands-on experience in building
          projects using the MERN stack. Through personal and academic projects,
          I’ve developed skills in both front-end and back-end technologies to
          create smooth and responsive user experiences.
        </p>
        <div
          className="mt-4 md:mt-6 xs:text-[14px] inline-block rounded-full bg-[#8245ec] px-4 py-2 text-center text-xs font-semibold md:text-base"
          style={{ boxShadow: " 0px 0px 40px 0px rgb(130, 69, 236)" }}
        >
          <a className="text-white" href="https://drive.google.com/file/d/1JAhq49nPkkazGivQCNpVzF6nQaCRyUdz/view?usp=sharing" target="_blank"   rel="noopener noreferrer">
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
        className="relative z-10 hidden flex-1 overflow-hidden rounded-[30%] border-4 border-[#8245ec] md:block"
      >
        <img className="" src={aditipic} alt="no photo" />
      </Tilt>
    </section>
  );
}
