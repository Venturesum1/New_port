import Project_card from "../project_card/Project_card";
import first from "./imgs/img4.png";
import second from "./imgs/img7.png";
import third from "./imgs/img3.png";
import forth from "./imgs/img2.png";
import fifth from "./imgs/img5.png";
import sixth from "./imgs/img8.png";

const Projects = () => {
  // date
  const projects = [
    // 6 projects date
    // {
    //     // get img from img folder
    //     img: first,
    //     langs: ["html", "css", "javascript"],
    //     title: "To_do_app",
    //     disc: "Easy to reminder ",
    // },
    // {
    //     img: second,
    //     langs: ["html", "css", "javascript"],
    //     title: "QuizX",
    //     disc: "This is a simple quiz platfrom ",
    // },
    // {
    //     img: third,
    //     langs: ["html", "css", "javascript"],
    //     title: "Travel with me ",
    //     disc: "Find out more about the place to travel.",
    // },
    {
        img: forth,
        langs: ["html", "css", "javascript"],
        title: "Weather App",
        disc: "Know about the weather.",
    },
    {
        img: fifth,
        langs: ["Ejs", "Mongodb", "Node.js"],
        title: "Placement cell",
        disc: "Manage all placement.",
    },
    {
        img: sixth,
        langs: ["react"],
        title: "My Portfolio",
        disc: "All about my portfolio.",
    },
];

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div data-aos="fade-down" className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">🫠</span>projects
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium">
            <a href="https://github.com/Venturesum1">
              <span>View all ~~&gt;</span>
            </a>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, langs, title, disc }) => {
            return (
              <>
                <Project_card
                  img={img}
                  langs={langs}
                  title={title}
                  disc={disc}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
