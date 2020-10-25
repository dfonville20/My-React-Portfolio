var NewComponent = React.createClass({
  render: function () {
    return (
      <div id="main-container" className="container">
        <section className="main-container">
          <h1>About Me</h1>
          <img
            src="Assets/Images/200x200.jpg"
            className="auth-image"
            alt="Self Portrait"
          />
          <p>
            My name is Dwayne Fonville and I am a student attending coding
            bootcamp at UNC. Upon completion of the bootcamp I will be capable
            of web design and app development. Originally from Atlantic Beach
            North Carolina, I currently reside in Greensboro North Carolina but
            open to relocating if necessary. I work for the United States
            Federal Government as a Human Resources Specialist full time while
            also attending the bootcamp.
          </p>
          <p>
            I plan on using my newly acquired skillset to help any interested
            organization achieve their goals both big and small.
          </p>
        </section>
        <section className="sidebar">
          <div id="connect">
            <h2>Connect with Me</h2>
            <a href="https://github.com/dfonville20" target="_blank">
              <img
                src="Assets/Images/iconfinder_mark-github_298822.png"
                className="social"
                alt="Github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/dwayne-fonville-jr-563201132/"
              target="_blank"
            >
              <img
                src="Assets/Images/iconfinder_square-linkedin_317725.png"
                className="social"
                alt="LinkedIn"
              />
            </a>
            <a href="https://gitlab.com/dfonville20" target="_blank">
              <img
                src="Assets/Images/iconfinder_144_Gitlab_logo_logos_4373151.png"
                className="social"
                alt="Gitlab"
              />
            </a>
          </div>
        </section>
      </div>
    );
  },
});
