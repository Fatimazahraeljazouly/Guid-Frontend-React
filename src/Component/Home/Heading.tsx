import React from 'react'

const Heading = ({title}:{title:string}) => {
  return (
    <>
      <section className='heading'>
        <div className="container">
            <h1>{title}</h1>
        </div>
      </section>
    </>
  )
}

export default Heading
