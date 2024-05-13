import { useState } from "react";
import "./../../index.css";
import Intership_Events from "./../../assets/events/Internship_Event.png";
import GL_Event from "./../../assets/events/GL_Event.png";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const boxesPerPage: number = 2; // Display 2 boxes per page

  const boxesData = [
    {
      id: 1,
      title: "Internship Excercise",
      date: "October - November 2023 ",
      description:
        "Our very First Internship Program for Freshmans, we aim  to raise the exposure of our organization from this program. This Internship program consists of Two Team Options which was  Software and Hardware each had their own project and goals set for the program.",
      imageUrl: Intership_Events,
    },
    {
      id: 2,
      title: "Grand Launching Exercise 2024",
      date: "February 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      imageUrl: GL_Event,
    },
    {
      id: 3,
      title: "Grand Launching Exercise 2024",
      date: "February 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      imageUrl: GL_Event,
    },
    {
      id: 4,
      title: "Grand Launching Exercise 2024",
      date: "February 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      imageUrl: GL_Event,
    },
    // Add more objects for additional boxes
  ];

  const totalBoxes: number = boxesData.length;
  const totalPages: number = Math.ceil(totalBoxes / boxesPerPage);

  const renderBoxes = () => {
    const startIndex: number = (currentPage - 1) * boxesPerPage;
    const endIndex: number = Math.min(startIndex + boxesPerPage, totalBoxes);

    console.log(`Rendering boxes from ${startIndex} to ${endIndex}`);

    const boxes: JSX.Element[] = [];

    for (let i: number = startIndex; i < endIndex; i++) {
      const boxData = boxesData[i]; // Get data for the current box

      let content: JSX.Element;
      if (boxData.id % 2 !== 0) {
        // For Box 1, image on the right
        content = (
          <div className="flex gap-10">
            <div className="w-[489px] h-[180px] flex flex-col w-1/2 p-3 relative">
              <h3 className="font-poppins font-bold text-[30px] leading-[45px] text-left ">
                {boxData.title}
              </h3>
              <p className="font-poppins font-medium text-[25px] leading-[37.5px] text-left mt-[-10px] flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                    clip-rule="evenodd"
                  />
                </svg>

                {boxData.date}
              </p>

              <p className="font-poppins font-normal italic text-[20px] leading-[30px] mt-[10px] text-justify">
                {boxData.description}
              </p>
            </div>
            <div className="w-1/2 p-3">
              <img
                src={boxData.imageUrl}
                alt={boxData.title}
                className="w-[548px] h-[278px] object-cover rounded-[30px] ml-[30px]"
              />
            </div>
          </div>
        );
      } else {
        // For Box 2, image on the left
        content = (
          <div className="flex gap-10">
            <div className="w-1/2 p-3">
              <img
                src={boxData.imageUrl}
                alt={boxData.title}
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
            <div className="w-[489px] h-[180px] flex flex-col w-1/2 p-3 relative">
              <h3 className="font-poppins font-bold text-[30px] leading-[45px] text-left ">
                {boxData.title}
              </h3>
              <p className="font-poppins font-medium text-[25px] leading-[37.5px] text-left mt-[-10px] flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                    clip-rule="evenodd"
                  />
                </svg>

                {boxData.date}
              </p>
              <p className="font-poppins font-normal italic text-[20px] leading-[30px] mt-[10px] text-justify">
                {boxData.description}
              </p>
            </div>
          </div>
        );
      }

      boxes.push(
        <div
          key={boxData.id}
          className="p-8 w-[1175px] h-[400px] bg-[#527182] font-inter leading-none rounded-[30px]"
        >
          {content}
        </div>
      );
    }
    console.log(`Rendered boxes: ${boxes.length}`);

    return boxes;
  };

  const changePage = (page: number) => {
    console.log(`Changing page from ${currentPage} to ${page}`);
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
       <section className="font-poppins text-white bg-gradient-to-b from-exer-charcoal to-[#0B1317] w-full h-[590px] relative z-10">
        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-center font-poppins font-bold text-[50px] leading-[75px]">Explore Our New Events!</h2>
          <p className="w-[642px] h-[60px] text-center font-poppins font-[400] text-[20px] leading-[30px] text-left mt-[-10px] flex">Through our events, we exercise the power to shape and explore the vast world of technology, leaving a lasting impact.</p>
        </div>
      </section>

      <section className="font-poppins text-white bg-gradient-to-t via-exer-charcoal from-[#0B1317] to-[#0B1317] w-full min-h-[70vh] px-[145px] gap-[105px] flex justify-center items-center flex-col relative z-0">
        <div className="flex flex-col columns-3 gap-12 font-inter leading-none">
          {renderBoxes()}
        </div>

        {/* BUTTON */}
        <div className="flex gap-3 mt-[-30px] pb-[60px]">

          {/* BUTTON PREV */}
          <button
            onClick={() => goToPreviousPage()}
            disabled={currentPage === 1}
            style={{ backgroundColor: "transparent", width: 32, height: 32 }}
            className={`text-gray-800 flex items-center justify-center rounded-full border border-gray-200 p-2 ${
              currentPage === 1 ? "text-gray-400" : "text-blue-500"
            }`}
          >
            <svg
              fill="#ffffff"
              viewBox="0 0 256 256"
              id="Flat"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M160,220a11.96287,11.96287,0,0,1-8.48535-3.51465l-80-80a12.00062,12.00062,0,0,1,0-16.9707l80-80a12.0001,12.0001,0,0,1,16.9707,16.9707L96.9707,128l71.51465,71.51465A12,12,0,0,1,160,220Z"></path>{" "}
              </g>
            </svg>
          </button>

          {/* FUNCTIONAL BUTTON PAGE */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => changePage(page)}
              className={`w-8 h-8 bg-gray-200 text-gray-800 flex items-center justify-center rounded ${
                currentPage === page ? "bg-blue-500 text-white" : ""
              }`}
            >
              {page}
            </button>
          ))}

          {/* BUTTON NEXT */}
          <button
            onClick={() => goToNextPage()}
            disabled={currentPage === totalPages}
            style={{ backgroundColor: "transparent", width: 32, height: 32 }}
            className={`text-gray-800 flex items-center justify-center rounded-full border border-gray-200 p-2 ${
              currentPage === totalPages ? "text-gray-400" : "text-blue-500"
            }`}
          >
            <svg
              fill="#ffffff"
              viewBox="0 0 256 256"
              id="Flat"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z"></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
