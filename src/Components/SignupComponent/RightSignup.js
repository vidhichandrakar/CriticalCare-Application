import * as React from "react";
// import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Formik, Form, useFormik } from "formik";
import { isEmptyObject, isNotEmptyObject } from "../../Utils/commonUtils";
import { Toaster } from "../../Utils/Toaster";

function RedBar() {
  return (
    <Box
      sx={{
        height: 15,
      }}
    />
  );
}

export default function RightSignup({ handleLoginOption }) {

  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "80%",
          textAlign: "center",
        }}
      >
         <Typography className="loginText Signup" onClick={()=>Toaster()}>Signup</Typography>

        <Formik
          initialValues={{
            Name: "",
            emailId: "",
            number: "",
            hospitalName: "",
            qualification: "",
            affillation: "",
          }}
          validate={(data, nam) => {
            let errorMsg = {};
            let {
              Name,
              emailId,
              number,
              hospitalName,
              qualification,
              affillation,
            } = data;
            if (!Name) errorMsg.Name = "Name is mandatory";
            if (!number) errorMsg.number = "Contact Number is mandatory";
            if (!emailId) {
              errorMsg.emailId = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailId)
            ) {
              errorMsg.emailId = "Invalid email address";
            }
            if (!qualification)
              errorMsg.qualification = "Qualification is mandatory";
            if (!affillation)
              errorMsg.affillation = "Affiliation address is mandatory";
            if (!hospitalName) errorMsg = "Hospital Name is mandatory";

            return errorMsg;
          }}
          validateOnChange={true}
          onSubmit={(submitData) => {}}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
             
              <TextField
                inputProps={{ className: "textField" }}
                sx={{
                  textAlign: "center !important",
                  marginTop: "15% !important",
                }}
                fullWidth
                size="small"
                placeholder="Full Name"
                id="fullWidth"
                name="Name"
                className="BoxShadow"
                value={formik.values.Name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <TextField
                inputProps={{ className: "textField" }}
                sx={{ textAlign: "center !important" }}
                fullWidth
                size="small"
                placeholder="Email Id"
                id="fullWidth"
                name="emailId"
                className="BoxShadow"
                value={formik.values.emailId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <TextField
                fullWidth
                inputProps={{ maxLength: 10, className: "textField" }}
                size="small"
                placeholder="Phone Number"
                id="fullWidth"
                sx={{ textAlign: "center !important" }}
                value={formik.values.number}
                onChange={(event) =>
                  formik.setFieldValue(
                    "number",
                    event.target.value.replace(/\D/g, "")
                  )
                }
                onBlur={formik.handleBlur}
                name="number"
                className="BoxShadow"
              />

              <TextField
                fullWidth
                size="small"
                inputProps={{ className: "textField" }}
                placeholder="Hospital Name"
                id="fullWidth"
                className="BoxShadow"
                name="hospitalName"
                value={formik.values.hospitalName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <TextField
                fullWidth
                inputProps={{ className: "textField" }}
                size="small"
                placeholder="Qualification"
                id="fullWidth"
                className="BoxShadow"
                name="qualification"
                value={formik.values.qualification}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <TextField
                fullWidth
                size="small"
                placeholder="Current Affillation"
                inputProps={{ className: "textField" }}
                sx={{ textAlign: "center !important" }}
                id="fullWidth"
                className="BoxShadow"
                name="affillation"
                value={formik.values.affillation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Button
                fullWidth
                variant="contained"
                disabled={isNotEmptyObject(formik.errors)}
                className="otpButton"
                onClick={() => handleLoginOption("getOtpPhone", formik.values.number,"signUp")}
              >
                Get OTP
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
}
