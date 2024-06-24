import React from "react"
import { Link } from "react-router-dom"

import Logo from "./logo/Logo"

import ig from "../assets/footer-icons/ig.png"
import linked from "../assets/footer-icons/linked.png"
import wa from "../assets/footer-icons/wa.png"

function Footer(){
    return (
        <footer id="footer" className="bg-exer-charcoal text-white">
            <div id="footer-top-container" className="pl-24 pr-24 font-poppins">
                {/* logo */}
                <div id="exercise" className="pt-8 pb-5 hidden w-[30%] md:flex flex-col gap-8">
                    <Logo style="w-40"/>
                </div>

                {/* contents */}
                <div id="footer-text-container" className="md:pb-6 pb-1.5 flex flex-row justify-between">
                    {/* column 1 */}
                    <div id="footer-text1" className="hidden w-[30%] flex-col md:flex gap-4"> 
                        <p className="font-light text-justify">
                        Creating EXERCISE 2024 to be a career catalyst and a platform to
                        inspire and help members apply knowledge and develop relevant skills
                        in an adaptive and progressive environment.
                        </p>

                        <div id="footer-tags" className="font-bold">
                        <p>#ExercisingTheFuture</p>
                        <p>#AdaptiveRelevantProfessional</p>
                        </div>
                    </div>

                    {/* column 2 */}
                    <div id="footer-text2" className="hidden w-[30%] flex-col md:flex gap-4"> 
                        <div id="footer-text2-top">
                            <p className="font-bold">Our Location</p>
                            <p className="font-light text-justify">
                            Faculty of Engineering, University of Indonesia, 
                            Jl. Prof. DR. Ir R Roosseno, Kukusan, Beji, Depok City, West Java 16425</p>
                        </div>
                        
                        <div id="footer-text2-bottom" className="flex flex-row gap-12">
                            <div id="footer-socials" className="flex-col">
                                <p className="font-bold">Follow Us</p>
                                <div id="footer-socials-container" className="flex flex-row gap-2">
                                    <a href="https://www.instagram.com/exercise.ftui/"><img src={ig} className="flex-col object-contain w-10 h-10"></img></a>
                                    <a href="https://www.linkedin.com/company/exercise-ftui/mycompany/"><img src={linked} className="flex-col object-contain w-10 h-10"></img></a>
                                </div>
                            </div>

                            <div id="footer-text2-cp" className="flex-col">
                                <p className="font-bold">Our Contact</p>
                                <p>Alsha (08176972056)</p>
                            </div>
                        </div>
                    </div>

                    {/* column 3 */}
                    <div id="footer-text3" className="hidden w-[30%] flex-col md:flex gap-1">
                        <p className="font-bold">Newsletter</p>
                        <input className="rounded-full pl-2 italic h-8 shadow-inner" placeholder="name@example.com">
                        </input>
                    </div>

                    {/* mobile */}
                    <div id="footer-socials"className="md:hidden flex flex-row mx-auto gap-2">
                        <a href="https://www.instagram.com/exercise.ftui/"><img src={ig} className="w-10 h-10"></img></a>
                        <a href="https://www.linkedin.com/company/exercise-ftui/mycompany/"><img src={linked} className="w-10 h-10"></img></a>
                        <a href=""><img src={wa} className="w-10 h-10 px-1 py-1"></img></a>
                    </div>
                </div>
            </div>
            

            {/* copyright */}
            <div id="footer-bottom-container" className="
            bg-exer-gunmetal md:px-24">
                <div className="md:flex gap-4 font-poppins 
            pt-1 pb-1 font-semibold flex flex-row justify-between">
                    <div className="hidden md:flex whitespace-nowrap">
                        <p className="">Copyright © 2024. Exercise FTUI</p>
                    </div>
                    <div className="hidden md:flex justify-end whitespace-nowrap">
                        <p className="">Powered by React JS</p>
                    </div>
                    <div className="ml-auto mr-auto md:hidden w-full whitespace-nowrap">
                        <p className="text-center">Copyright © 2024. Exercise FTUI</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer