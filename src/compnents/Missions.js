import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, reserveMission, cancelMission } from '../redux/missions/missionSlice';
import '../styling/mission.css';

function Missions() {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const missionsInStore = missions && missions.length > 0;

    if (!missionsInStore && !dataFetched) {
      dispatch(fetchMissions());
      setDataFetched(true);
    }
  }, [missions, dataFetched, dispatch]);

  const handleJoinMission = (missionId) => {
    dispatch(reserveMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(cancelMission(missionId));
  };

  return (
    <div>
      <table id="missionsTable">
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th>&nbsp;</th>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>{mission.reserved ? 'Reserved' : 'Not Reserved'}</td>
              <td>
                {mission.reserved ? (
                  <button type="button" onClick={() => handleLeaveMission(mission.mission_id)}>
                    Leave Mission
                  </button>
                ) : (
                  <button type="button" onClick={() => handleJoinMission(mission.mission_id)}>
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
