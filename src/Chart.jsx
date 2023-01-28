import {
	useState,
	useEffect,
	useRef,
	isValidElement,
	cloneElement,
	Children,
} from "react";

import "./Chart.scss";

const Chart = ({ maxHeight, children }) => {
	const svgContainer = useRef(null);

	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	const getSvgContainerSize = () => {
		const newWidth = svgContainer.current.clientWidth;
		setWidth(newWidth);

		const newHeight = svgContainer.current.clientHeight;
		setHeight(newHeight);
	};

	const childrenWithProps = Children.map(children, (child) => {
		// Checking isValidElement is the safe way and avoids a
		// typescript error too.
		if (isValidElement(child)) {
			return cloneElement(child, { width, height });
		}
		return child;
	});

	useEffect(() => {
		// detect 'width' and 'height' on render
		getSvgContainerSize();
		// listen for resize changes, and detect dimensions again when they change
		window.addEventListener("resize", getSvgContainerSize);
		// cleanup event listener
		return () => window.removeEventListener("resize", getSvgContainerSize);
	}, []);

	return (
		<div
			ref={svgContainer}
			className="chart"
			style={{ maxHeight: maxHeight ? maxHeight : "auto" }}
		>
			{childrenWithProps}
		</div>
	);
};

export default Chart;
