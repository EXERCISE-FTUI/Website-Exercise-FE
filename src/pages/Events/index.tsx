import { useState } from "react";
import "./../../index.css";
import { useImages } from '../../assets/imageLoader';
import eventSchema from '../../assets/events/eventSchema';
import EventsList from "../../assets/events";


function EventsPage() {
  const images = useImages("./events/images", EventsList);

  const [currentPage, setCurrentPage] = useState(1);
  const boxesPerPage = 2; // Display 2 boxes per page

  // Calculate total pages
  const totalBoxes = EventsList.length;
  const totalPages = Math.ceil(totalBoxes / boxesPerPage);

  // Function to render individual boxes
  const renderBox = (event : eventSchema) => (
    <div
      className="p-8 h-auto bg-[#527182] font-inter leading-none rounded-[30px] flex flex-col lg:flex-row lg:gap-10"
    >
      {event.id % 2 === 0 ? (
        <>
          <div className="w-full h-full lg:w-1/2 p-3 order-1 lg:order-2 my-auto">
            <img
              src={images[event.image] || ''}
              alt={event.name}
              className="w-full lg:h-full object-cover rounded-[30px]"
            />
          </div>
          <div className="w-full lg:w-1/2 p-3 order-2 lg:order-1">
            <h3 className="font-poppins font-bold text-[20px] lg:text-[30px] leading-[45px] text-left ">
              {event.name}
            </h3>
            <CommonBoxContent boxData={event} />
          </div>
        </>
      ) : (
        <>
          <div className="w-full lg:w-1/2 p-3 order-2 lg:order-2">
            <h3 className="font-poppins font-bold text-[20px] lg:text-[30px] leading-[45px] text-left ">
              {event.name}
            </h3>
            <CommonBoxContent boxData={event} />
          </div>
          <div className="w-full h-full lg:w-1/2 p-3 order-1 lg:order-1 my-auto">
            <img
              src={images[event.image] || ''}
              alt={event.name}
              className="w-full h-auto lg:h-full object-cover rounded-[30px]"
            />
          </div>
        </>
      )}
    </div>
  );

  // Common JSX for box date and description
  const CommonBoxContent = ({ boxData }: { boxData: eventSchema}) => (
    <>
      <p className="font-poppins font-medium text-[18px] lg:text-[25px] leading-[37.5px] text-left mt-[-10px] flex items-center">
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
            fillRule="evenodd"
            d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
            clipRule="evenodd"
          />
        </svg>
        {boxData.date}
      </p>
      <p className="font-poppins font-normal italic text-[13px] lg:text-[20px] leading-[30px] mt-[10px] text-justify">
        {boxData.description}
      </p>
    </>
  );

  // Function to handle page change
  const changePage = (page: number) => {
    console.log(`Changing page from ${currentPage} to ${page}`);
    setCurrentPage(page);
  };

  // Function to go to the previous page
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Function to go to the next page
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {/* TITLE */}
      <section className="bg-gradient-to-t from-[#0B1317] to-[#1b4358]">
        <div className="text-white text-center font-poppins py-3 px-8 my-0 mx-auto pt-[40px] pb-[40px] md:w-[642px]">
          <h2 className="md:text-[30px] md:pb-3 md:pt-[100px] pt-11 text-sm  font-bold">Explore Our Events</h2>
          <p className="md:text-[18px] md:pb-[100px] text-xs pt-1">Through Our Events, We Exercise The Power To Shape And Explore The
          Vast World Of Technology, Leaving A Lasting Impact.</p>
        </div>
      </section>

      {/* BOXES */}
      <section className="font-poppins text-white bg-gradient-to-t via-exer-charcoal from-[#0B1317] to-[#0B1317] w-full min-h-[70vh] px-10 gap-[105px] flex justify-center items-center flex-col relative z-0">
        {<div className="pt-[50px] flex flex-col columns-3 gap-12 font-inter leading-none">
          {EventsList.slice((currentPage - 1) * boxesPerPage, currentPage * boxesPerPage).map(box => renderBox(box))}
        </div>}
        {/* END OF BOXES */}

        {/* BUTTON PAGE*/}
        <div className="flex gap-3 mt-[-30px] pb-[60px]">
          {/* BUTTON PREV */}
          {<button
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
          </button>}
          {/* END OF BUTTON PREV */}

          {/* FUNCTIONAL BUTTON PAGE */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => changePage(page)}
              className={`w-8 h-8 ${
                currentPage === page
                  ? page === 1
                    ? "bg-[#527182]"
                    : "bg-[#527182]"
                  : "bg-[#646e73]"
              } text-[#FFFFFF] font-bold text-[25px] flex items-center justify-center rounded w-[40px] h-[40px]`}
            >
              {page}
            </button>
          ))}
          {/* END OF FUNCTIONAL BUTTON PAGE */}

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
          {/* END OF BUTTON NEXT */}
        </div>
      </section>

      


    </>
  );
  
}



export default EventsPage;
