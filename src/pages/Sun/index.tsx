import CircumferenceLayout from "@/layouts/CircumferenceLayout";
import { getCircumference } from "@/api/sun";

const fakeData = {
	circumference: "20",
	pi: "50",
	elapsedTime: "500",
	decimalPoints: 10,
};

export default function Sun() {


	return <CircumferenceLayout>
		<h1 className="text-4xl font-bold mb-1">The Sun's Circumference</h1>

		<div className="flex inline-flex justify-between text-gray-500 text-sm mb-6">
			<div className="mr-4">
				<span className="mr-1">Decimal Points:</span>
				<span>{fakeData.decimalPoints}</span>
			</div>

			<div className="mr-4">
				<span className="mr-1">Elapsed Time:</span>
				<span>{fakeData.elapsedTime} milliseconds</span>
			</div>
		</div>

		<div className="flex mb-4">
			<span className="font-bold mr-1">Pi:</span>
			<p className="flex-row break-word">{fakeData.pi}</p>
		</div>

		<div className="flex">
			<span className="font-bold mr-1">Circumference:</span>
			<p className="flex-row break-word">{fakeData.circumference}</p>
		</div>
	</CircumferenceLayout>;
}