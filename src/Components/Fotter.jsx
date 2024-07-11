import figma from "../assets/image.png";
import Icon from "../assets/Icon.png";
import Instgram from "../assets/Logo Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";
import Youtube from "../assets/Logo YouTube.png";
export const Fotter = () => {
  return (
    <>
      <div className="bg-CustomBlueHead w-screen sm:h-[468px] md:h-[468px] lg:h-[468px]">
        <div className="flex">
          <div>
            <img src={figma} alt="figma" className="w-[35px] mb-4 pt-4" />
            <div className="flex gap-2">
              <img src={Icon} alt="" />
              <img src={Instgram} alt="" />
              <img src={LinkedIn} alt="" />
              <img src={Youtube} alt="" />
            </div>
          </div>

          <div className="flex flex-column text-white pl-[100px] pt-4">
            <a href="" className="mb-5">
              Use cases
            </a>
            <a href="" className="mb-2">
              UI design
            </a>
            <a href="" className="mb-2">
              UX design
            </a>
            <a href="" className="mb-2">
              Wireframing
            </a>
            <a href="" className="mb-2">
              Diagramming
            </a>
            <a href="" className="mb-2">
              Brainstorming
            </a>
            <a href="" className="mb-2">
              Online whiteboard
            </a>
            <a href="" className="mb-2">
              Team collaboration
            </a>
          </div>

          <div className="flex flex-column text-white pl-[100px] pt-4">
            <a href="" className="mb-5">
              Explore
            </a>
            <a href="" className="mb-2">
              Design
            </a>
            <a href="" className="mb-2">
              Prototyping
            </a>
            <a href="" className="mb-2">
              Development features
            </a>
            <a href="" className="mb-2">
              Design systems
            </a>
            <a href="" className="mb-2">
              Collaboration features
            </a>
            <a href="" className="mb-2">
              Design process
            </a>
            <a href="" className="mb-2">
              FigJam
            </a>
          </div>
          <div className="flex flex-column text-white pl-[100px] pt-4">
            <a href="" className="mb-5">
              Resources
            </a>
            <a href="" className="mb-2">
              Blog
            </a>
            <a href="" className="mb-2">
              Best practices
            </a>
            <a href="" className="mb-2">
              Colors
            </a>
            <a href="" className="mb-2">
              Color wheel
            </a>
            <a href="" className="mb-2">
              Support
            </a>
            <a href="" className="mb-2">
              Developers
            </a>
            <a href="" className="mb-2">
              Resource library
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
