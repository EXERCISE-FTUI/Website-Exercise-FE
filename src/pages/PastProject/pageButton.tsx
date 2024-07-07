import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

const PageButton = ({ currentPage, totalPages, onPageChange }: { currentPage: number, totalPages: number, onPageChange: (selected: number) => void }) => {
    const pageVar = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 2,
            },
        },
    };

    const handleClick = (selectedPage: number) => {
        if (selectedPage > 0 && selectedPage <= totalPages) {
            onPageChange(selectedPage);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handleClick(i)}
                    className={`h-[44px] py-[3px] w-[44px] rounded-[10px] ${currentPage === i ? 'bg-black text-white' : 'bg-[#5E6468] text-white hover:bg-[#BFC8CE]'} font-poppins font-bold text-[25px] duration-300 drop-shadow-lg`}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };


    return (
        <motion.div
            variants={pageVar}
            initial="hidden"
            animate="visible"
        >
            <div className='m-auto w-[294px] h-[51px]'>
                <div className="flex items-center justify-center gap-[20px] align-middle py-[3px] text-center">
                    <button
                        onClick={() => { handleClick(currentPage - 1); console.log(currentPage) }}
                        className="h-[41px] border-[1px] bg-transparent border-[#888888] flex items-center justify-center rounded-full w-[41px] text-white"
                        disabled={currentPage === 0}
                    >
                        <BsChevronLeft className="mr-[2px] w-[20px] h-[20px] font-extrabold stroke-white stroke-2" />
                    </button>
                    {renderPageNumbers()}
                    <button
                        onClick={() => handleClick(currentPage + 1)}
                        className="h-[41px] border-[1px] bg-transparent border-[#888888] flex items-center justify-center rounded-full w-[41px] text-white"
                        disabled={currentPage === totalPages}
                    >
                        <BsChevronRight className="ml-[2px] w-[20px] h-[20px] font-extrabold stroke-white stroke-2" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default PageButton;
