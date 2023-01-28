import { scaleBand, scaleLinear } from "d3";
import AxisBottom from "./AxisBottom";
import AxisLeft from "./AxisLeft";

const Bars = ({ data, height, scaleX, scaleY }) => {
	return (
		<>
			{data.map(({ value, label }) => (
				<rect
					key={`bar-${label}`}
					x={scaleX(label)}
					y={scaleY(value)}
					width={scaleX.bandwidth()}
					height={height - scaleY(value)}
					fill="teal"
				/>
			))}
		</>
	);
};

const BarChart = ({ data, width, height }) => {
	const margin = { top: 10, right: 0, bottom: 30, left: 30 };
	const newWidth = width || 500 - margin.left - margin.right;
	const newHeight = height || 300 - margin.top - margin.bottom;

	const scaleX = scaleBand()
		.domain(data.map(({ label }) => label))
		.range([0, newWidth])
		.padding(0.5);
	const scaleY = scaleLinear().domain([0, 500]).range([newHeight, 0]);

	return (
		<svg
			width="100%"
			height="100%"
			viewBox={`0 0 ${newWidth + margin.left + margin.right} ${
				newHeight + margin.top + margin.bottom
			}`}
		>
			<g transform={`translate(${margin.left}, ${margin.top})`}>
				<AxisBottom scale={scaleX} transform={`translate(0, ${newHeight})`} />
				<AxisLeft scale={scaleY} />
				<Bars data={data} height={newHeight} scaleX={scaleX} scaleY={scaleY} />
			</g>
		</svg>
	);
};

export default BarChart;
