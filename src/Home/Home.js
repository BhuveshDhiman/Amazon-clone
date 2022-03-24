import React from 'react';
import './Home.css';
import Product from '../Product/Product';
function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/ServiceMktg/1500x600_Hero-Tall_np._CB403152874_.jpg'
        alt=''
      ></img>
      {/* Product id, title, price, rating, image */}
      <div className='home__row'>
        <Product
          id='101'
          title='iPhone 11 pro'
          price={150800}
          rating={5}
          image='https://m.media-amazon.com/images/I/61tuQdl2yLL._AC_UY218_.jpg'
        ></Product>
        <Product
          id='102'
          title='Apple MacBook Pro'
          price={195902}
          rating={5}
          image='https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY218_.jpg'
        ></Product>
      </div>
      <div className='home__row'>
        <Product
          id='103'
          title='Sony Bravia 85 Inch 4k UHD Android LED TV'
          price={569990}
          rating={5}
          image='https://m.media-amazon.com/images/I/91wbJpp9BsL._AC_UY218_.jpg'
        ></Product>
        <Product
          id='104'
          title='Whirlpool 200L 4 star Referigerator'
          price={16540}
          rating={4}
          image='https://m.media-amazon.com/images/I/715j2BmGiwL._AC_UY218_.jpg'
        ></Product>
        <Product
          id='105'
          title='Samsung S20 Ultra'
          price={97999}
          rating={4}
          image='https://m.media-amazon.com/images/I/71cD4NUIBWL._AC_UY218_.jpg'
        ></Product>
      </div>
      <div className='home__row'>
        <Product
          id='106'
          title='LG 34 Inch Curved Ultrawide Monitor'
          price={120000}
          rating={4}
          image='https://www.lg.com/in/images/monitors/md06237916/gallery/34WK95C-W-DZ-01.jpg'
        ></Product>
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
