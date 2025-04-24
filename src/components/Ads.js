import React from 'react';

const products = [
  {
    name: "iphone",
    description: "A18 Pro chip powers Apple Intelligence footnote 3 and AAA gaming — and helps deliver a huge leap in battery life",
    image: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large_2x.jpg"
  },
  {
    name: "samsung",
    description: "Search like never before¹, get quick language translation on a call², carry an interpreter in your pocket and effortlessly edit your photos³'⁴ - all with AI.⁵",
    image: "https://images.samsung.com/in/smartphones/galaxy-s23-ultra/buy/product_color_phantom_black.png?imwidth=480"
  },
  {
    name: "ipad pro",
    description: "The all-new iPad Pro packs astonishing power into an unbelievably thin, light and portable design.",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202404?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1713308651643"
  },
  {
    name: "AirPods Max",
    description: "AirPods Max deliver stunningly detailed, high-fidelity audio for an unparalleled listening experience.",
    image: "https://www.apple.com/v/airpods-max/i/images/overview/contrast/airpods_max_midnight__ddy8oa1y3y4i_large_2x.png"
  },
];

function Ads() {
  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ width: '100%', height: '250px', objectFit: 'contain', padding: '10px' }}
              />
              <div className="card-body">
                <h5 className="card-title text-capitalize">{product.name}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ads;
