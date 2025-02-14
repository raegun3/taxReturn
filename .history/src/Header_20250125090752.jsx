import React from "react"


function Header() {
  return (
    <header>

        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-1 fixed-top ">
            <div class="container">
                <a href="#" class="navbar-brand">My First Homepage</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navmenu">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a href="/myfirsthomepage/itskills.html" class="nav-link">What I've learn</a>
                        </li>
                        <li class="nav-item">
                            <a href="/myfirsthomepage/interest.html" class="nav-link">IT Skills interested to learn</a>
                        </li>
                        <li class="nav-item">
                            <a href="#instructors" class="nav-link">instructors</a>
                        </li>
                        <li class="nav-item">
                            <a href="/myfirsthomepage/contactme.html" class="nav-link">contact me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  );
}
export default Header;