import React from 'react'
import './heroSection.css'
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t } = useTranslation();
  return (
    <div className='hero-section'>
        <div className="container-lg">
            <div className='row justify-content-between align-items-center' style={{minHeight: '40vh'}}>
                <div className="col">
                    <div>
                        <h1 className="hero-custom-title">{t("Investor Relations")}</h1>
                        <div className="h1">{t("Financial Ratios")}</div>
                    </div>
                </div>
                <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6'>
                    <div className="info-box">
                        <div className="h6">1303</div>
                        <div className="h5">{t("TASI")}</div>
                        <div className="h5">{t("Electrical Industries Company")}</div>
                        <div className="h5">({t("EIC")})</div>
                        <hr />
                        <div className="h1 position-relative">7.01<span className="span-size" style={{color:"rgb(141, 198, 63)"}}>{t("SAR")}</span></div>
                        <div className='h6'>
                            <span className="text-danger"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="mx-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M384 352c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v82.7L342.6 137.4c-12.5-12.5-32.8-12.5-45.3 0L192 242.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0L320 205.3 466.7 352H384z"></path></svg>0.03</span>
                            <span className="text-danger m-3">(0.43 %)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default HeroSection
