import { useRef, useState, MouseEvent } from 'react';
import arrow from '../../public/assets/exticle/arrow.png';
import { useImages } from '../assets/imageLoader';
import ExticleList from '../../public/assets/exticle';
import { useNavigate } from 'react-router-dom';


function ExticleHighlight(): JSX.Element {
  const images = useImages("./exticle/images", ExticleList);
  const height = 200; // Example height in pixels
  const showedlist = ExticleList.slice(0, 3); // Show only the first 3 items for demonstration
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const navigate = useNavigate();

  const onDragStart = (e: MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - containerRef.current.offsetLeft);
      containerRef.current.style.cursor = 'pointer';
    }
  };

  const onDragEnd = () => {
    if (containerRef.current) {
      setIsDragging(false);
      containerRef.current.style.cursor = 'pointer';
    }
  };

  const onDragMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX; // scroll-fast
    containerRef.current.scrollLeft -= walk;
    setStartX(x);
  };

  const handleArticleClick = (articleName: string) => {
    navigate(`/exticle/${articleName}`); // Navigate to article route with articleName as param
  };

  return (
    <div className="flex flex-col p-10">
      <div className='flex flex-row mt-10'>
        <h1 className="font-poppins skew-x-[-5deg] text-2xl font-semibold text-white">Latest Articles...</h1>
        <div className='hover ml-auto flex flex-row hover:cursor-pointer hover:scale-105 transition-all'>
          <a href='/exticle/' className="font-poppins text-2xl text-white" >See All</a>
          <img src={arrow} alt="arrow" className="h-[24px] my-auto ml-2 -rotate-90"/>
        </div>
      </div>
      <div 
        className='flex overflow-x-auto py-2 scrollbar' 
        ref={containerRef}
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onMouseMove={onDragMove}
        style={{ cursor: 'pointer' }}
      > 
        <style>
          {`
            .scrollbar::-webkit-scrollbar {
              width: 10px; // Adjust scrollbar width
              display: block; // Make scrollbar always visible
            }
            .scrollbar::-webkit-scrollbar-thumb {
              background-color: #527182; // Set the color of the scrollbar
              border-radius: 5px; // Optional: add border radius to the scrollbar thumb
            }
            .scrollbar::-webkit-scrollbar-track {
              background: transparent; // Set the track to transparent
            }
            .scrollbar {
              -ms-overflow-style: none; // IE and Edge
              scrollbar-width: thin; // Firefox
              scrollbar-color: #527182 transparent; // Set scrollbar color for Firefox
            }
          `}
        </style>
        {showedlist.map((exticle, index) => (
          <div className='bg-[#527182] p-2 w-[300px] rounded-lg m-2 transition-all transform hover:scale-[104%] shadow-black shadow-md hover:shadow-none' 
            key={index} 
            style={{ flex: '0 0 auto' }}
            onClick={() => handleArticleClick(exticle.text)}>
            <div className="mx-auto" style={{
              height: `${height}px`,
              width: `${(4/3) * height}px`,
              position: 'relative',
              overflow: 'hidden',
            }}>
              <img className="rounded-xl" src={images[exticle.image] || ''} alt={exticle.title} style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                pointerEvents: 'none',
                userSelect: 'none'
              }} />
            </div>
            <h2 className='mx-auto font-bold text-white font-poppins text-xl text-wrap'>{exticle.title}</h2>
            <p className='text-gray-900 text-xs text-wrap font-semibold mt-auto'>By {exticle.author}</p>
            <p className='text-gray-900 text-xs text-wrap font-semibold mb-auto'>on {new Date(exticle.writtenOn).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExticleHighlight;
