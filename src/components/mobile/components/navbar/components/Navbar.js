import React, { Component } from "react"

import TabBarIcon from "@shared/components/tabBarIcon/TabBarIcon"
import * as Icons from "@images/navbar"
import Box from "@primitives/Box"

console.log("MOBILE")

class Navbar extends Component {
  state = {}

  render() {
    return (
      <Box position="absolute" bottom={0} display="flex" mt={15}>
        <Box flex={1}>
          <TabBarIcon
            onClick={() => console.log("Accueil")}
            Icon={Icons.Home}
            label="Accueil"
          />
          <TabBarIcon
            onClick={() => console.log("Listes")}
            Icon={Icons.Lists}
            label="Listes"
          />
        </Box>

        <Box>
          <TabBarIcon
            onClick={() => console.log("Favoris")}
            Icon={Icons.Favorites}
            label="Favoris"
          />
          <TabBarIcon
            onClick={() => console.log("Messages")}
            Icon={Icons.Inbox}
            label="Messages"
          />
          <TabBarIcon
            onClick={() => console.log("Profil")}
            Icon={Icons.Profile}
            label="Profil"
          />
        </Box>
      </Box>
    )
  }
}

export default Navbar
