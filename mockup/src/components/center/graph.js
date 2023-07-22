import Graphdet from "./graphdet";
import Chart from 'react-apexcharts';
import { useState } from "react";

export default function Graph() {
    const [series, setSeries] = useState([{
        name: 'Employer',
        data: [44, 55, 41, 67, 22, 43,76,97,45,54,76,35,76]
        }, {
        name: 'Employee',
        data: [13, 23, 20, 8, 13, 27,75,35,65, 67, 22, 43,76]
        }, {
        name: 'Total Interest',
        data: [11, 17, 15, 15, 21, 14,75,35,67,23, 20, 8, 13]
        }]);

    const [options, setOptions] = useState({
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
            show: false
            },
            zoom: {
            enabled: true
            }
        },
        responsive: [{
            breakpoint: 500,
            options: {
            legend: {
                enabled: false,
                labels: false
            }
            }
        }],
        plotOptions: {
            bar: {
            horizontal: false,
            columnWidth: '20px',
            },
        },
        xaxis: {
            type: 'category',
            categories: ['20', '', '25', '', '30', '','35','','40','','60','','65'],
        },
        dataLabels: {
            enabled: false
        },
        yaxis: {
            min: 0,
            max: 300,
            tickAmount: 3,
            tickFormatter: function (value) {
              return ('$' + value);
            }},
        legend: {
            enabled: false,
                labels: false
        },
        fill: {
            opacity: 1
        },
        colors: ['#0800A3', '#4935FF', '#85AFFF'],
    });


    return (
        <>
            <div className="graph">
                <div className="graph-content">
                    <p className="graph-heading">Contribution Overtime</p>
                </div>

                <div className="graph-item-block d-flex">
                    <Graphdet item="Employer" value="K 73,500" color="#0800A3" />
                    <Graphdet item="Employee" value="K 52,500" color="#4935FF" />
                    <Graphdet item="Total Interest" value="K 244,313" color="#85AFFF" />
                </div>

                <div className="graph-box">
                    <Chart options={options} series={series} type="bar" height={350} />
                </div>
            </div>
        </>
    )
}