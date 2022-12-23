import {Sorting} from "../../components/layout/navigation/Sorting";
import {sort} from "../../Mocs/NavigationMoc";

export const DefaultSorting = () => <Sorting sort={sort}/>

export default {
    title: "Organism/Navigation/Sorting",
    component: DefaultSorting,
};