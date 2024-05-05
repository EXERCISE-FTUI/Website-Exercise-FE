import React from "react"
import { Link } from "react-router-dom"

import Logo from "./logo/Logo"

import ig from "../assets/footer-icons/ig.png"
import linked from "../assets/footer-icons/linked.png"

function Footer(){
    return (
        <footer className="bg-exer-charcoal text-white">
            <div className="pl-24 pr-24 font-poppins">
                {/* logo */}
                <div id="exercise" className="pt-8 pb-5 hidden w-[30%] md:flex flex-col gap-8">
                    <Logo style="w-40"/>
                </div>

                {/* contents */}
                <div className="pb-6 flex flex-row justify-between">
                    {/* column 1 */}
                    <div className="hidden w-[30%] flex-col md:flex gap-4"> 
                        <p className="font-light text-justify">
                        Creating EXERCISE 2024 to be a career catalyst and a platform to
                        inspire and help members apply knowledge and develop relevant skills
                        in an adaptive and progressive environment.
                        </p>

                        <div className="font-bold">
                        <p>#ExercisingTheFuture</p>
                        <p>#AdaptiveRelevantProfessional</p>
                        </div>
                    </div>

                    {/* column 2 */}
                    <div className="hidden w-[30%] flex-col md:flex gap-4"> 
                        <div>
                            <p className="font-bold">Our Location</p>
                            <p className="font-light text-justify">
                            Faculty of Engineering, University of Indonesia, 
                            Jl. Prof. DR. Ir R Roosseno, Kukusan, Beji, Depok City, West Java 16425</p>
                        </div>
                        
                        <div className="flex flex-row gap-12">
                            <div className="flex-col">
                                <p className="font-bold">Follow Us</p>
                                <div className="flex flex-row gap-2">
                                    <a href="https://www.instagram.com/exercise.ftui/"><img src={ig} className="flex-col object-contain w-10 h-10"></img></a>
                                    <a href="https://www.linkedin.com/company/exercise-ftui/mycompany/"><img src={linked} className="flex-col object-contain w-10 h-10"></img></a>
                                </div>

                                
                            </div>

                            <div className="flex-col">
                                <p className="font-bold">Our Contact</p>
                                <p>Alsha (08176972056)</p>
                            </div>
                        </div>
                    </div>

                    {/* column 3 */}
                    <div className="hidden w-[30%] flex-col md:flex gap-1">
                        <p className="font-bold">Newsletter</p>
                        <input className="rounded-full pl-2 italic h-8 shadow-inner" placeholder="name@example.com">
                        </input>
                    </div>
                </div>
            </div>
            

            {/* copyright */}
            <div className="bg-exer-gunmetal flex-col md:flex gap-4 font-poppins">
                <div className="pt-1 pb-1 pl-24 pr-24 font-semibold flex flex-row justify-between">
                    <p>Copyright © 2024. Exercise FTUI</p>
                    <p className="">Powered by React JS</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer