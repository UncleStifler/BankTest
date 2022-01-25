import React from "react";
import Step1 from "./views/Step1/Step1";
import {Routes, Route} from "react-router-dom"
import Step2 from "./views/Step2/Step2";
import Step3 from "./views/Step3/Step3";
import style from './App.module.css'
import Footer from "./views/Footer/Footer";
import {useSelector} from "react-redux";
import HorizontalLabelPositionBelowStepper from "./views/stepNavigation/HorizontalLabelPositionBelowStepper";

const App = () => {

    const currentStep = useSelector(state => state.appReducer.currentStep)

    return (
        <div className={style.mainContainerBlock}>
            <div className={style.navigationBlock}>
                <HorizontalLabelPositionBelowStepper/>
            </div>
            <div className={
                currentStep === 1 ? style.arrow_box :
                    currentStep === 2 ? style.arrow_box50 : style.arrow_box60}>
                <div className={style.containerBlock}>
                    <Routes>
                        <Route path="/" element={<Step1/>}/>
                        <Route path="/step2" element={<Step2/>}/>
                        <Route path="/step3" element={<Step3/>}/>
                    </Routes>
                </div>
            </div>
            <div className={style.footerBlock}>
                <Footer/>
            </div>
        </div>
    );
};
export default App;

