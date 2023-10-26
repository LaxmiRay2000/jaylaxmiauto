"use client";
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import Image from 'next/image';


function HeroBanner() {
    return (
        // <div >
        //     <Carousel
        //     >

        //         <div className='max-h-3.5'>
        //             <img src="https://i.ytimg.com/vi/blnNNmsPChQ/maxresdefault.jpg"/>
        //         </div>
        //         <div>
        //             <img src="https://www.yamaha-motor-india.com/theme/v3/image/whatsnew/vintage-edition-pc.jpg" />
        //         </div>
        //         <div>
        //             <img src="https://www.yamaha-motor-india.com/theme/v3/image/home/webp/banner-fzs-fi-v4.webp" />
        //         </div>
        //     </Carousel>
        // </div>

        //Banner
        <div>
            <Carousel
            dynamicHeight={true} showStatus={false} showIndicators={false} showThumbs={false}
            >
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img12/home-improvement/HMDGATEWAYS/Aug-HMD---Hero-2_3000x1200-N-2._CB598590461_.jpg" />
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg" />
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Aug_23/MFD/Shoes/unrec/3000._CB598492396_.jpg" />
                </div>
            </Carousel>
        </div>


    )
}

export default HeroBanner;