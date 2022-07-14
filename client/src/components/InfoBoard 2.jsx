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
          Expands Digital Knowledge Base
          <Typography
            sx={{
              color: "#999999",
              fontSize: { xs: 12, sm: 18, md: 20 },
              fontWeight: "500",
            }}
          >
            This programme gives you the 5 major capabilities to be confident in
            Digital Technologies.
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
                  PROBLEM SOLVING
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    The programme challenges are designed to think around
                    multiple issues and challenges the way students interact
                    with computers and other related technology.
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
                  DECISION-MAKING
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    The programme uses technology to make the lives of many
                    people happier through the decisions made when creating
                    digital applications.
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
                  CONFIDENCE
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    When having the skills to manipulate the applications and
                    learning to use it brings self-confidence into your life.
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
                  HIGHER SELF-EXPECTATIONS
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    This programme develops students to think the best of
                    themselves to bring higher expectations to their learning
                    and lives as young adults.
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
                  COHERENCE
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: { xs: 12, sm: 18, md: 18 },
                      fontWeight: "400",
                    }}
                  >
                    This programme offers all students a broader education that
                    makes links within and across learning areas
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
