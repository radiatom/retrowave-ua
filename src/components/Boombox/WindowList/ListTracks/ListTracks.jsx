import React from "react";
import "./ListTracks.scss";
import Track from "../Track/Track";

const ListTracks = ({ list, pageNumber, openListName, leftOrRight }) => {
    return (
        <div className="listTracks">
            {list.length > 0
                ? list.map((track, index) => {
                      if (index < pageNumber * 10) {
                          return (
                              <Track
                                  id={track.id}
                                  title={track.title}
                                  index={index}
                                  key={index}
                                  rating={track.rating}
                                  duration={track.duration}
                                  openListName={openListName}
                                  leftOrRight={leftOrRight}
                              />
                          );
                      }
                  })
                : openListName !== "" && <h3 className="windowList__NoTracks">No tracks</h3>}
        </div>
    );
};

export default ListTracks;
