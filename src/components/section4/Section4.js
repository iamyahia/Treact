import React from "react";
import Grid from "@mui/material/Grid";
import datas from "../../data/db.json";
import Card from "./Card/Card";
import { Container } from "@mui/material";

//! design
import { GridMain, GridStyled } from "./section4.styled";

const Section4 = () => {
  return (
    <Container>
      <GridMain container spacing={6}>
        <Grid item lg={4} xs={12} md={12}>
          <div className="left-Grid">
            <h2>Trending Tours</h2>
            <p style={{}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
              minim veniam.
            </p>
            <a href="#">
              View All Tours
              <svg
                viewBox="0 0 31.49 31.49"
                style={{
                  marginLeft: "0.5rem",
                  width: "1.25rem",
                  height: "1.25rem",
                }}
              >
                <path
                  fill="currentColor"
                  d="M21.205 5.007c-.429-.444-1.143-.444-1.587 0-.429.429-.429 1.143 0 1.571l8.047 8.047H1.111C.492 14.626 0 15.118 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587.444.444 1.159.444 1.587 0l9.952-9.952c.444-.429.444-1.143 0-1.571l-9.952-9.953z"
                ></path>
              </svg>
            </a>
          </div>
        </Grid>

        {datas.section4.map((data, index) => (
          <GridStyled item lg={4} xs={12} md={6}>
            <Card key={index} data={data} />
          </GridStyled>
        ))}
      </GridMain>
    </Container>
  );
};

export default Section4;
