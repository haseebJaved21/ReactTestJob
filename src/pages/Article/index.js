// global
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button, Grid, TextField } from "@material-ui/core";

import ArticleCardList from "./ArticleCardList";

const useStyles = makeStyles((theme) => ({
  page: {
    padding: "20px 24px",
  },
}));

const Article = ({ }) => {
  const classes = useStyles();
  const history = useHistory();
  var Data = [
    {
      id: 1,
      depth: 0,
      votes: 23,
      title: "The hardest thing you have ever done",
      canonicalUrl: "the-hardest-thing-you-have-ever-done",
      parentId: null,
      description:
        "This is silly it's not even a love song. Who knew it would all make sense eventually. We really don't know how long this could continue that which is coundting frogs and such.",
      createdDate: "04/04/1989",
      username: "CodeHappy",
    },
    {
      id: 2,
      depth: 0,
      votes: 15,
      title: "The second hardest thing you have ever done",
      canonicalUrl: "the-second-hardest-thing-you-have-ever-done",
      parentId: null,
      description:
        "This is silly its a love song. It would all make sense eventually",
      createdDate: "04/22/1989",
      username: "cbond",
    },
    {
      id: 4,
      depth: 1,
      votes: 135,
      title: "The fourth hardest thing you have ever done",
      canonicalUrl: "the-second-hardest-thing-you-have-ever-done",
      parentId: 2,
      description:
        "This is silly it's not even a love song. Who knew it would all make sense eventually. We really don't know how long this could continue that which is coundting frogs and such.",
      createdDate: "04/22/1989",
      username: "aholland",
    },
    {
      id: 5,
      depth: 1,
      votes: 245,
      title: "The fifth hardest thing you have ever done",
      canonicalUrl: "the-second-hardest-thing-you-have-ever-done",
      parentId: 2,
      description:
        "This is silly its a love song. It would all make sense eventually",
      createdDate: "04/22/2029",
      username: "nevin",
    },
    {
      id: 6,
      depth: 2,
      votes: 95,
      title: "The 6th hardest thing you have ever done",
      canonicalUrl: "the-second-hardest-thing-you-have-ever-done",
      parentId: 5,
      description:
        "This is silly it's not even a love song. Who knew it would all make sense eventually. We really don't know how long this could continue that which is coundting frogs and such.",
      createdDate: "04/22/2011",
      username: "garrett",
    },
    {
      id: 3,
      depth: 0,
      votes: 155,
      title: "The 3rd hardest thing you have ever done",
      canonicalUrl: "the-third-hardest-thing-you-have-ever-done",
      parentId: null,
      description:
        "This is silly it's not even a love song. Who knew it would all make sense eventually. We really don't know how long this could continue that which is coundting frogs and such.",
      createdDate: "04/22/1989",
      username: "Athar",
    },
    {
      id: 7,
      depth: 1,
      votes: 75,
      title: "The 7th hardest thing you have ever done",
      canonicalUrl: "the-third-hardest-thing-you-have-ever-done",
      parentId: 3,
      description:
        "This is silly its a love song. It would all make sense eventually",
      createdDate: "04/22/1989",
      username: "Amid",
    },
    {
      id: 8,
      depth: 3,
      votes: 55,
      title: "The 8th hardest thing you have ever done",
      canonicalUrl: "the-second-hardest-thing-you-have-ever-done",
      parentId: 6,
      description:
        "This is silly it's not even a love song. Who knew it would all make sense eventually. We really don't know how long this could continue that which is coundting frogs and such.",
      createdDate: "04/22/1989",
      username: "Mustafa",
    },
    {
      id: 9,
      depth: 3,
      votes: 155,
      title: "The 9th hardest thing you have ever done",
      canonicalUrl: "the-second-hardest-thing-you-have-ever-done",
      parentId: 6,
      description:
        "This is silly it's not even a love song. Who knew it would all make sense eventually. We really don't know how long this could continue that which is coundting frogs and such.",
      createdDate: "04/22/1989",
      username: "Raymond",
    },
    {
      id: 10,
      depth: 4,
      votes: 75,
      title: "The 10th hardest thing you have ever done",
      canonicalUrl: "the-second-hardest-thing-you-have-ever-done",
      parentId: 8,
      description:
        "This is silly its a love song. It would all make sense eventually",
      createdDate: "04/22/1989",
      username: "Sarge",
    },
    {
      id: 11,
      depth: 4,
      votes: 55,
      title: "The 11th hardest thing you have ever done",
      canonicalUrl: "the-second-hardest-thing-you-have-ever-done",
      parentId: 9,
      description:
        "This is silly it's not even a love song. Who knew it would all make sense eventually. We really don't know how long this could continue that which is coundting frogs and such.",
      createdDate: "04/22/1989",
      username: "Alex",
    },
  ];

  const [articlesData, setArticlesData] = useState(Data.sort(function (a, b) { return new Date(b.createdDate) - new Date(a.createdDate) }));

  const applyFilter = (key) => {
    const data = [...Data];
    if (key === "createdDate") {
      new Date();
      let filterData = data.sort(function (a, b) {
        return new Date(b.createdDate) - new Date(a.createdDate);
      });
      setArticlesData(filterData);
      return;
    }
    let filterData = data.sort(function (a, b) {
      return b[key] - a[key];
    });
    setArticlesData(filterData);
  };
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.page}
      >
        <Grid container style={{ margin: 15 }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h2" style={{ textShadow: "2px 2px grey" }}>
              Article's Sorting App
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12} lg={10} xl={10} style={{ marginLeft: 11 }}>
          <Grid
            container
            item
            xs={12}
            lg={10}
            xl={10}
            spacing={3}
            style={{ marginBottom: "1px" }}
          >
            <Button
              variant="contained"
              style={{ marginRight: "11px" }}
              onClick={() => applyFilter("votes")}
            >
              Most Upvoted
            </Button>
            <Button
              variant="contained"
              onClick={() => applyFilter("createdDate")}
            >
              Most Recent
            </Button>
          </Grid>
        </Grid>

        <Box>
          <ArticleCardList
            key={}
            postData={articlesData}
            main={false}
          />
        </Box>
      </Grid>
    </>
  );
};

export default Article;
