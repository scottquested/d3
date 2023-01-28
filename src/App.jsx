import BarChart from "./BarChart";

const BAR_CHART_DATA = [
	{ label: "Apples", value: 126 },
	{ label: "Bananas", value: 200 },
	{ label: "Oranges", value: 67 },
	{ label: "Kiwis", value: 147 },
];

const App = () => {
	return (
		<div style={{ width: "100%", height: "600px" }}>
			<BarChart data={BAR_CHART_DATA} />
		</div>
	);
};

export default App;
