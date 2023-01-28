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

const BarChart = ({ data, width = 500, height = 300 }) => {
	const margin = { top: 10, right: 0, bottom: 20, left: 30 };
	const newWidth = width - margin.left - margin.right;
	const newHeight = height - margin.top - margin.bottom;

	const scaleX = scaleBand()
		.domain(data.map(({ label }) => label))
		.range([0, newWidth])
		.padding(0.5);
	const scaleY = scaleLinear().domain([0, 500]).range([newHeight, 0]);

	return (
		<svg
			viewBox={`0 0 ${newWidth} ${newHeight + margin.bottom * 2}`}
			style={{
				width: "100%",
				aspectRatio: `${newWidth}/${newHeight + margin.bottom * 2}`,
			}}
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
