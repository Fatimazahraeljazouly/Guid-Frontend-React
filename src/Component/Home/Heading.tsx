import React from 'react'

const Heading = ({title}:{title:string}) => {
  return (
    <>
      <section className='heading'>
        <div className="container">
            <h1>{title}</h1>
            <i className="fa-solid fa-fork-knife"></i>
        </div>
      </section>
    </>
  )
}

export default Heading
