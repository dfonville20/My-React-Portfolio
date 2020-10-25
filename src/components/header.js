var NewComponent = React.createClass({
  render: function () {
    return (
      <header id="masthead">
        <div className="container">
          <a href="index.html" id="logo">
            Dwayne Fonville Jr
          </a>
          <nav>
            <a href="index.html">About</a>
            <a href="portfolio.html">Portfolio</a>
            <a href="contact.html">Contact</a>
          </nav>
        </div>
      </header>
    );
  },
});
