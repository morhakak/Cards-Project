import React, { useEffect, useState } from "react";
import { Box, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import searchStyle from "./searchStyle";

export default function Search() {
  const [searchParams, setSearch] = useSearchParams();
  const [query, setQuery] = useState("");
  const handleChange = ({ target }) => setQuery(target.value);
  const { SearchDiv, SearchIconWrapper, StyledInputBase } = searchStyle();
  useEffect(() => {
    setSearch({ q: query });
  }, [query]);

  return (
    <Box display="inline-flex" sx={{ alignItems: "center" }}>
      <FormControl>
        <SearchDiv>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            position="end"
          />
        </SearchDiv>
      </FormControl>
    </Box>
  );
}
