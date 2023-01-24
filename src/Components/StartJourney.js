import React from 'react'
import Button from './UI/Button'

const StartJourney = () => {
  return (
    <section className='py-5' style={{backgroundColor: "#F5F9FC"}}>
        <div className='container-fluid py-5'>
            <div className='container'>
                <div className='row text-center py-5'>
                    <div className='col-12'>
                        <h1>
                        Start your Packaging Journey Today
                        </h1>
                        <p>
                        Get to know our range of packaging solutions and choose one that meets your needs.
                        </p>
                        <Button className="mt-5">Explore our Products</Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StartJourney
