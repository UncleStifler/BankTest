import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {UpdateCurrentStepAC} from "../../store/appReducer";
import {QontoConnector} from "./QontoConnector";

export const labelArray = [1, 2, 3]

export default function HorizontalLabelPositionBelowStepper() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentStep = useSelector(state => state.appReducer.currentStep)

    const changeActiveLabelHandler = (value) => {
        value === 1 ? navigate(`/`) : navigate(`/step${value}`)
        dispatch(UpdateCurrentStepAC(value))
    }

    return (
        < >
            <Box sx={{width: '30%'}}>
                <Stepper
                    activeStep={currentStep}
                    connector={<QontoConnector />}
                    alternativeLabel>
                    {labelArray.map((label, index) => (
                        <Step key={index}>
                            <StepLabel
                                onClick={() => changeActiveLabelHandler(label)}/>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </>
    );
}
