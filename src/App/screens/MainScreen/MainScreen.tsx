import { RedIcon } from "redicons";
import { Footer, Header } from "@/components";



export default function MainScreen () {
	return (
		<div>
			<Header />

			<main className="min-h-screen px-4 py-20">
				<section className="">
					<a href="https://github.com/iaseth/vite-react-ts-starter" className="block w-64 m-auto bg-zinc-800 text-zinc-200 text-center px-8 py-6 rounded">
						<RedIcon name="bs-foo" className="mx-auto" size={40} />
						<h1 className="H4">Starter</h1>
						<h4>vite-react-ts-starter</h4>
					</a>
				</section>
			</main>

			<Footer />
		</div>
	);
}
