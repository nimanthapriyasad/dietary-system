import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import * as Yup from "yup";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import HeightBox from "../../components/HeightBox";
import Grid from "@mui/material/Grid";
import AdminNavBar from "../../components/AdminNavBar";
import api from "../../api";
import "./index.css";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required()
    .label("firstName"),
  lastName: Yup.string()
    .required()
    .label("lastName"),
  telephoneNo: Yup.string()
    .required()
    .label("Telephone"),
  username: Yup.string()
    .required()
    .label("userName"),
  email: Yup.string()
    .email()
    .required()
    .label("Email"),
  password: Yup.string()
    .min(8)
    .max(15)
    .required()
    .label("Password")
    .matches(/\d+/, "Password should contain at least one number")
    .matches(
      /[a-z]+/,
      "Password should contain at least one lowercase character"
    )
    .matches(
      /[A-Z]+/,
      "Passoword should contain at least one uppercase character"
    )
    .matches(
      /[!@#$%^&*()-+]+/,
      "Password should contain at least one special character"
    ),
});

const BackButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#424242",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#616161",
  },
});

export default function AddModeratorPage() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    telephoneNo: "",
    email: "",
    username: "",
    password: "",
  });

  const initialValues = {
    firstName: formValues.firstName,
    lastName: formValues.lastName,
    telephoneNo: formValues.telephoneNo,
    email: formValues.email,
    username: formValues.username,
    password: formValues.password,
  };

  async function registerUser(values) {
    setLoading(true);
    try {
      await api.user.signUpUser(values);
      navigate("/admin/mod-info");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  const submitForm = (values) => {
    setFormValues({
      ...formValues,
      ...values,
    });

    registerUser({ ...formValues, ...values });
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
        } = formikProps;

        return (
          <Box className="fineContainer">
            <AdminNavBar />
            <HeightBox height={95} />
            <Box
              sx={{
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                className="formRegContainer"
                sx={{ width: 600, boxShadow: 3 }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  align="center"
                  sx={{
                    fontWeight: 600,
                    color: "#000000",
                  }}
                  data-testid="add_moderator"
                >
                  Moderator details
                </Typography>
                <Grid container direction="column">
                  <Grid item>
                    <TextField
                      fullWidth
                      required
                      label="First Name"
                      type="text"
                      size="small"
                      id="firstName"
                      name="firstName"
                      value={values.firstName}
                      error={errors.firstName}
                      helperText={touched.firstName ? errors.firstName : ""}
                      onChange={handleChange("firstName")}
                      variant="outlined"
                    />
                  </Grid>
                  <HeightBox height={15} />
                  <Grid item>
                    <TextField
                      fullWidth
                      required
                      label="Last Name"
                      type="text"
                      size="small"
                      id="lastName"
                      name="lastName"
                      value={values.lastName}
                      error={errors.lastName}
                      helperText={touched.lastName ? errors.lastName : ""}
                      onChange={handleChange("lastName")}
                      variant="outlined"
                    />
                  </Grid>
                  <HeightBox height={15} />
                  <Grid item>
                    <TextField
                      fullWidth
                      required
                      label="Telephone"
                      type="text"
                      size="small"
                      id="telephone"
                      name="telephone"
                      value={values.telephoneNo}
                      error={errors.telephoneNo}
                      helperText={touched.telephoneNo ? errors.telephoneNo : ""}
                      onChange={handleChange("telephoneNo")}
                      variant="outlined"
                    />
                  </Grid>
                  <HeightBox height={15} />
                  <Grid item>
                    <TextField
                      fullWidth
                      required
                      label="Email"
                      type="email"
                      id="email"
                      name="email"
                      size="small"
                      value={values.email}
                      error={errors.email}
                      helperText={touched.email ? errors.email : ""}
                      onChange={handleChange("email")}
                      variant="outlined"
                    />
                  </Grid>
                  <HeightBox height={15} />
                  <Grid item>
                    <TextField
                      fullWidth
                      required
                      label="User Name"
                      type="text"
                      size="small"
                      id="username"
                      name="username"
                      value={values.username}
                      error={errors.username}
                      helperText={touched.username ? errors.username : ""}
                      onChange={handleChange("username")}
                      variant="outlined"
                    />
                  </Grid>
                  <HeightBox height={15} />
                  <Grid item>
                    <TextField
                      required
                      fullWidth
                      size="small"
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange("password")}
                      error={errors.password}
                      helperText={touched.password ? errors.password : ""}
                      variant="outlined"
                    />
                  </Grid>
                  <HeightBox height={15} />
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <BackButton
                        size="small"
                        variant="contained"
                        fullWidth
                        sx={{ backgroundColor: "#616161" }}
                        onClick={() => navigate("/admin/mod-info")}
                      >
                        BACK
                      </BackButton>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        type="submit"
                        size="small"
                        variant="contained"
                        fullWidth
                        disabled={isLoading}
                        sx={{ backgroundColor: "#636cff" }}
                        onClick={handleSubmit}
                      >
                        {isLoading ? <CircularProgress /> : "Add Moderator"}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
}
