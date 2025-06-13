import {
	Navbar,
	Contact,
	Footer,
	Hero,
	Projects,
	Services,
	Skills,
	SEO,
} from "../components";

function Home() {
	return (
		<>
			<SEO
				title='Franklin Mike - Frontend Engineer'
				author='Franklin Mike Awa'
				description='I build scalable and accessible frontend solutions with a focus on user experience. I am passionate about creating thoughtful and inclusive experiences that adhere to web standards.'
			/>
			<main>
				<Navbar />
				<Hero />
				<Services />
				<Projects />
				<Skills />
				<Contact />
				<Footer />
			</main>
		</>
	);
}

export default Home;
