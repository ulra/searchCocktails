'use client'

import { useEffect, useState } from "react";

const Home = () => {

    const [cock, setCock] = useState('')
    const [cocktail, setCocktail] = useState([])

    useEffect(() =>{
      const fdata = async () =>{
      const response = await fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cock}`)
      const fetchData = await response.json();
      setCocktail(fetchData.drinks || []);
    };

    fdata();

    }, [cock])

    const handleClick = (e) => {
      setCock(e.target.value)
    }

    const handleSubmit = (e) =>{
      e.preventDefault()
      fdata();
    }

    const handleKey = (e) => {
      if (e.key === 'Enter') {
        handleSubmit(e);
      }
    }


  return (
    <main className="shadow bg-slate-900 flex h-screen flex-col items-center justify-between p-24 text-white">
        <div className='lg:w-3/4 lg:bg-transparent w-96 h-full flex flex-col bg-white bg-opacity-20 backdrop:-blur-md rounded-lg'>
          <div>
          <form onSubmit={handleSubmit}>   
            <div className="relative w-3/4 mx-auto my-3">
            
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input onKeyDown={handleKey} onChange={handleClick} value={cock} type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Buscar Cocktails"/>
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-slate-900 hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Buscar</button>
        </div>
    </form>
          </div>   
          <div className='lg:px-1 max-h-screen overflow-y-auto flex flex-col flex-grow lg:grid lg:grid-cols-4 lg:gap-3'>
          
          {cocktail.map((cocktail, index) =>(
            <div key={index} class="max-w-sm bg-tranparent rounded-lg ">
        <img class="mx-auto rounded-lg w-full" src={cocktail.strDrinkThumb} alt="" />
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{cocktail.strDrink}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-400">{cocktail.strInstructions}</p>
    </div>
</div>
          ))}

          <div class="max-w-sm bg-tranparent rounded-lg ">
        <img class="mx-auto rounded-lg w-full" src={cocktail.strDrinkThumb} alt="" />
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{cocktail.strDrink}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-400">{cocktail.strInstructions}</p>
    </div>
</div>
          </div>
        </div>  
    </main>
  )
}

export default Home;