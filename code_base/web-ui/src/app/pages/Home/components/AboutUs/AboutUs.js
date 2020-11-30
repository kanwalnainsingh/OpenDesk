import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function AbousUs() {
  return (
      <Grid
      container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ padding:'0 14rem' }}
      >
        <Box textAlign="center" justifyContent="center" alignItems="center">
          <Typography>
            OpenDesk is an open source project for helping organisations
            optimize office desk utilization. System will enable employees to
            reserve their desk when they want to work from office.
          </Typography>
          <Typography style={{margin:'8rem 0', fontWeight:'bold'}}>Why your organization needs Opendesk?</Typography>
          <Typography>
            As organisation are moving towards the culture of work from
            home(WFH), and many have decided for permanent WFH options,
            Organisation would like to reduce the cost of office infrastructure
            and reduce number of desk space. Open desk will help manage a
            balance between WFH and WFO culture.
          </Typography>
        </Box>
      </Grid>
  );
}
