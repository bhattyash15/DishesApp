// /* eslint-disable no-use-before-define */
// import React, { useState } from "react";
// import Chip from "@material-ui/core/Chip";
// import ChipInput from "material-ui-chip-input";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Drawer from "@material-ui/core/Drawer";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import { Button } from "@material-ui/core";
// import SearchBar from "material-ui-search-bar";
// import Avatar from "@material-ui/core/Avatar";

// const drawerWidth = 250;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex"
//   },
//   appBar: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0
//   },
//   drawerPaper: {
//     width: drawerWidth
//   },
//   toolbar: theme.mixins.toolbar,
//   content: {
//     marginTop: "90px",
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing(2)
//   },
//   margin: {
//     marginBottom: 50,
    
//   },
//    margin1: {
//     marginBottom: 50,
   
//   }
// }));

// export default function Tags() {
//   const [dishList, setDishList] = useState(dishData);
//   const [selected, setSelected] = useState("");
//   const [tag, setTag] = useState([]);
//   const [dish, setDish] = useState([]);
//   const [editFlag, setEditFlag] = useState(false);
//   const [search, setSearch] = useState("");
//   const classes = useStyles();

//   console.log(selected);

//   const handleAddTag = (value) => {
//     if (dish === "") {
//       setEditFlag(false);
//     } else {
//       setEditFlag(true);
//     }
//     setTag([...tag, value]);
//   };

//   const handleDeleteTag = (tagName, index) => {
//     if (dish === "") {
//       setEditFlag(false);
//     } else {
//       setEditFlag(true);
//     }
//     setTag(tag.slice(0, index).concat(tag.slice(index + 1)));
//   };

//   const editDishName = (value) => {
//     console.log(value);
//     if (value === "") {
//       setEditFlag(false);
//     } else {
//       setEditFlag(true);
//     }
//     setDish(value);
//   };

//   const saveDish = () => {
//     setDishList(dishList.delete(selected));
//     setDishList(dishList.set(dish, tag));
//     setSelected(dish);
//     setEditFlag(false);
//   };

//   return (
//     <div className={classes.root}>
//       {/* <div> */}
//       <CssBaseline />
//       <AppBar position="fixed" className={classes.appBar}>
//         <Toolbar>
//           <Typography variant="h6" noWrap>
//             Cook Book
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper
//         }}
//         anchor="left"
//       >
//         <div className={classes.toolbar}>
//         <Typography noWrap>
//             Dishes
         
//           <Chip
//             variant="outlined"
//             size="medium"
//             avatar={<Avatar>+</Avatar>}
//             color="primary"
//             label="Create"
//             onClick={() => {
//               setSelected("");
//               setTag("");
//               setDish("");
//             }}
//           />
//            </Typography>
//           <SearchBar
//             value={search}
//             onChange={(newValue) => setSearch(newValue)}
//             onRequestSearch={() => {
//               if (dishList.has(search)) {
//                 setSelected(search);
//               } else {
//                 window.alert("No result found");
//               }
//             }}
//           />
//         </div>
//         <Divider />
//         <List>
//           {Array.from(dishList.keys()).map((text, index) => (
//             <ListItem
//               selected={text === selected}
//               button
//               key={text}
//               onClick={() => {
//                 setSelected(text);
//                 setTag(dishList.get(text));
//                 setDish(text);
//               }}
//             >
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <main className={classes.content}>
//         <div className={classes.toolbar}>
//           {selected === "" && <h1>Create new Dish</h1>}
//           <Typography>
//             <TextField
//               className={classes.margin}
//               // variant="outlined"
//               label="Dish"
//               value={dish || ""}
//               onChange={(e) => editDishName(e.target.value)}
//             />
//           </Typography>
//           <Typography>
//             <ChipInput
//               label="Ingredients"
//               className={classes.margin1}
//               value={tag || []}
//               onAdd={handleAddTag}
//               onDelete={(tag, index) => handleDeleteTag(tag, index)}
//               options={ingredients}
//             />
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             disabled={!editFlag}
//             onClick={saveDish}
//           >
//             Save
//           </Button>
//         </div>
//       </main>
//     </div>
//   );
// }

// let ingredients = [
//   "ingredient1",
//   "ingredient2",
//   "ingredient3",
//   "ingredient4",
//   "ingredient5",
//   "ingredient6",
//   "ingredient7",
//   "ingredient8",
//   "ingredient9",
//   "ingredient10"
// ];

// let dishData = new Map([
//   ["Dish1", ["ingredient1", "ingredient2", "ingredient3"]],
//   ["Dish2", ["ingredient4", "ingredient5", "ingredient6"]],
//   ["Dish3", ["ingredient1", "ingredient5", "ingredient8"]],
//   ["Dish4", ["ingredient5", "ingredient4", "ingredient8"]],
//   ["Dish5", ["ingredient8", "ingredient4", "ingredient8"]],
//   ["Dish6", ["ingredient7", "ingredient14", "ingredient89"]]
// ]);

/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import Chip from "@material-ui/core/Chip";
import ChipInput from "material-ui-chip-input";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import Avatar from "@material-ui/core/Avatar";
import Pagination from "@material-ui/lab/Pagination";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  margin: {
    marginBottom: 50
  }
}));

export default function Tags() {
  const [dishList, setDishList] = useState(dishData);
  const [selected, setSelected] = useState("");
  const [tag, setTag] = useState([]);
  const [dish, setDish] = useState([]);
  const [editFlag, setEditFlag] = useState(false);
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [activeData, setActiveData] = useState(
    Array.from(dishData.keys()).slice(0, 7)
  );

  const classes = useStyles();

  const handleAddTag = (value) => {
    if (dish === "") {
      setEditFlag(false);
    } else {
      setEditFlag(true);
    }
    setTag([...tag, value]);
  };

  const handleDeleteTag = (tagName, index) => {
    if (dish === "") {
      setEditFlag(false);
    } else {
      setEditFlag(true);
    }
    setTag(tag.slice(0, index).concat(tag.slice(index + 1)));
  };

  const editDishName = (value) => {
    console.log(value);
    if (value === "") {
      setEditFlag(false);
    } else {
      setEditFlag(true);
    }
    setDish(value);
  };

  const saveDish = () => {
    setDishList(dishList.delete(selected));
    setDishList(dishList.set(dish, tag));
    setSelected(dish);

    setEditFlag(false);
  };

  useEffect(() => {
    setActiveData(
      Array.from(dishList.keys()).slice((activePage - 1) * 6, activePage * 6)
    );
  }, [activePage, dishList]);

  useEffect(() => {
    if (selected !== "") {
      let index = Array.from(dishList.keys()).indexOf(selected) + 1;
      let pageNum = Math.ceil(index / 6);
      setActivePage(pageNum);
    }
  }, [selected]);

  // console.log(activeData);
  // function paginate() {
  //   // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  //   setActiveData(dishData.slice((activePage - 1) * 6, activePage * 6));
  // }

  const onPageChange = (event, pageNumber) => {
    // console.log(event, pageNumber);
    setActivePage(pageNumber);
    // return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  return (
    <div className={classes.root}>
      {/* <div> */}
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Cook Book
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar}>
        <Typography noWrap>
            Dishes 
          
          <Chip
            variant="outlined"
            size="medium"
            avatar={<Avatar>+</Avatar>}
            color="primary"
            label="Create"
            onClick={() => {
              setSelected("");
              setTag("");
              setDish("");
            }}
          />
          <SearchBar
            value={search}
            onChange={(newValue) => setSearch(newValue)}
            onRequestSearch={() => {
              if (dishList.has(search)) {
                setTag(dishList.get(search));
                setDish(search);
                setSelected(search);
              } else {
                window.alert("No result found");
              }
            }}
          />
          </Typography >
        </div>
        <Divider />
        {/* <Pagination
          activePage={activePage}
          itemsCountPerPage={6}
          totalItemsCount={450}
          pageRangeDisplayed={1}
          onChange={() => {}}
        /> */}
        <List>
          {activeData.map((text, index) => (
            <ListItem
              selected={text === selected}
              button
              key={text}
              onClick={() => {
                setSelected(text);
                setTag(dishList.get(text));
                setDish(text);
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Pagination
          count={Math.ceil(dishList.size / 6)}
          size="small"
          variant="outlined"
          page={activePage}
          color="primary"
          onChange={onPageChange}
        />
        {/* <Pagination
          activePage={activePage}
          itemsCountPerPage={6}
          totalItemsCount={450}
          pageRangeDisplayed={1}
          onChange={() => {}}
        /> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {selected === "" && <h1>Create new Dish</h1>}
        <Typography>
          <TextField
            className={classes.margin}
            // variant="outlined"
            label="Dish"
            value={dish || ""}
            onChange={(e) => editDishName(e.target.value)}
          />
        </Typography>
        <Typography>
          <ChipInput
            label="Ingredients"
            className={classes.margin}
            value={tag || []}
            onAdd={handleAddTag}
            onDelete={(tag, index) => handleDeleteTag(tag, index)}
            options={ingredients}
          />
        </Typography>
        <Button
          variant="contained"
          color="primary"
          disabled={!editFlag}
          onClick={saveDish}
        >
          Save
        </Button>
      </main>
    </div>
  );
}

let ingredients = [
  "ingredient1",
  "ingredient2",
  "ingredient3",
  "ingredient4",
  "ingredient5",
  "ingredient6",
  "ingredient7",
  "ingredient8",
  "ingredient9",
  "ingredient10"
];

let dishData = new Map([
  ["Dish1", ["ingredient1", "ingredient2", "ingredient3"]],
  ["Dish2", ["ingredient4", "ingredient5", "ingredient6"]],
  ["Dish3", ["ingredient1", "ingredient5", "ingredient8"]],
  ["Dish4", ["ingredient5", "ingredient4", "ingredient8"]],
  ["Dish5", ["ingredient8", "ingredient4", "ingredient8"]],
  ["Dish6", ["ingredient7", "ingredient14", "ingredient89"]],
  ["Dish7", ["ingredient1", "ingredient2", "ingredient3"]],
  ["Dish8", ["ingredient4", "ingredient5", "ingredient6"]],
  ["Dish9", ["ingredient1", "ingredient5", "ingredient8"]],
  ["Dish10", ["ingredient5", "ingredient4", "ingredient8"]],
  ["Dish11", ["ingredient8", "ingredient4", "ingredient8"]],
  ["Dish12", ["ingredient7", "ingredient14", "ingredient89"]]
]);
