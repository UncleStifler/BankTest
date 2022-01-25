import React from 'react';
import style from "./modalWindow.module.css"
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch, u} from "react-redux";
import {finishPasswordAC, FlagModelAC, UpdateCurrentStepAC} from "../../store/appReducer";

const ModalWindow = ({flagModel}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const navigationModelWindowHandler = () => {
        if (flagModel === 'good') {
            navigate('/')
            dispatch(UpdateCurrentStepAC(1))
        } else {
            navigate('/step2')
            dispatch(UpdateCurrentStepAC(2))
        }
        dispatch(FlagModelAC(''))
        dispatch(finishPasswordAC(''))
    }

    return (
        <div>
            <div className={style.modalContent}>
                <div className={style.infoModalBlock}>
                    {flagModel === 'good' ?
                            <div className={style.warningImg}>
                                <img src="https://i.ibb.co/Sc4BRZ8/ok.png" alt="ok" border="0"/>
                                <div>
                                    <h3>¡Tu Password Manager ya está creado!</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor
                                        nibh.</p>
                                </div>
                            </div>
                        :
                            <div className={style.warningImg}>
                                <img src="https://i.ibb.co/vw3B9Zj/false.png" alt="false" border="0"/>
                                <div>
                                    <h3>Ha habido un error</h3>
                                    <p>No hemos podido modificar tu Contraseña Maestra. Inténtalo más tarde</p>
                                </div>
                            </div>
                    }
                </div>
                <div className={style.modalButtons}>
                    <Button
                        size="large"
                        variant="text"
                        onClick={navigationModelWindowHandler}
                        sx={{
                            textTransform: "none",
                            color: "#FF0049",
                            fontWeight: "bold",
                            fontSize: "13px"
                        }}>
                        {flagModel === 'good' ? "Acceder >" : "Volver a Password Manager >"}
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default ModalWindow;
