import React from "react";
import {Button} from "@material-ui/core";
import styles from './../modules/pagination.module.css'

const Pagination = (props) => {
    const { onLeftClick, onRightClick, page, totalPages } = props;

    return (
        <div className={styles.pagination}>
            <Button variant="contained" color="primary" onClick={onLeftClick}>
                Previous Page
            </Button>
            <div className={styles.pages}>
                {page} de {totalPages}
            </div>
            <Button variant="contained" color="primary" onClick={onRightClick}>
                Next Page
            </Button>
        </div>
    );
};

export default Pagination;
