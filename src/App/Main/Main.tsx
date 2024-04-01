import { RedIcon } from "redicons";



interface MainProps {
	//
}

export default function Main ({}: MainProps) {
	return (
		<main className="grow px-2 py-4 bg-zinc-100">
			<section className="">
				<a href="https://github.com/iaseth/vite-react-ts-starter" className="block w-64 m-auto bg-blue-600 text-white text-center px-8 py-6 rounded">
					<RedIcon name="bs-foo" className="mx-auto" size={40} />
					<h1 className="H4">Starter</h1>
					<h4>vite-react-ts-starter</h4>
				</a>
			</section>
		</main>
	);
}
