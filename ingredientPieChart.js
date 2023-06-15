import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';

const IngredientPieChart = ({ ingredientCounts }) => {
  const { good, average, unsafe } = ingredientCounts;

  const data = [
    {
      key: 'good',
      value: good,
      svg: { fill: 'green' },
      arc: { outerRadius: '130%', cornerRadius: 10 },
    },
    {
      key: 'average',
      value: average,
      svg: { fill: 'yellow' },
      arc: { outerRadius: '130%', cornerRadius: 10 },
    },
    {
      key: 'unsafe',
      value: unsafe,
      svg: { fill: 'red' },
      arc: { outerRadius: '130%', cornerRadius: 10 },
    },
  ];

  const Labels = ({ slices, height, width }) => {
    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <Text
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill={'white'}
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={24}
          fontWeight={'bold'}
        >
          {data.value}
        </Text>
      );
    });
  };

  return (
    <PieChart
      style={{ height: 350, width: 350 }}
      outerRadius={'70%'}
      innerRadius={10}
      data={data}
      padAngle={0}
      animate
    >
    </PieChart>
  );
};

export default IngredientPieChart;