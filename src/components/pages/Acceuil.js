import Pays from '../Pays';
import Hero from '../Hero';
import Programmes from '../Programmes';
import Reviews from '../Reviews';

function Acceuil () {
    return (
        <div>
            <Hero />
            <Programmes />
            <Pays />
            <Reviews />
        </div>
    );
}
export default Acceuil;