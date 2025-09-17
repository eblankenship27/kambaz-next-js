import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="Course cover photo" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Course/1800" className="wd-dashboard-course-link">
                <Image src="/images/discretestructures.jpg" width={200} height={150} alt="course cover photo" />
                <div>
                    <h5> CS1800 Discrete Structures</h5>
                    <p className="wd-dashboard-course-title">
                        Coding Logic and Math
                    </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Course/1500" className="wd-dashboard-course-link">
                <Image src="/images/defaultred.png" width={200} height={150} alt="course cover photo" />
                <div>
                    <h5> CS1500 Intro to Computer Science</h5>
                    <p className="wd-dashboard-course-title">
                        Introductory Coding Class
                    </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Course/2500" className="wd-dashboard-course-link">
                <Image src="/images/defaultgreen.png" width={200} height={150} alt="course cover photo" />
                <div>
                    <h5> DS2500 Intro to Data Science</h5>
                    <p className="wd-dashboard-course-title">
                        Python and Machine Learning
                    </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Course/2550" className="wd-dashboard-course-link">
                <Image src="/images/defaultblue.jpg" width={200} height={150} alt="course cover photo" />
                <div>
                    <h5> CY2550 Cyber Security</h5>
                    <p className="wd-dashboard-course-title">
                        Introduction Class to Cybersecurity
                    </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Course/3500" className="wd-dashboard-course-link">
                <Image src="/images/defaultgrey.jpg" width={200} height={150} alt="course cover photo" />
                <div>
                    <h5> CS3500 Object Oriented Design</h5>
                    <p className="wd-dashboard-course-title">
                        Object Oriented Design course
                    </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Course/3650" className="wd-dashboard-course-link">
                <Image src="/images/electricalengineering.webp" width={200} height={150} alt="course cover photo" />
                <div>
                    <h5> EECE2231 Intro to Digital Design</h5>
                    <p className="wd-dashboard-course-title">
                        Introduction to working with circuits and creating computers
                    </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
      </div>
    </div>
);}
