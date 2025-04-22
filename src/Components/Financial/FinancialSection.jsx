import React, { useEffect, useState } from 'react';
import "./financialSection.css";
import { useTranslation } from 'react-i18next';

const FinancialSection = () => {
    const { t, i18n } = useTranslation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeCurrency, setActiveCurrency] = useState('SAR');
    const [exchangeRate] = useState(3.75);
    const [openAccordions, setOpenAccordions] = useState(new Set());

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await import('/src/assets/data/Data.json');
          setData(response.financialRatioFieldsGroups || []);
          // Open the first accordion by default
          if (response.financialRatioFieldsGroups?.length > 0) {
            setOpenAccordions(new Set([response.financialRatioFieldsGroups[0].groupSeqNo]));
          }
        } catch (err) {
          setError('Failed to load data');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      
      fetchData();
    }, []);

    const formatValue = (field, value) => {
      if (!value || value === '-') return '-';
      
      let numValue = parseFloat(value);
      if (isNaN(numValue)) return value;
      
      if (activeCurrency === 'USD' && field.isCurrency) {
        numValue = numValue / exchangeRate;
      }
      
      // Format all numbers to show exactly 2 decimal places
      return numValue.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    };

    const handleCurrencyChange = (currency) => {
      setActiveCurrency(currency);
    };

    const toggleAccordion = (id) => {
      setOpenAccordions(prev => {
        const newSet = new Set(prev);
        if (newSet.has(id)) {
          newSet.delete(id);
        } else {
          newSet.add(id);
        }
        return newSet;
      });
    };

    if (loading) return <div className="text-center py-4">Loading...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;
    if (!data.length) return <div className="alert alert-info">No data available</div>;

    return (
      <div className='financial'>
          <div className='container-lg border py-3 position-relative'>
              <div className='d-flex justify-content-between align-items-center mb-4'>
                  <div>
                      <div className="currency-buttons shadow-sm" role="tablist">
                          <button 
                            className={`${activeCurrency === 'SAR' ? 'active' : ''}`}
                            onClick={() => handleCurrencyChange('SAR')}
                          >
                            {t('SAR')}
                          </button>
                          <button 
                            className={`${activeCurrency === 'USD' ? 'active' : ''}`}
                            onClick={() => handleCurrencyChange('USD')}
                          >
                            {t('USD')}
                          </button>
                      </div>
                  </div>
                  <div>
                      <div className="icon-file text-end">
                          <a href="https://www.argaam.com/en/excel/financial-ratios/3829?marketid=3&amp;fromyear=2018&amp;toyear=2022&amp;yearly=true&amp;quarterly=false&amp;interm=false&amp;quarteronly=true&amp;currencyID=3" target="_blank" rel="noopener noreferrer">
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAhCAYAAAAswACjAAAABHNCSVQICAgIfAhkiAAAAPpJREFUSEvtlzESgjAQRX+ksvMIegO9CSXaON5AaweMw9jrDaiE1pPoDfQGnkDXAIUDA8wGyNBk67/7kr+7M4mAF0oIHKAbsS+ylGVIAJ0RB7u6EiIXtYgCROUTRUiCTVWl/iBp9RpQv5AaUP+QCpAZSAlkDpJPwAWxvzUNgYKI7hDG9LeHECQS/8hgqF1vu4yc6qmmk10WUnBAjBa47h8sVzw5hXCeldrGntBnhkS+WBBXTjB23voQVnWGaPjp0unJ6jQHfe/6dtmelD1rbLztiZZdjD1jSYZfRtYxGSJ7E4ZJf0lmlxdG6jmx1krkiolu6qXv5n8Mw/EDvs+xIn5wqkkAAAAASUVORK5CYII=" alt="file"/></a>
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAABHNCSVQICAgIfAhkiAAAAWhJREFUWEftl79VwzAQxr9LGjrMBKyQTEDYwOkcGmAC6HkOfvGjhwkIDXaZDcIIGcEjhAHgONkYXhLJGD/LSSGVsnT306f7IxN0YzJ7A+hM+6355ApJONRtJz1EzM19VexknCMN5YCbo1sI6g3xereqB2FFBrNRvRKdQ1w8DMCfz+J30Klv5gy9/lhdDyGIlyCMOgX4ccZrJNMTwsRSJtQ9VRKSg8jFckqUMWNUgvEiGbMAY103virXETyx5YvNy511WggFkIZXrTjfNhLEkYDcb0wblBhLsCwQzASEdskb0bEcbDqXmrQSiOXfEGWna7WdF0VpzxBFKjqIsig5Jeookcmi09/u+v0ObDU7DIHJeJea5Kku6ks1m0v+HucgVlLUBMHXqn4Uzzs/8nDUL15W5WvYhhLKvipY+fjIkEbqFuT8pmELQuPPQZSiOCWcEtsJUhET8aMsvjGm8P8+PEkrvzVtOYh/0S86KssinMssMwAAAABJRU5ErkJggg==" alt="print" />
                      </div>
                  </div>
              </div>
              <div className="table-responsive">
                  <table className='table align-middle table-borderless w-100'>
                      <thead className="table-light">
                          <tr>
                              <th>{t("Details")}</th>
                              <th></th>
                              <th className="text-center">2024</th>
                              <th className="text-center">2023</th>
                              <th className="text-center">2022</th>
                              <th className="text-center">2021</th>
                              <th className="text-center">2020</th>
                          </tr>
                      </thead>
                      <tbody className="accordion">
                        {data.map((item) => (
                          <React.Fragment key={item.groupSeqNo}>
                            <tr className="accordion-item">
                              <th colSpan="7">
                                <button 
                                  className={`accordion-button edit-after-en ${!openAccordions.has(item.groupSeqNo) ? 'collapsed' : ''}`}
                                  type="button"
                                  onClick={() => toggleAccordion(item.groupSeqNo)}
                                  aria-expanded={openAccordions.has(item.groupSeqNo)}
                                >
                                  <span>{i18n.language === 'en' ? item.fieldGroupEn : item.fieldGroupAr}</span>
                                </button>
                              </th>
                            </tr>
                            {item.financialRatioFieldsGroupFields.map((field) => {
                              const last5Years = [...field.values]
                                .sort((a, b) => parseInt(b.year) - parseInt(a.year))
                                .slice(0, 5);
                              
                              return (
                                <tr 
                                  key={field.ratioName} 
                                  className={`accordion-collapse collapse ${openAccordions.has(item.groupSeqNo) ? 'show' : ''}`}
                                  style={{fontSize:"14px", fontWeight:"600"}}
                                >
                                  <td className="text-secondary fw-light">{i18n.language === 'en' ? field.nameEn : field.nameAr}</td>
                                  <td className="text-center bar-icon">
                                  <img type="button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABHNCSVQICAgIfAhkiAAAAT1JREFUWEftWEsSwUAQfe0EjuAGOIE4gS1WjmCvkETZ5whssHQEToAbuIET0DofGZSpVCVEiuldpmqm37yenvcmBD+60xr4MgbYAqgcjOUTa1DJwWKw99NRBGSXT25NFirVfUCEtivoqPVVMOAtliOL0HFPOZfm9b6XQxIwE/4uK1F2A0ZXhszMMOay9jFenyDXQ8p4A5gmVsNNnD7L+TNgPnhm/rVMYbfMFLPsiXRU429GjswwHOkWW3WLK51DDQMGhhld7/8OM6FhivfZntjiK/XalSgHmZgxYHSqbZj5U2Z8F6ecHLgnQllR2sQionRvO5WOMcs43YksLGlt1erPd1tia6e0s6mmGTAfs52p6qGZFJSpCA9/5gNWo1oxfolE9pUC0oKfRWfvwVK+swRaiyKMgPq3h2AIpiBxBe2XSTO2fMsvAAAAAElFTkSuQmCC" alt="chartColorIcon" style={{cursor:"pointer",height:"20px",width:"20px"}}/>
                                  </td>
                                  {last5Years.map((value) => {
                                    const formattedValue = formatValue(field, value.value);
                                    const isNegative = formattedValue !== '-' && parseFloat(formattedValue.replace(/,/g, '')) < 0;
                                    const cellClass = isNegative ? 'text-danger' : 'td-color';
                                    
                                    return (
                                      <td 
                                        key={`${field.ratioName}-${value.year}`} 
                                        className={`text-center ${cellClass}`}
                                        style={{color:"#005983", fontSize:"14px", fontWeight:"600"}}
                                      >
                                        {formattedValue}
                                      </td>
                                    );
                                  })}
                                </tr>
                              );
                            })}
                          </React.Fragment>
                        ))}
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
    );
};

export default FinancialSection;