import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const BarChart = ({
  title = '',
  subtitle = '',
  seriesData = [],
  categories = [],
  yAxisTitle = 'Values',
  colors = ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9'],
  width = '100%',
  height = '400px',
  legendEnabled = true,
  stacked = false,
  horizontal = false,
  dataLabelsEnabled = true,
  tooltipEnabled = true,
}) => {
  const options = {
    chart: {
      type: horizontal ? 'bar' : 'column',
      height: height,
      width: width,
    },
    title: {
      text: title,
    },
    subtitle: {
      text: subtitle,
    },
    xAxis: {
      categories: categories,
      title: {
        text: horizontal ? yAxisTitle : null,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: horizontal ? null : yAxisTitle,
        align: 'high',
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: dataLabelsEnabled,
        },
      },
      column: {
        stacking: stacked ? 'normal' : null,
        dataLabels: {
          enabled: dataLabelsEnabled,
        },
      },
    },
    tooltip: {
      enabled: tooltipEnabled,
      valueSuffix: '',
    },
    legend: {
      enabled: legendEnabled,
    },
    colors: colors,
    series: seriesData,
    credits: {
      enabled: false,
    },
  };

  return (
    <div className="bar-chart-container">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{ style: { width: '100%', height: '100%' } }}
      />
    </div>
  );
};

export default BarChart;