import React from 'react'

const Navbar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">XYZ <br /> COLLEGE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">ADD FACULTIES</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/searchfac">SEARCH FACULTY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/delete">DELETE FACULTY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/viewall">VIEWALL FACULTY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/addstud">ADD STUDENT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/searchstud">SEARCH STUDENT</a>
        </li>

      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar