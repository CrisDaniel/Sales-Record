"use client";
import React from "react";
import { PieChart, pieArcLabelClasses  } from "@mui/x-charts/PieChart";
import { usePathname } from "next/navigation";

const data = [
    { id: 0, label: 'Group A', value: 400, },
    { id: 1, label: 'Group B', value: 300, },
    { id: 2, label: 'Group C', value: 300, },
    { id: 3, label: 'Group D', value: 200, },
  ];

const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

const Graphics = () => {
  const pathName = usePathname();
  return pathName == "/" ? (
    <div>
      <PieChart
        slotProps={{
            legend: {
                labelStyle: {
                    fill: "white",
                    fontWeight: "bold",
                }
            }
        }}
        series={[
          {
            data,
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 360,
            cx: 140,
            cy: 150,
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            highlightScope: { faded: 'global', highlighted: 'item' },
            arcLabel: getArcLabel,
          },
        ]}
        width={400}
        height={300}
        sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'white',
              fontWeight: 'bold',
            },
          }}
      />
    </div>
  ) : <></>;
};

export default Graphics;
