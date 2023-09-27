import React from "react";
import { Autocomplete } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Autocomplete>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
        </Autocomplete>
      </Toolbar>
    </AppBar>
  );
}
