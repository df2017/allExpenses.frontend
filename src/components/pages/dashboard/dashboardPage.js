import React from "react";
import NavBar from "../../UI/organisms/navbar";
import { withRouter } from 'react-router-dom';

function DashboardPage() {

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <section>
    
      </section>
      <footer></footer>
    </div>
  );
}

export default withRouter(DashboardPage);