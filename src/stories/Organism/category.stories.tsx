import {Category} from "../../components/layout/navigation/Category";
import {categories} from "../../Mocs/NavigationMoc";

export const DefaultCategory = () => <Category categories={categories}/>

export default {
    title: "Organism/Navigation/Category",
    component: DefaultCategory,
};