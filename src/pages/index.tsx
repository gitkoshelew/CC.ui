import {Layout} from "../components/layout/Layout";
import {Navigation} from "../components/layout/navigation/Navigation";
import {Cards} from "../components/cards/Cards";
import {categories, sort} from "../Mocs/NavigationMoc";

export default function Home() {
    return (
        <Layout header={"full"}>
            <Navigation sort={sort} categories={categories}/>
            <Cards/>
        </Layout>
    )
}
