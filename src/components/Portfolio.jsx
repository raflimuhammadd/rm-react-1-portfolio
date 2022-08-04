import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct
        },
        {
            id: 2,
            src: installNode
        },
        {
            id: 3,
            src: reactParallax
        },
        {
            id: 4,
            src: navbar
        },
        {
            id: 5,
            src: reactSmooth
        },
        {
            id: 6,
            src: reactWeather
        }
    ]

  return (
    <div name="Portfolio" className="bg-gradient-to-b from-black 
    to-gray-800 w-full text-white md:h-screen"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full">
            <div className="pb-9">
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500">
                    Portfolio
                </p>
                <p className="py-6 ">
                    Check Out Some Of My Projects RIght Here
                </p>
            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
            px-12 sm:px-0">
                
            {portfolios.map(({id, src}) => (
                <div className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} alt="" className="rounded-md
                    duration-200 hover:scale-105"
                    />
                    <div className="flex items-center justify-content">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200
                        hover:scale-105">
                            Demo
                        </button>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200
                        hover:scale-105">Code
                        </button>
                    </div>
                </div>
            ))
        }

            </div>
        </div>

    </div>
  )
}

export default Portfolio