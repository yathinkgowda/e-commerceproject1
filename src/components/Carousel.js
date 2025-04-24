import React from 'react'

function Carousel() {
  return (
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img style={{height : "85vh"}} src="https://storage-asset.msi.com/event/2025/IN/2025-laptop-bts/images/kv.jpg" className="d-block w-100" alt="..."/>    </div>
    <div className="carousel-item">
    <img style={{height : "85vh"}} src="https://images.samsung.com/is/image/samsung/p6pim/in/feature/165487424/in-feature-washing-machines-542815534?$FB_TYPE_A_JPG$" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img style={{height : "85vh"}}  src="https://img.freepik.com/free-psd/new-smartphone-16-pro-social-media-cover-design-template_47987-25428.jpg?t=st=1745047070~exp=1745050670~hmac=133711b9f7794d80d9aebe5654df980bc5c6a5810ad6fb8cd70ae2710de176ab&w=1380"
       className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>




    </div> 
  
  )
}

export default Carousel

