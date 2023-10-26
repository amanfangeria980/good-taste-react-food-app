import React from 'react'

const Shimmer = () => {
  return (
    // <h1>Shimmer UI Loading...</h1>
    <div className="flex flex-wrap justify-between">
      {Array(18).fill("").map((e,index)=>{
        return(
          <div className='h-48 w-48 bg-purple-200 m-5' key={index.toString()}></div>
        )
      })}
    </div>
  )
}


export default Shimmer