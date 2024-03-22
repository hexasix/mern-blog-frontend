export default function Post() {
  return (
      <div className="post">
        <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2024/03/starship-wet-dress-rehearsal.jpeg?w=1390&crop=1"
          alt=""
        />
        </div>
        <div className="texts">
          <h2>SpaceX eyes March 14 for next Starship test flight</h2>
          <p className="info">
            <span className="author">De Lin</span>
            <time>2023-01-06</time>
          </p>
          <p className="summary">
            SpaceX is aiming to launch its massive Starship rocket for the third
            time as soon as March 14, the company confirmed in a social media
            post Wednesday.
          </p>
        </div>
      </div>
  );
}
