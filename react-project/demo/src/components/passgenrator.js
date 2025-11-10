import React, { useState , useCallback , useEffect , useRef} from 'react';
function Passgenrator(){
    const [length ,setlength] = useState(8)
    const [numberallow , setnumberallow] = useState(false);
    const [charallow , setcharallow]= useState(false)
    const [password , setpassword]= useState("")
    const [color, setcolor] = useState("blue")
    //use useRef hook
    const passwordref = useRef(null)
    const passgenrator = useCallback(()=>{
        let pass=""
        let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberallow) str+="0123456789"
        if (charallow) str+="!@#$%^&*~=+_-[]{}`"
        for (let i=1; i<=length; i++){
            let char = Math.floor(Math.random()*str.length+1)
            pass += str.charAt(char)
        }
        setpassword(pass)
    } , [length,numberallow, charallow,setpassword])

    const copypasstoclipboard = useCallback(() => { passwordref.current?.select(); passwordref.current?.setSelectionRange(0,51);  window.navigator.clipboard.writeText(password)}, [password])

    useEffect(()=> { passgenrator()},[length , numberallow,charallow, passgenrator ])

    return(
        
        <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
            <h1 className='text-black text-center my-3 '> Password Genrator</h1>
            <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
                <input type="text" value={password} className='outline-none w-full py-1 px-3 ' placeholder='password'
                readOnly ref={passwordref}/>
                <button onClick={  copypasstoclipboard}  className='text-black rounded-sm outline-none  py-1 px-0.5 shrink-0 shadow-lg hover:bg-blue-600 active:bg-red-500 '>Copy</button>
            </div>
            <div className='flex text-sm gap-x-2 '>
                <div className='flex items-center gap-x-1'>
                    <input type="range"  min ={6} max={50} value={length} className='cursor-pointer' onChange={(e)=> {setlength(e.target.value)}}/>
                    <label>Length: {length}</label>

                </div>
                <div className='"flex items-center gap-x-1'>
                 <input type="checkbox"
                 defaultChecked={numberallow} 
                 id='numberInput'
                 onChange={()=> {setnumberallow((prev)=>!prev);}}/>
                 
                 <label htmlFor='numberInput'> Numbers</label>
                </div>
                <div className=' flex items-center gap-x-1'>
                <input type='checkbox'
                defaultChecked={charallow}
                id='charcterInput'
                onChange={()=> {setcharallow((prev)=> !prev);}}/>
                <label htmlFor='charcterInput'>Charcters</label>
                </div>
            </div>
        </div>
        </>
);
}
export default Passgenrator