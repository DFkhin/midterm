import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
const VenueSinglePage = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState({});
  const [schedule, setSchedule] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // destructuring the data response from api
        const {
          venue
          
        } = data;

        setLoading(false);
        setVenue(venue);
        setSchedule(data.schedules);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-item-center">
        <h1 className="text-center w-50 align-item-center">
          {venue.building}
        </h1>
          <Link to="/" className="btn btn-md btn-success">
            <BiArrowBack />
              Back
          </Link>
        <table className="table table-striped w-50">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Building</th>
              <th scope="col">Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{venue.id}</td>
              <td>{venue.name}</td>
              <td>{venue.building}</td>
              <td>{venue.capacity}</td>
            </tr>
          </tbody>
        </table>
        <h1
          className={
            schedule
              ? "text-center  "
              : " text-center "
          }
        >
          {schedule ? "Schedules" : "No Schedule Found"}
        </h1>
        {schedule && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Course No.</th>
                <th scope="col">Description</th>
                <th scope="col">Schedule</th>
                <th scope="col">Size</th>
                <th scope="col">Teacher</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(schedule)?.map((sched, index) => {
                return (
                  <tr key={index}>
                    <td>{schedule[sched].id}</td>
                    <td>{schedule[sched].course_no}</td>
                    <td>{schedule[sched].description}</td>
                    <td>{schedule[sched].schedule}</td>
                    <td>{schedule[sched].size}</td>
                    <td>{schedule[sched].teacher}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default VenueSinglePage;
