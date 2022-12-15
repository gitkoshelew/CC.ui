import {Layout} from "../components/layout/Layout";
import {Navigation} from "../components/layout/navigation/Navigation";
import {Cards} from "../components/cards/Cards";

export default function Home() {
    return (
        <Layout header={"full"}>
            <Navigation/>
            <Cards/>
        </Layout>
    )
}
