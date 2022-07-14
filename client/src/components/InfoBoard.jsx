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
          Interlinking Pathways
          <Typography
            sx={{
              color: "#999999",
              fontSize: { xs: 12, sm: 18, md: 20 },
              fontWeight: "500",
            }}
          >
            This programme gives us 5 important interlinking Learning Pathways.
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
                  COMPUTATIONAL THINKING
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    Within the programme the students are enabled to express
                    problems and form solutions that will be designed so a
                    computer can be used to create diverse and encapsulating
                    applications.
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
                  DEVELOPING DIGITAL OUTCOMES
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    This programme is designed to strengthen the outcomes of
                    each students personally to form strong applications.
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
                  DESIGNING PROCESSED OUTCOMES
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    Students will be taught the ways of how outcomes are
                    processed, thought about, and produced.
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
                  DEVELOP VISUAL AND SOCIAL COMMUNICATIONS
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    Students will be taught the ways of how outcomes are
                    processed, thought about, and produced.
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
                  STRONG TECHNOLOGICAL PRACTICES
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    The programme will show students the best practices to think
                    and solve the problems brought on by using technology.
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
