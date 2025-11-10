import { use, useEffect, useState } from "react";

export const Time = () => {
  const [date, setDate] = useState(0);

  useEffect(() => {  // YOU CAN USE THIS SETiNTERVAL FUNCTION OUTSIDE THE USEEFFECT HOOK , IT WILL WORK SAME
     setInterval(()=>{
    const d = new Date();
    setDate(d.toLocaleTimeString());
  },1000)
  }, []);
 



    return(
        <div style={{textAlign:"center"}}>
<h1 >Time: {date}</h1>

        </div>
  );
}