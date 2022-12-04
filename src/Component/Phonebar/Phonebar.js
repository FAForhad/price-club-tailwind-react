import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

const Phonebar = () => {
    const [phones, setPhone] = useState([])
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesLoaded = data.data.data;
                const phoneData = phonesLoaded.map(phone => {
                    const parts = phone.slug.split('-')
                    const price = parseInt(parts[1]);
                    const singlephone = {
                        name: phone.phone_name,
                        price: price
                    }
                    return singlephone;
                })
                console.log(phoneData)
                setPhone(phoneData)
            })
    }, [])
    return (
        <div>
            <div style={{ margin: 30, width: 800, height: 400 }}>
                <ResponsiveContainer>
                    <ComposedChart
                        width={500}
                        height={400}
                        data={phones}
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
                        <Area type="price" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="price" barSize={20} fill="#120E43" />
                        <Line type="price" dataKey="uv" stroke="#3DBE29" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Phonebar;