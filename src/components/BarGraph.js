import React from "react";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function BarGraph(props) {
    const data = [
        {
            name: props.topGenres[0],
            popularity: 590,
            pv: 800,
            amt: 1400,
            cnt: 490,
        },
        {
            name: props.topGenres[1],
            popularity: 868,
            pv: 967,
            amt: 1506,
            cnt: 590,
        },
        {
            name: props.topGenres[2],
            popularity: 1397,
            pv: 1098,
            amt: 989,
            cnt: 350,
        },
        {
            name: props.topGenres[3],
            popularity: 1480,
            pv: 1200,
            amt: 1228,
            cnt: 480,
        },
        {
            name: props.topGenres[4],
            popularity: 1520,
            pv: 1108,
            amt: 1100,
            cnt: 460,
        },
        {
            name: props.topGenres[5],
            popularity: 1400,
            pv: 680,
            amt: 1700,
            cnt: 380,
        },
    ];

    return (
        <>
            <div className="container d-flex justify-content-center">
                <BarChart
                    width={900}
                    height={450}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={30}
                >
                    <XAxis
                        dy={10}
                        dataKey="name"
                        scale="point"
                        padding={{ left: 10, right: 10 }}
                        tick={{
                            fill: props.mode === "dark" ? "white" : "black",
                        }}
                        className="quicksand-medium-500"
                    ></XAxis>
                    <YAxis
                        dx={-10}
                        tick={{
                            fill: props.mode === "dark" ? "white" : "black",
                        }}
                        className="quicksand-medium-500"
                    ></YAxis>
                    <Tooltip
                        wrapperClassName="quicksand-medium-500"
                        labelStyle={{
                            color: props.mode === "dark" ? "white" : "black",
                        }}
                        itemStyle={{
                            color: props.mode === "dark" ? "white" : "black",
                        }}
                        contentStyle={{
                            backgroundColor:
                                props.mode === "dark" ? "#36393e" : "white",
                        }}
                    />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar
                        dataKey="popularity"
                        fill={props.mode === "light" ? "#3832a8" : " #d0d000"}
                        background={{ fill: "#eee" }}
                    />
                </BarChart>
            </div>
            <div
                className={`container d-flex mt-4 mb-0 quicksand-medium-500 justify-content-center text-${
                    props.mode === "dark" ? "light" : "dark"
                }`}
            >
                <p className="fs-4">Our statistics for the past 6 months.</p>
            </div>
            <div
                className={`container d-flex mt-4 mb-0 quicksand-medium-500 justify-content-center text-${
                    props.mode === "dark" ? "light" : "dark"
                }`}
            >
                <div className="container row">
                    <p className="col text-center">
                        X-axis: Our top recent Categories
                    </p>
                    <p className="col text-center">
                        Y-axis: Relative sales of those Categories
                    </p>
                </div>
            </div>
        </>
    );
}
