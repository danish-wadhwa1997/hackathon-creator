import React from "react";
import { getChallenges } from "../../Services/API";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ChallengeCard from "../Atoms/ChallengeCard";
import Test1 from "../../Resources/Images/test1.jpeg";
import Test2 from "../../Resources/Images/test2.jpeg";
import Test3 from "../../Resources/Images/test3.jpeg";
import Test4 from "../../Resources/Images/test4.jpeg";

const ChallengeList = () => {
  const [challenges, setChallenges] = React.useState([]);
  React.useEffect(() => {
    getChallenges().then((res) => {
      if (res.status === 200) {
        setChallenges(res.data);
      }
    });
  }, []);

  const getImage = (id) => {
    switch (id) {
      case 0:
        return Test1;
      case 1:
        return Test2;
      case 2:
        return Test3;
      case 3:
        return Test4;
      default:
        return Test1;
    }
  };
  return (
    <Box p={3}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {challenges &&
          challenges.map((challenge) => {
            return (
              <Grid key={challenge.id} item xs={12} sm={6} md={4} lg={4}>
                <ChallengeCard
                  challenge={challenge}
                  image={getImage(Math.floor(Math.random() * 4))}
                />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default ChallengeList;
