import BarChart from "./BarChart";
import BarChartGroup from "./BarChartGroup";
import Chart from "./Chart";

const BAR_CHART_DATA = [
	{ label: "Apples", value: 126 },
	{ label: "Bananas", value: 200 },
	{ label: "Oranges", value: 67 },
	{ label: "Kiwis", value: 147 },
];

const GROUPED_BAR_CHART_DATA = [
	{ label: "Apples", values: [60, 80, 100] },
	{ label: "Bananas", values: [160, 200, 120] },
	{ label: "Oranges", values: [60, 40, 10] },
];

const App = () => {
	return (
		<>
			<Chart maxHeight={500}>
				<BarChart data={BAR_CHART_DATA} />
			</Chart>
			<Chart maxHeight={500}>
				<BarChartGroup data={GROUPED_BAR_CHART_DATA} />
			</Chart>
		</>
	);
};

export default App;
