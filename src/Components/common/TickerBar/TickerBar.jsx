import React, { useEffect, useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TickerBar.css';
import { useTranslation } from 'react-i18next';

const TickerBar = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    // Listen for language changes
    i18n.on('languageChanged', (lng) => {
      setCurrentLang(lng);
    });

    return () => {
      i18n.off('languageChanged');
    };
  }, [i18n]);

  const tickerItems = [
    {
      labelEn: "Price",
      labelAr: "السعر",
      value: "7",
      change: "up"
    },
    {
      labelEn: "High",
      labelAr: "الأعلى",
      value: "7.05",
      change: "up"
    },
    {
      labelEn: "Low",
      labelAr: "الأدنى",
      value: "6.93",
      change: "up"
    },
    {
      labelEn: "Change",
      labelAr: "التغيير",
      value: "0.01",
      change: "down"
    },
    {
      labelEn: "Change (%)",
      labelAr: "التغيير (%)",
      value: "0.14",
      change: "down"
    },
    {
      typeEn: "news",
      typeAr: "الأخبار",
      contentEn: "Tadawul: 39 stocks record strong gains from intraday lows",
      contentAr: "تداول: 39 سهمًا تسجل مكاسب قوية من أدنى مستوياتها خلال اليوم"
    },
    {
      typeEn: "calendar",
      typeAr: "مفكره",
      eventEn: "General Assembly",
      eventAr: "الجمعية العامة",
      date: "08-05-2025"
    }
  ];

  const getLabel = (item) => {
    return currentLang === 'ar' ? item.labelAr || item.labelEn : item.labelEn;
  };

  const getContent = (item) => {
    return currentLang === 'ar' ? item.contentAr || item.contentEn : item.contentEn;
  };

  const getType = (item) => {
    return currentLang === 'ar' ? item.typeAr || item.typeEn : item.typeEn;
  };

  const getEvent = (item) => {
    return currentLang === 'ar' ? item.eventAr || item.eventEn : item.eventEn;
  };

  return (
    <div className="ticker-bar fixed-bottom" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <ul id={`ticker-${currentLang}`} className="m-0 d-flex align-items-center">
        {tickerItems.map((item, index) => (
          <li key={index} className="px-3">
            <h6 className="m-0 text-uppercase fw-bold d-flex align-items-center">
              {item.typeEn || item.typeAr ? (
                item.typeEn === "news" ? (
                  <>
                    <span 
                      className="custom-bac px-3 py-1 mx-3" 
                      style={{ 
                        borderRadius: "15px",
                        border: "1px solid white",
                        backgroundColor: "#8dc63f",
                        color: "white"
                      }}
                    >
                      {currentLang === 'ar' ? item.typeAr : item.typeEn}
                    </span>
                    {getContent(item)}
                  </>
                ) : (
                  <>
                    <span className="custom-bac px-2 mx-3">
                      {getType(item)}
                    </span>
                    {getEvent(item)}
                    <span className="border px-2 mx-3 text-bg-dark">
                      {item.date}
                    </span>
                  </>
                )
              ) : (
                <>
                  {getLabel(item)}
                  <span 
                    className={`text-bg-${item.change === "up" ? "success" : "danger"} custom-num`} 
                    style={{ borderRadius: "100px" }}
                  >
                    {item.change === "up" ? (
                      <FaArrowUp className="mx-1" />
                    ) : (
                      <FaArrowDown className="mx-1" />
                    )}
                    {item.value}
                  </span>
                  <span className='px-3'>|</span>
                </>
              )}
            </h6>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TickerBar;