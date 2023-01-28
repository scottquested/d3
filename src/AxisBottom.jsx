import { axisBottom, select } from "d3";
import { useRef, useEffect } from "react";

const AxisBottom = ({ scale, transform }) => {
	const ref = useRef(null);

	useEffect(() => {
		if (ref.current) {
			select(ref.current).call(axisBottom(scale).tickSize(0).tickPadding(10));
		}
	}, [scale]);

	return <g ref={ref} transform={transform} />;
};

export default AxisBottom;
