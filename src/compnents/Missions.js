import React from 'react';
import '../styling/mission.css';

export default function Missions() {
  return (
    <div className="missionTable">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th className="wider">Description</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>name</th>
            <td>
              description
            </td>
            <td>
              NOT A MEMBER
            </td>
            <td>
              <button type="button">
                Join Mission
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
