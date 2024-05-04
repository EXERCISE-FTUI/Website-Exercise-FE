import React from "react"
import { Link } from "react-router-dom"

// import Logo from "./logo/Logo"

// import socMed from "../assets/footer-icons"

function Footer(){
    return (
        <footer>
            <div>
                <div> {/* logo */}

                </div>

                <div> {/* 3 columns of text */}
                    
                    <div> {/* column 1 */}
                        <p className="font-light text-justify">
                        Creating EXERCISE 2023 to be a career catalyst and a platform to 
                        inspire and help members apply knowledge and develop relevant skills 
                        in an adaptive and progressive environment.
                        </p>

                        <div className="font-bold">
                            <p>#JourneyOfGrowth</p>
                            <p>#AdaptiveRelevantProfessional</p>
                        </div>

                    </div>

                    <div> {/* column 2 */}
                        <p className="font-bold">Our Location</p>
                        <p>
                            Faculty of Engineering, University of Indonesia, Jl. Prof. DR. Ir R Roosseno, 
                            Kukusan, Beji, Depok City, West Java 16425
                        </p>
                        <div>
                            <p className="font-bold">Follow Us</p>
                            {/* SocMed here */}
                            
                        </div>

                        <div>
                            <p className="font-bold">Our Contact</p>
                            <p>Alsha (08176972056)</p>
                        </div>

                    </div>

                    <div> {/* column 3 */}
                        <p className="font-bold">Newsletter</p>
                        <div className="flex flex-col gap-2 mb-2 ">
                            <textarea
                                placeholder="name@example.com"
                                className="resize-none h-10 text-dark-2 text-sm leading-10 pl-2"
                            />
                            <Link to="/newsletter" className="btn-dark rounded-md bg-dark-2">
                                SUBMIT
                            </Link>
                        </div>
                    </div>

                </div>
            </div>



            <div> {/* bottom */} 
            </div>
        </footer>
    )
}

export default Footer