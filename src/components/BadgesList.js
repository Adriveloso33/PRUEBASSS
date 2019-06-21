import React from "react";

import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
import Gravatar from "./Gravatar";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          //src={this.props.badge.avatarUrl}
          email={this.props.badge.email}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// class BadgesList extends React.Component {
//   render() {
//     return (
//       <div className="BadgesListItem">
//         <img
//           className="BadgesListItem__avatar"
//           src={this.props.badge.avatarUrl}
//           alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
//         />

//         <div>
//           <strong>
//             {this.props.badge.firstName} {this.props.badge.lastName}
//           </strong>
//           <br />@{this.props.badge.twitter}
//           <br />
//           {this.props.badge.jobTitle}
//         </div>
//       </div>
//     );
//  }

// class BadgesList extends React.Component {
//   render() {

//     return (

//       <React.Fragment>
//         {this.props.badges.map((badge) => {
//           return (
//             <div className="BadgesListItem" key={badge.id}>

//                 <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt={`${badge.firstName} ${badge.lastName}`}/>
//                 <div>
//                   <strong>
//                     {badge.firstName} {badge.lastName}
//                   </strong>
//                   <br />@{badge.twitter}
//                   <br />
//                   {badge.jobTitle}
//                 </div>

//             </div>
//          );
//         })}
//         </React.Fragment>

//     );
//   }
// }

export default BadgesList;
