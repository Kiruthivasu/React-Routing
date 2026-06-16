function About() {
  return (
    <div className="container">

      <div className="about-card">

        <h1>About Student Portal</h1>

        <p>
          Student Portal is a React-based web application designed to
          provide a simple and efficient way to manage student information.
        </p>

        <p>
          The application uses React Router for smooth navigation between
          different pages and follows a component-based structure for
          better organization and scalability.
        </p>

        <div className="features">

          <div className="feature-box">
            <h3>⚛ React</h3>
            <p>Built using reusable React components.</p>
          </div>

          <div className="feature-box">
            <h3>🔗 Routing</h3>
            <p>Fast page navigation using React Router.</p>
          </div>

          <div className="feature-box">
            <h3>📱 Responsive</h3>
            <p>Clean design that works across devices.</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;