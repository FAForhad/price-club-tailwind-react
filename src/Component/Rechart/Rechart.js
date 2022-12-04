import React from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const Rechart = () => {
    const data = [
        {
            name: "Assignment 1",
            result: 60,
            number: 60,
            highst: 60
        },
        {
            name: "Assignment 2",
            result: 55,
            number: 50 + 5,
            highst: 60
        },
        {
            name: "Assignment 3",
            result: 41,
            number: 40 + 1,
            highst: 60
        },
        {
            name: "Assignment 4",
            result: 47,
            number: 40 + 7,
            highst: 60
        },
        {
            name: "Assignment 5",
            result: 58,
            number: 50 + 8,
            highst: 60
        },
        {
            name: "Assignment 6",
            result: 41,
            number: 40 + 1,
            highst: 60
        },
        {
            name: "Assignment 7",
            result: 48,
            number: 40 + 8,
            highst: 60
        },
        {
            name: "Assignment 8",
            result: 44,
            number: 40 + 4,
            highst: 60
        },
        {
            name: "Assignment 9",
            result: 60,
            number: 50 + 10,
            highst: 60
        },
        {
            name: "Assignment 10",
            result: 59,
            number: 50 + 9,
            highst: 60
        },
        {
            name: "Assignment 11",
            result: 53,
            number: 50 + 3,
            highst: 60
        },
        {
            name: "Assignment 12",
            result: 42,
            number: 40 + 2,
            highst: 60
        },
    ];
    return (
        <div style={{ margin: 30, width: 800, height: 400 }}>
            <ResponsiveContainer>
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="highst" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="number" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="result" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Rechart;