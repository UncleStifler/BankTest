import React from 'react';
import style from '../../App.module.css'

const TestComponent = () => {
    return (
        <div className={style.mainContainerBlock}>
            <div className={style.containerBlock}>
                <div className={style.arrow_box}>
                </div>
                <div className={style.mainBlockTitle}>
                    <h1>
                        password manager
                    </h1>
                    <div className={style.imageGeneralBlock}>
                        <div className={style.imageBlock}>
                            <img src="../../img/head.png" alt="head"/>
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipisicing elit. iure, nostrum.
                            </p>
                        </div>
                        <div className={style.imageBlock}>
                            <img src="../../img/lock.png" alt="lock"/>
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipisicing elit. dolore, itaque!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestComponent;
