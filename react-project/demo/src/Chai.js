import React, { useState } from 'react';
function Chai(){
    const ad= "yash"
    const [color, setcolor] = useState("blue")

    return(
        
        <>
        <div className="w-full h-screen duration-200  font-bold flex justify-center shadow-lg px-50 py-50 m-50 text-white" style={{backgroundColor:color}}>
            Heloo Boss {ad}
            <div className="fixed flex flex-warp justify-center bottom-12 inset-x-0 px-2">
                <div className=' flex flex-warp justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-4xl'>
                 <button onClick={() => setcolor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"red"}}>Red</button>
                 <button onClick={() => setcolor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"blue"}}>Blue</button>
                 <button onClick={() => setcolor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"green"}}>Green</button>
                </div>
            </div>
            </div>

        
        </>
);
}
export default Chai

