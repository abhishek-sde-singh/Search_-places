const ResultsTable = ({ places, currentOffset }) => {
  console.log(currentOffset);
  if (!places.length) return <p>Start searching...</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Place Name</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {places.map((place, index) => (
          <tr key={place.id}>
            <td>{currentOffset + index + 1}</td>
            <td>{place.name}</td>
            <td>
              <figure>
                <img
                  src={`https://flagsapi.com/${place.countryCode}/flat/64.png`}
                  alt={`Flag of ${place.country}`}
                />
                <div> {place.country}</div>
              </figure>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
