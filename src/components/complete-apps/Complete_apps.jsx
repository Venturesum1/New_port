import React from 'react'
// imgs
import first from "./imgs/img4.png";
import second from "./imgs/img7.png";
import third from "./imgs/img3.png";
import forth from "./imgs/img2.png";
import fifth from "./imgs/img5.png";
import sixth from "./imgs/img8.png";
import Project_card from '../project_card/Project_card';

const Complete_apps = () => {
    const projects = [
        // 6 projects date
        {
            // get img from img folder
            img: first,
            langs: ["html", "css", "javascript"],
            title: "To_do_app",
            disc: "Easy to reminder ",
        },
        {
            img: second,
            langs: ["html", "css", "javascript"],
            title: "QuizX",
            disc: "This is a simple quiz platfrom ",
        },
        {
            img: third,
            langs: ["html", "css", "javascript"],
            title: "Travel with me ",
            disc: "Find out more about the place to travel.",
        },
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
        <div>
            <div className=" pt-[114px] px-5 max-w-[1560px] mx-auto">
                {/* top / title */}
                <div className="">
                    {/* projects */}
                    <div className=" text-white font-bold text-[32px]">
                        <span className=" text-[#C778DD]">😁</span>
                        <span>projects</span>
                    </div>
                    {/* list */}
                    <div className=" text-white mt-[14px]">List of my projects</div>
                </div>
                {/* completed tasks */}
                <div className="">
                    {/* title */}
                    <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
                        <span className=" text-[#C778DD]">#</span>
                        <span>complete-apps</span>
                    </div>
                    {/* projects */}
                    <div className="flex flex-wrap justify-start  gap-4 my-12">
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
            </div>
        </div>
    )
}

export default Complete_apps