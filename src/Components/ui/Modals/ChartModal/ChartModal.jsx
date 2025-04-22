import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function ChartModal(props) {
  const { rowData, ...modalProps } = props;

  const chartData = rowData?.values?.map(item => ({
    name: item.year,
    y: parseFloat(item.value)
  })) || [];

  const chartOptions = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      style: {
        fontFamily: 'inherit',
      }
    },
    title: {
      text: '',
      align: 'right',
      style: {
        color: '#005983',
        fontWeight: 'bold'
      }
    },
    xAxis: {
      type: 'category',
    //   title: {
    //     text: 'Year'
    //   },
      labels: {
        style: {
          color: '#333'
        }
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function() {
          return this.value.toLocaleString();
        },
        style: {
          color: '#333'
        }
      },
      gridLineColor: '#f0f0f0'
    },
    legend: {
      enabled: false
    },
    tooltip: {
    useHTML: true,
    formatter: function() {
        return `
        <div style="font-weight:bold">${this.point.name}</div>
        <div>
            <span>${rowData?.name || 'Value'}:</span>
            <span style="color:${this.point.color};font-weight:bold;margin-left:5px">
            ${this.y.toLocaleString()}
            </span>
        </div>
        `;
    },
    style: {
        padding: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
    },
    plotOptions: {
      column: {
        color: '#005983', // Blue color matching your theme
        borderRadius: 4,
        pointWidth: 30, // Fixed width for columns
        dataLabels: {
          enabled: true,
          format: '{y:.2f}',
          style: {
            color: '#333',
            textOutline: 'none',
            fontWeight: 'bold'
          }
        }
      }
    },
    series: [{
    //   name: rowData?.name || '',
      data: chartData
    }],
    credits: {
      enabled: false
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          plotOptions: {
            column: {
              pointWidth: 20
            }
          }
        }
      }]
    }
  };

  return (
    <Modal
      {...modalProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          containerProps={{ style: { width: '100%', height: '100%' } }}
        />
      </Modal.Body>
    </Modal>
  );
}

export default ChartModal;