import "../Styles/WorldMap.css"
import { Box } from "@material-ui/core"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"

function ChangeMap({ mapZoom, mapCountryFocus }) {
    const map = useMap();
    map.setView(mapZoom, mapCountryFocus);
    return null;
}

function WorldMap({ mapZoom, mapCountryFocus }) {
    return (
        <Box className="map">
            <MapContainer
                // Needs height styling in order for MapContainer to appear
                className="map-container--styles"
                // Center of map on initial render
                center={mapCountryFocus}
                // Starting zoom magnitude on initial render
                zoom={mapZoom}
                maxZoom={18}
                scrollWheelZoom={false}
            >
                {/* Note: This ChangeMap functional hook is not working so the MapContainer isn't refocusing onto the currently selected country.  */}
                {/* <ChangeMap mapZoom={mapZoom} mapCountryFocus={mapCountryFocus} /> */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Customizable Marker Position */}
                <Marker position={[42.4651, -71.0110]}>
                    {/* Tooltip Pop-up for position of Marker onclick*/}
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </Box>
    )
}

export default WorldMap