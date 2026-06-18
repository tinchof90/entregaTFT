import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';

const BarChart = ({title, data, categories }) => {
  const newSale = useSelector(state => state.new_sale);

  const [barData, setData] = useState({
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: categories,
      },
    },
    series: [
      {
        name: 'series-1',
        data: data,
      },
    ],
  });
  useEffect(() => {
    setData({
      options: {
        chart: {
          id: 'basic-bar',
        },
        xaxis: {
          categories: categories
        },
      },
      series: [
        {
          name: 'series-1',
          data: data,
        },
      ],
    });
  }, [newSale, data, categories]);

  return (
    <>
    <h2>{title}</h2>
    <Chart
      type='bar'
      width='500'
      options={barData.options}
      series={barData.series}
    />
    </>
  );
};
export default BarChart;
