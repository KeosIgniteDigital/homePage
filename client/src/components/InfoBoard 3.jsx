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
          Enhance key competencies
          <Typography
            sx={{
              color: "#999999",
              fontSize: { xs: 12, sm: 18, md: 20 },
              fontWeight: "500",
            }}
          >
            The programme enhances capabilities of students in the 5 Key
            Competencies identified in the New Zealand Curriculum:
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
                  THINKING
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    In particular the programme focused on problem solving,
                    design thinking and computational thinking.
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
                  DISCERNING CODES
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    Analysing language, symbols, and texts in order to
                    understand and make sense of the codes in which knowledge is
                    expressed.
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
                  SELF-MANAGEMENT
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    Projects and challenges are designed to motivate students to
                    explore and experiment with self-motivation.
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
                  RELATIONSHIPS WITH PEERS
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    The programme is designed with unplugged sessions where
                    students interact in a range of different situations,
                    including things like being able to listen well, recognise
                    different points of view, and share ideas.
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
                  PARTICIPATION AND COLLABORATION
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    The programme encourages students to be involved in
                    communities, such as family, whanau, school, and contribute
                    and make connections with other people.
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
