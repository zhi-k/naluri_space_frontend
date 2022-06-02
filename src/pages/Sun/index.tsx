import { useState, useEffect } from "react";

import CircumferenceLayout from "@/layouts/CircumferenceLayout";
import { getCircumference, ISunCircumferenceData } from "@/api/sun";

export default function Sun() {
	const [data, setData] = useState({
		circumference: "0",
		pi: "0",
		elapsedTime: 0,
		decimalPoints: 0,
	});

	useEffect(() => {
		getCircumference().then(({ data }: { data: ISunCircumferenceData }) => {
			setData({
				circumference: data.data.circumference,
				pi: data.data.pi,
				elapsedTime: data.data.elapsed_time,
				decimalPoints: data.data.decimal_points,
			});
		});
	}, []);

	return <CircumferenceLayout>
		<h1 className="text-4xl font-bold mb-1">The Sun's Circumference</h1>

		<div className="flex inline-flex justify-between text-gray-500 text-sm mb-6">
			<div className="mr-4">
				<span className="mr-1">Decimal Points:</span>
				<span>{data.decimalPoints}</span>
			</div>

			<div className="mr-4">
				<span className="mr-1">Elapsed Time:</span>
				<span>{data.elapsedTime} milliseconds</span>
			</div>
		</div>

		<div className="flex-column mb-4 break-word">
			<span className="font-bold mr-1">Pi:</span>
			<p className="break-all max-w-fit">{data.pi}</p>
		</div>

		<div className="flex-column break-word">
			<span className="font-bold mr-1">Circumference:</span>
			<p className="break-all max-w-fit">{data.circumference} Kilometers</p>
		</div>
	</CircumferenceLayout>;
}