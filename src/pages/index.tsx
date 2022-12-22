import {Layout} from "../components/layout/Layout";
import {Navigation} from "../components/layout/navigation/Navigation";
import {Cards} from "../components/cards/Cards";
import {cards} from "../Mocs/CardMoc";

export default function Home() {
    return (
        <Layout header={"full"}>
            <Navigation/>
            <Cards cards={cards}/>
        </Layout>
    )
}
