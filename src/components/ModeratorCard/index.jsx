import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import HeightBox from "../HeightBox";
import { styled } from "@mui/material/styles";
import api from "../../api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

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

export default function ModeratorCard(props) {
  const {
    name,
    profilepic,
    email,
    telephoneNo,
    moderatorID,
    isActive,
    acceptedCount,
    rejectedCount,
    colour,
  } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function setIsActive() {
    try {
      const updateUser = await api.user.updateIsActive(email, false);
      window.location.reload(false);
    } catch (error) {
      throw error;
    }
  }

  return (
    <Card
      sx={{
        maxWidth: "auto",
        backgroundColor: colour,
        boxShadow: 3,
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <CardActionArea>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <img
                src={profilepic}
                alt="dp"
                style={{ width: 80, height: 80 }}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Grid container>
                <Grid item xs={3}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    data-testid="moderator_card"
                  >
                    Moderator ID:
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body2" color="text.secondary">
                    {moderatorID}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  <Typography variant="body2" color="text.secondary">
                    Is Active:
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body2" color="text.secondary">
                    {isActive === true ? "Yes" : "No"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={2} sx={{ marginTop: 3.5 }}>
              {isActive === true ? (
                <Button size="small" color="success" onClick={handleOpen}>
                  View Activity Log
                </Button>
              ) : (
                <Button size="small" color="error" onClick={handleOpen}>
                  View Activity Log
                </Button>
              )}

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {name}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">
                        Accepted: {acceptedCount}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">
                        Rejected: {rejectedCount}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Email: {email}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Telephone: {telephoneNo}
                  </Typography>
                  <HeightBox height={15} />
                  {isActive === true ? (
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <BackButton
                          size="small"
                          variant="contained"
                          fullWidth
                          sx={{ backgroundColor: "#616161" }}
                          onClick={handleClose}
                        >
                          Back
                        </BackButton>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          type="submit"
                          size="small"
                          variant="contained"
                          fullWidth
                          color="error"
                          onClick={setIsActive}
                        >
                          Remove Moderator
                        </Button>
                      </Grid>
                    </Grid>
                  ) : (
                    <BackButton
                      size="small"
                      variant="contained"
                      fullWidth
                      sx={{ backgroundColor: "#616161" }}
                      onClick={handleClose}
                    >
                      Back
                    </BackButton>
                  )}
                </Box>
              </Modal>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
