import Navbar from '../components/navbar'
import FeaturedMovies from '../components/featuredMovies'


export default function Home() {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <section class="featured">
                    <FeaturedMovies/>
                </section>
            </main>
        </>
    );
}
