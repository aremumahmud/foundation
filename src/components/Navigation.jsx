import './Navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item dropdown">
          <a href="#" className="nav-link">
            Programs
            <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </a>
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              <svg className="dropdown-item-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Support for Widows
            </a>
            <a href="#" className="dropdown-item">
              <svg className="dropdown-item-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              Children's Programs
            </a>
            <a href="#" className="dropdown-item">
              <svg className="dropdown-item-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Community Aid
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="nav-link">
            Get Help
            <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </a>
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              <svg className="dropdown-item-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14,2 14,8 20,8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10,9 9,9 8,9"></polyline>
              </svg>
              Apply for Assistance
            </a>
            <a href="#" className="dropdown-item">
              <svg className="dropdown-item-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4"></path>
                <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
                <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
                <path d="M13 12h3a2 2 0 0 1 2 2v1"></path>
                <path d="M13 12h-3a2 2 0 0 0-2 2v1"></path>
              </svg>
              Emergency Support
            </a>
            <a href="#" className="dropdown-item">
              <svg className="dropdown-item-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3h18l-2 18H5L3 3z"></path>
                <path d="M8 7h8"></path>
                <path d="M8 11h8"></path>
                <path d="M8 15h4"></path>
              </svg>
              Resource Directory
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="nav-link">
            Get Involved
            <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </a>
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              <svg className="dropdown-item-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <path d="M20 8v6"></path>
                <path d="M23 11h-6"></path>
              </svg>
              Volunteer
            </a>
            <a href="#" className="dropdown-item">
              <svg className="dropdown-item-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              Donate
            </a>
            <a href="#" className="dropdown-item">
              <svg className="dropdown-item-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Partner with Us
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
