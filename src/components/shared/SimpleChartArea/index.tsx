import React from 'react';

import dynamic from 'next/dynamic';

import { formatValue } from '~/libs/format';

import { Container } from './styles';

const ReactApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Serie {
  name: string;
  data: number[];
}

interface SimpleAreaChartProps {
  series: Serie[];
}

const SimpleAreaChart = ({ series }: SimpleAreaChartProps) => {
  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      categories: ['01 - 07', '08 - 14', '15 - 21', '22 - 28', '29 - 31'],
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    tooltip: {
      custom: ({ series, seriesIndex, dataPointIndex }: any) => {
        return `<div class="simple-area-chart-tooltip">${formatValue(
          series[seriesIndex][dataPointIndex],
        )}</div>`;
      },
    },
    colors: ['#49EAC4'],
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100],
      },
    },
  } as ApexCharts.ApexOptions;

  return (
    <Container>
      <ReactApexCharts type="area" series={series} options={options} height={300} />
    </Container>
  );
};

export default SimpleAreaChart;
