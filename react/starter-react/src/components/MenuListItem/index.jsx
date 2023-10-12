import style from "../MenuList/style.module.css";
import {Fragment, useState} from "react";

export function MenuListItem(props) {
    const {level} = props;

    // let isHovered = false;
    const [isHovered, setIsHovered] = useState(false); // async

    function active() {
        // isHovered = true;
        setIsHovered(true);
    }

    function inactive() {
        // isHovered = false;
        setIsHovered(false);
    }

    console.log('isHovered', isHovered);

    return (
            <div
                className={style.item}
                onMouseEnter={active}
                onMouseLeave={inactive}
                style={{backgroundColor: isHovered ? '#FFFFFF' : '#BEDCFE'}}
            >
                {level}
            </div>
    );
};