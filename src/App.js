import './App.css';

function App() {
  return (
    <>
      <header>
        <nav className="navBar">
          <div>
            <ul>
              <li><a href="/"><img className="logo" src="https://puit.vercel.app/assets/puit-mRhmiYOZ.svg" alt="" /></a>
              </li>
              <li><a href="/login" id="login">Login</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div className="homePage">
            <h1 className="home">Home</h1>
            <a href="/create" className="create">Create New</a>
            <div className="tabs"><button className="active">All</button><button className="">Old Course</button><button
              className="">New Course</button></div>
            <div className="old-course grid" >
              <div className="card">
                <p>Old Course</p>
                <div className="links">
                  <h1>5th Semester</h1>
                </div>
              </div>
              <div className="card">
                <p>Old Course</p>
                <div className="links">
                  <h1>6th Semester</h1>
                </div>
              </div>
              <div className="card">
                <p>Old Course</p>
                <div className="links">
                  <h1>7th Semester</h1>
                </div>
              </div>
              <div className="card">
                <p>Old Course</p>
                <div className="links">
                  <h1>8th Semester</h1>
                </div>
              </div>
            </div>

            <div className="new-course grid">
              <div className="card">
                <p>New Course</p>
                <div className="links">
                  <h1>1st Semester</h1>

                </div>
              </div>
              <div className="card">
                <p>New Course</p>
                <div className="links">
                  <h1>2nd Semester</h1>

                </div>
              </div>
              <div className="card">
                <p>New Course</p>
                <div className="links">
                  <h1>3rd Semester</h1>

                </div>
              </div>
              <div className="card">
                <p>New Course</p>
                <div className="links">
                  <h1>4th Semester</h1>

                </div>
              </div>
              <div className="card">
                <p>New Course</p>
                <div className="links">
                  <h1>5th Semester</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
