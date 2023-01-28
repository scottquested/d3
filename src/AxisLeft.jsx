import { axisLeft, select } from "d3";
import { useRef, useEffect } from "react";

const AxisLeft = ({ scale }) => {
	const ref = useRef(null);

	useEffect(() => {
		if (ref.current) {
			select(ref.current).call(axisLeft(scale).tickSize(0).tickPadding(10));
		}
	}, [scale]);

	return <g ref={ref} />;
};

export default AxisLeft;
