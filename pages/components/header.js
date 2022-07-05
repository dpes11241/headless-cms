import axios from "axios";
import React from "react";
import Image from 'next/image'

const baseURL = "http://frontity.test//wp-json/acf/v2/options";


export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
        <nav className="navbar navbar-default scroll-to-fixed-fixed" id="menu"
        >
            <div className="container menuW">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <a className="navbar-brand" href="#">
                            <Image width="205" height="38" alt="img" src={post.acf.site_logo.url}></Image>
                    </a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-center">
                        <div className="menu-main-nav-container">
                        <ul id="primary-menu" className="menu">
                        {post.acf.menu.map(book => (
                            <li key={book.link.title}  className="">
                               <a> {book.link.title}</a>
                            </li>
                        ))}
                        </ul>
                        </div>
                    </ul>
                    <div className="headerContact">
                        <a href={`tel:${post.acf.phone_number.url}`} className="contactNumber"> {post.acf.phone_number.title} </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
)
}


