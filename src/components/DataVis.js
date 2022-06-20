import {Bar, Pie, StackedBar, Scatter, Line} from 'react-roughviz'
import {useState} from 'react'

const DataVis = () => {
    return (
        <div>
        <Bar
      className="pie"
        data="https://raw.githubusercontent.com/jwilber/random_data/master/flavors.csv"
        labels="flavor"
        values="price"
        roughness={5}
        strokeWidth={5}
        fillWeight={5}
      />
      <h3>Pie</h3>
      <Pie
        
        data={{
          labels: ['North', 'South', 'East', 'West'],
          values: [44, 44, 8, 3],
        }}
        title="Regions"
        colors={['red', 'yellow', 'blue', 'skyblue']}
        roughness={5}
        strokeWidth={5}
        fillWeight={5}
      />
      <Line
        
        // data={nbpop}
        y1={'year'}
        y2={'pop'}
        y3={'other'}
        y4={'thing'}
        y5={'you'}
      />
    <Scatter
    data={{x: [3, 5, 35], y: [10, 20, 8]}}
    
    />
        

      
      <StackedBar
        data={[
          {month: 'Jan', A: 20, B: 5, C: 10},
          {month: 'Feb', A: 25, B: 10, C: 20},
          {month: 'March', A: 30, B: 50, C: 10},
        ]}
        labels="month"
        title="Monthly Revenue"
      />
        </div>
    )
}

export default DataVis