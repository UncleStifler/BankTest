import React, {useState} from 'react';
import {FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import {finishPasswordAC} from "../../store/appReducer";
import {useDispatch, useSelector} from "react-redux";
import style from "./Step2.module.css"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';


const Step2 = () => {

    const dispatch = useDispatch()
    const finishPassword = useSelector(state => state.appReducer.finishPassword)

    const [values, setValues] = useState({
        showPassword: false,
        characters: '',
        charactersCount: 0,
        finishCount: 60,
        rememberText: '',
        passwordTextFirst: '',
        passwordTextSecond: '',
        finishPassword: ''
    })

    const [passwordFirstError, setPasswordFirstError] = useState(false)

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    // flow changeText
    const inputHelperTextHandler = (e) => {
        if (e.currentTarget.value.length <= 60) {
            setValues({
                ...values,
                characters: e.currentTarget.value,
                charactersCount: values.finishCount - e.currentTarget.value.length
            })
        }
    }
    // registro de errores
    const enterHandler = (e) => {
        if (e.charCode === 13 && values.characters.trim() !== "") {
            setValues({
                ...values, characters: ''
            })
        }
    }

    const checkingFirstPasswordHandler = (e) => {
        const passwordFirst = e.currentTarget.value.trim()
        setValues({
            ...values, passwordTextFirst: passwordFirst
        })
    }

    const errorStatusFirstPasswordHandler = () => {
        if (/(?=^.{8,24}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g.test(values.passwordTextFirst)) {
            setPasswordFirstError(false)
        } else  setPasswordFirstError(true)
    }

    const checkingSecondPasswordHandler = (e) => {
        const currentPassword = e.currentTarget.value.trim()
        setValues({
            ...values, passwordTextSecond: currentPassword
        })
        if (/(?=^.{8,24}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g.test(currentPassword)) {
            if (currentPassword === values.passwordTextFirst) {
                dispatch(finishPasswordAC(currentPassword))
                setValues({...values, passwordTextSecond: currentPassword})
            }
        } else {
            dispatch(finishPasswordAC(''))
        }
    }

    const errorStatusSecondPasswordHandler = () => {
        finishPassword === '' || (values.passwordTextFirst !== values.passwordTextSecond)? setPasswordFirstError(true) :
            setPasswordFirstError(false)
    }

    return (
        <div>
            <h2>Crea tu Password Manager</h2>
            <hr/>
            <div className={style.passwordBlockWithText}>
                <p>
                    En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas.
                </p>
                <p>
                    No podrás recuperar tu contraseña, así que recuérdela bien.
                </p>
                <div className={style.passwordBlock}>
                    <FormControl
                        variant="outlined">
                        <p>Crea tu Contraseña Maestra</p>
                        <OutlinedInput
                            error={passwordFirstError}
                            sx={{
                                color: "#23465C",
                                borderRadius: "3px",
                                border: "none solid #23465C"
                            }}
                            placeholder="Crea tu contraseña"
                            type={values.showPassword ? 'text' : 'password'}
                            onChange={checkingFirstPasswordHandler}
                            onBlur={errorStatusFirstPasswordHandler}
                            value={values.passwordTextFirst}
                            endAdornment={<InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    onClick={handleClickShowPassword}>
                                    {values.showPassword ? <VisibilityOffOutlinedIcon/> : <RemoveRedEyeOutlinedIcon/>}
                                </IconButton>

                            </InputAdornment>}
                        />
                    </FormControl>
                    <FormControl
                        sx={{ml: 5}}
                        variant="outlined">
                        <p>Repite tu Contraseña Maestra</p>
                        <OutlinedInput
                            error={passwordFirstError}
                            placeholder="Repite tu contraseña"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.passwordTextSecond}
                            onChange={checkingSecondPasswordHandler}
                            onBlur={errorStatusSecondPasswordHandler}
                            endAdornment={<InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    onClick={handleClickShowPassword}>
                                    {values.showPassword ? <VisibilityOffOutlinedIcon/> : <RemoveRedEyeOutlinedIcon/>}
                                </IconButton>
                            </InputAdornment>}
                        />
                    </FormControl>
                </div>
            </div>
            <div className={style.pistaBlock}>
                <p>También puedes crear una pista que te ayude a recordar tu contraseña maestra.</p>
                <div className={style.pista}>
                    <FormControl
                        sx={{
                            width: '100%'
                        }}
                        variant="outlined">
                        <div className={style.textInformation}>
                            <p>Crea tu pista para recordar tu contraseña (opcional)</p>
                            <Tooltip
                                title="YOU ARE THE BEST"
                                placement="right"
                            >
                                <InfoOutlinedIcon
                                    sx={{ml: "5px"}}>
                                </InfoOutlinedIcon>
                            </Tooltip>
                        </div>
                        <OutlinedInput
                            placeholder="Introduce tu pista"
                            autoFocus
                            type='text'
                            value={values.characters}
                            onChange={inputHelperTextHandler}
                            onKeyPress={enterHandler}
                        />
                        <FormHelperText
                            sx={{
                                fontSize: "15px",
                                color: "#9CADB7",
                                fontWeight: "normal",
                                textAlign: "right",
                                mr: "0"
                            }}
                            id="filled-weight-helper-text">{`${values.charactersCount}/${values.finishCount}`}</FormHelperText>
                    </FormControl>
                </div>
            </div>
        </div>
    );
};

export default Step2;
