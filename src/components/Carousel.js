import React from 'react'

export default function Carousel() {
  return (
    <div>
    <div>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>

    <div className="carousel-inner" id='carousel'>
    <div className="carousel-caption d-none d-md-block" style={{zIndex:"5"}} >
    <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0 text-white bg-success" type="submit">Search</button>
  </form>
      </div>    
      <div className="carousel-item active">
        <img src="test/src/components/CarouselFoodAug2022-41-700x450.jpg" className="d-block w-100" style={{filter:"brightness(50%)"}} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="test/src/components/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2Rlc3NlcnRzLXVwZGF0ZS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==.jpg" className="d-block w-100" style={{filter:"brightness(50%)"}} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="test/src/components/l-intro-1645057933.jpg" className="d-block w-100" style={{filter:"brightness(50%)"}} alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  </div>
  )
}
