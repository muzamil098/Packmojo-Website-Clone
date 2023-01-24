import React from 'react'
import classes from "./Introduction.module.css"
import Button from './UI/Button'
const Introduction = () => {
  return (
    <div className={'container-fluid ' + classes.containerfluid}>
      <div className='container '>
        <div className='row align-items-center' style={{height: "41rem"}}>   
            <div className='col-12 text-start '>
                <h1 className={classes.h1} >
                    Get Custom <br /> Packaging Today
                </h1>
                <h2 className='mt-4'>
                    Deliver the best unboxing experience <br />
                    with custom printed packaging.
                </h2>
                <button className={"btn btn-success px-3 py-2 " + classes.button}>Explore Products</button>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
