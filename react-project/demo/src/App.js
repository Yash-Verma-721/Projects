import React , { useState} from 'react';  
import Chai from "./Chai";
import Card from './components/Card';
import Passgenrator from './components/passgenrator'; 

function App() {
  let [counter, setCount]= useState(15)
   
  const addvalue = () => {
    counter = counter +1
    setCount(counter)
  }
  const removevalue = () =>{
    setCount(counter -1)
  }
  return (
    
    <>
   
     <h1 className='bg-green-400'>Heloo Yash | yash we manuplate the back bone</h1>

     <h1>current counter Vaue : {counter}</h1> 
     <button onClick={addvalue}>Add Value {counter}</button>
     <br/>
     <button onClick={removevalue}>remove Value {counter}</button>
     <br/> <br/>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Tailwind Button</button>


      <br/> <br/>
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://v3.tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" alt="" width="384" height="512" />
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>


      <br/> <br/> 
      <Card />
      <br/>
      <Card username="Yash" btn="Rhene Do"/>
      <br></br>
      <br/>
      <Passgenrator/>
      <br/>
      <Chai/>

     </>
  );
}
// react me varible saari vlaue live update hoti hai
export default App;
