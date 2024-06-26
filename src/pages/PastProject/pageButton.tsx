import ReactPaginate from "react-paginate";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {motion} from "framer-motion"

const pageButton = () => {
    const pageVar = {
        hidden : {
            opacity : 0,
            y : 100,
        },
        visible : {
            opacity : 1,
            y: 0,
            transition: {
                type : "spring",
                stiffness: 200,
                damping: 20,
                duration: 2,
            }
        },
    }
  return (
    <motion.div
         variants={pageVar} 
         initial="hidden"
         animate="visible"
    >
    <div className='m-auto w-[294px] h-[51px]'>
        <ReactPaginate breakLabel="..."
        nextLabel={
            <span className="h-[41px] border-[1px] bg-transparent border-[#888888] flex items-center justify-center rounded-full w-[41px] text-white">
                <BsChevronRight className="ml-[2px] w-[20px] h-[20px] font-extrabold stroke-white stroke-2"/>
            </span>
        }
        //onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={3}
        previousLabel={
            <span className="h-[41px] border-[1px] bg-transparent border-[#888888] flex items-center justify-center rounded-full w-[41px] text-white">
                <BsChevronLeft className="mr-[2px] w-[20px] h-[20px] font-extrabold stroke-white stroke-2"/>
            </span>
        }
        containerClassName="flex items-center justify-center gap-[20px] align-middle py-[3px] text-center"
        pageClassName="h-[44px] py-[3px] w-[44px] rounded-[10px] bg-[#5E6468] font-poppins font-bold text-[25px] text-white hover:bg-[#BFC8CE] duration-300 drop-shadow-lg"
        activeClassName="bg-black text-white"
        />
    </div>
    </motion.div>
  )
}

export default pageButton;