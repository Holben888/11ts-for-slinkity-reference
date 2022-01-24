import React from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"
// import { getRandomInt } from "/@root/utils/getRandomInt"
import "@reach/tabs/styles.css"

const PossumUpsell = ({ tshirts }) => {
  // const start = getRandomInt(tshirts.length - 4)
  // const three = tshirts.slice(start, start + 3)
  return (
    <Tabs>
      <TabList>
        {tshirts.map(tshirt => (
          <Tab>{tshirt.name}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {tshirts.map(({ slug, images }) => (
          <TabPanel>
            <a href={`/${slug}`}>
              <img src={images[0]} />
            </a>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

export default PossumUpsell