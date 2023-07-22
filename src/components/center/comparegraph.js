import Chart from 'react-apexcharts';

export default function Comparegraph(props) {

    const series = [`${props.value}`];

    const options = {

        chart: {
            height: 100,
            type: 'radialBar',
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            radialBar: {
                track: {
                    strokeWidth: '50%',
                    margin: 5, // margin is in pixels
                    background: '#D3F7EE', // color of the percentage(inner) bar
                    opacity: 1,
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: { // value is the value of the percentage
                        offsetY: 7,
                        offsetX: 0,
                        fontWeight: 'bold',
                        fontSize: '15px',
                        color: '#000',  // color of the value
                        formatter: function (val) {
                            return val + '%';
                        }
                    }
                },

            },
        },
        colors: ['#22D6AA'] // color of the percentage(outer) bar
    };
    return (
        <>
            <div className="graph-content">
                <Chart options={options} series={series} type="radialBar" height={150} />
                <div className="graph-name text-center">{props.name}</div>
            </div>
        </>
    )
}