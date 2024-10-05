import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth =Dimensions.get('window').width;

const WeightChart =({data}) => {
    return (
        <LineChart
        data={{
            labels:data.map((_,index) => index +1),
            datasets: [
                {
                    data :data,
                },
            ],
        }}
        width={screenWidth}
      height={220}
      chartConfig={{
        backgroundColor: '#ffffff',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      }}
      style={{
        marginVertical: 8,
      }}
    />
  );
};
export default WeightChart;