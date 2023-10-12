import style from './style.module.css';
import {MenuListItem} from "../MenuListItem";
import {Fragment} from "react";
import {levels} from "../../utils/constants";

export function MenuList() {


    return (
        <div className={style.box} >
            {
                levels.map((level, index) => (
                    <Fragment key={index} >
                        <MenuListItem level={level} />
                    </Fragment>
                ))
            }
        </div>
    );
};