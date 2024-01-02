import React from 'react'
import DashboardMain from '../DashboardMain';
import {BrowserRouters as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import AboutService from '../Service/About.Service';
import ContactService from '../Service/Contact.Service';
import PrivacyPolicyService from '../Service/PrivacyPolicy.Service';
import TermsAndCondition from '../Service/TermsAndCondition';
import { HomeComponent } from '../../LoginComponent/HomeComponent';
import history from './history';
import BuyNow from '../AllCoursesService/BuyNow';


function DashboardRouter({}) {
  return (
    <BrowserRouter history={history} >
        <Routes>
            <Route exact path="/" element= {<HomeComponent/>}> </Route>
            <Route exact path="/AllCourses" element= {<DashboardMain/>}> </Route>
            <Route exact path="/AboutUs" element= {<AboutService/>}> </Route>
            <Route exact path="/ContactUs" element= {<ContactService/>}> </Route>
            <Route exact path="/PrivacyPolicy" element= {<PrivacyPolicyService/>}> </Route>
            <Route exact path="/Terms&Conditions" element= {<TermsAndCondition/>}> </Route>
            <Route exact path="/OrderSummary" element= {<BuyNow/>}> </Route>
        </Routes>
        </BrowserRouter>
        )}
export default DashboardRouter;