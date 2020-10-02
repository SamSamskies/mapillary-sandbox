import React from "react";
import DeckGL from "@deck.gl/react";
import { MVTLayer } from "@deck.gl/geo-layers";
import { StaticMap } from "react-map-gl";

// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN =
    "pk.eyJ1Ijoic21peWFrYXdhIiwiYSI6ImNqcGM0d3U4bTB6dWwzcW04ZHRsbHl0ZWoifQ.X9cvdajtPbs9JDMG-CMDsA";

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

// https://www.mapillary.com/developer/tiles-documentation/#sequence-layer
const MAPILLARY_SEQUENCE_LAYER = new MVTLayer({
  data: `https://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt?access_token=${MAPBOX_TOKEN}`,
  minZoom: 6,
  maxZoom: 14,
  getLineColor: [53, 175, 109],
  opacity: 0.6
});

export default function App() {
  return (
      <DeckGL
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
          layers={[MAPILLARY_SEQUENCE_LAYER]}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_TOKEN} />
      </DeckGL>
  );
}
