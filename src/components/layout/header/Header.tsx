import React, {FC} from 'react';
import {FullHeader} from "./FullHeader/FullHeader";
import {DefaultHeader} from "./DefaultHeader/DefaultHeader";

export type HeaderTypes = "full" | "default"

type HeaderPropsType = {
    headerType?: HeaderTypes
}

const headersMap = {
    default: <DefaultHeader/>,
    full: <FullHeader/>
}

export const Header: FC<HeaderPropsType> = ({headerType = "default"}) => {
    return (
        headersMap[headerType]
    );
};

