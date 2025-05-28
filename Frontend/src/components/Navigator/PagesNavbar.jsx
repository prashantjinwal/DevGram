import { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ClickAwayListener from '@mui/material/ClickAwayListener';

// Styled search container
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  maxWidth: 300,
}));

// Search icon wrapper inside the bar
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Input style
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export const PagesNavbar = ({ page }) => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => setShowSearch(!showSearch);
  const closeSearch = () => setShowSearch(false);

  return (
    <div className="p-2 flex justify-between items-center text-white w-full px-5">
      <h4 className="font-medium text-lg sm:text-xl">{page}</h4>

      {/* Desktop Search */}
      <div className="hidden sm:block">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </div>

      {/* Mobile Search Toggle */}
      <div className="block sm:hidden relative">
        {showSearch ? (
          <ClickAwayListener onClickAway={closeSearch}>
            <div className="absolute right-0 top-0 bg-white text-black rounded px-2 py-1 z-50 w-60 shadow-md">
              <StyledInputBase
                autoFocus
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </ClickAwayListener>
        ) : (
          <IconButton onClick={toggleSearch} color="inherit">
            <SearchIcon />
          </IconButton>
        )}
      </div>
    </div>
  );
};
