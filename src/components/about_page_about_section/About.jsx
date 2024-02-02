import React from 'react'

const About = () => {
    return (
        <div className='px-5 max-w-[1560px] mx-auto pt-20 py-10'>
            {/* title */}
            <div className=" mb-12">
                <div className=" text-white w-2/3 font-semibold text-[32px]">
                    <div className="">
                        <span className="text-[#C778DD]">🧑‍💻</span>github
                        about-me
                    </div>
                    <div className=" text-white text-base font-normal mt-[14px]">
                        Who am i?
                    </div>
                </div>
            </div>
            <div className=" flex-wrap flex items-center justify-between">
                {/* left */}
                <div className="md:w-[48%] w-full">
                    {/* disc */}
                    <p className="text-[#ABB2BF] ">
                        Hello, i’m soumyasis!
                        <br />
                        <br />
                        I'm an Indian front-end developer who learned everything on my own.
               I am capable of starting from scratch and creating responsive websites
                that are contemporary and user-friendly.
                        <br />
                        <br />
                        My interest has been creating websites using my expertise and creativity for more than a year. I have been assisting a number of customers in creating an internet presence. I make it a point to become knowledgeable about the newest frameworks and technologies.
                    </p>
                </div>
                {/* right */}
                <div className=" mx-auto">
                    <img className="mx-auto" src={require("./imgs/man.png")} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About