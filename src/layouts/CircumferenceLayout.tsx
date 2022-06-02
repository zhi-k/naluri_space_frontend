import { Fragment } from "react";

type CircumferenceLayoutProps = {
	children: JSX.Element
}

export default function CircumferenceLayout({ children }: CircumferenceLayoutProps) {
	return <Fragment>
		<main className="container mx-auto my-2 overflow-x-hidden">
			{children}
		</main>
		<footer
			className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800">
			<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
				&copy; Copyright {new Date().getFullYear()} Zhi Kang
			</span>
		</footer>
	</Fragment>;
}