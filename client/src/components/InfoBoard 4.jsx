import { Link, Routes, Route, Router } from "react-router-dom";
import {
  Button,
  Box,
  Grid,
  ThemeProvider,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { mainTheme } from "./themes";
import { useState } from "react";
import React from "react";
import Icon from "./img/star ICON.png";
import { margin } from "@mui/system";

function InfoBoard() {
  return (
    <div>
      <mainTheme>
        <Typography
          sx={{
            color: "#999999",
            fontSize: { xs: 12, sm: 18, md: 35 },
            fontWeight: "800",
            marginTop: "0",
            marginBottom: "0",
          }}
        >
          IR4.0
          <Typography
            sx={{
              color: "#999999",
              fontSize: { xs: 12, sm: 18, md: 20 },
              fontWeight: "500",
            }}
          >
            Designed with IT industry experts, the programme develops the
            students to find applicable jobs and careers in the Fourth
            Industrial Revolution. (IR4.0)
          </Typography>
          <List>
            <ListItem>
              <img src={Icon} />
              <ListItemText>
                <Typography
                  sx={{
                    color: "#999999",
                    fontSize: { xs: 12, sm: 18, md: 23 },
                    fontWeight: "700",
                  }}
                >
                  LEARNING TO LEARN
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    The programme will set challenges at the end of every
                    project to encourage students to explore and learn how to
                    learn.
                  </span>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <img src={Icon} />
              <ListItemText>
                <Typography
                  sx={{
                    color: "#999999",
                    fontSize: { xs: 12, sm: 18, md: 23 },
                    fontWeight: "700",
                  }}
                >
                  COMMUNITY ENGAGEMENT
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    The programme encourages students to be involved in the
                    communities, such as family, friends, and in school, to
                    contribute and make connections with other people.
                  </span>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <img src={Icon} />
              <ListItemText>
                <Typography
                  sx={{
                    color: "#999999",
                    fontSize: { xs: 12, sm: 18, md: 23 },
                    fontWeight: "700",
                  }}
                >
                  CULTURAL DIVERSITY
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    This programme is designed in New Zealand and reflects NZ's
                    cultural diversity
                  </span>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <img src={Icon} />
              <ListItemText>
                <Typography
                  sx={{
                    color: "#999999",
                    fontSize: { xs: 12, sm: 18, md: 23 },
                    fontWeight: "700",
                  }}
                >
                  INCLUSION
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    In particular the programme is designed with acknowledgement
                    to the student's identities and talents, allowing them to be
                    creative to their personal ability.
                  </span>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <img src={Icon} />
              <ListItemText>
                <Typography
                  sx={{
                    color: "#999999",
                    fontSize: { xs: 12, sm: 18, md: 23 },
                    fontWeight: "700",
                  }}
                >
                  FUTURE FOCUS
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    The programme leads students to explore future themes such
                    as artificial intelligence and augmented reality.
                  </span>
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Typography>
      </mainTheme>
    </div>
  );
}
export default InfoBoard;
