import axios from 'axios';
import Image from 'next/image'

const Home = ({ datas, error }) => {
  console.log(datas);
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div>
      {datas.map(data => (
        <div key={data.id}>
          {/* BANNER STARTS */}
          <div className="mainB">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-sm-6">
                  <div className="bannerC">
                    <div className="wrap">{data.acf.banner_title}</div>
                    <p>{data.acf.banner_subtitle}</p>
                    <a href={data.acf.banner_link.title} className="cBtn Request hvr-ripple-out">{data.acf.banner_link.title}</a>
                  </div>
                </div>
                <div className="col-md-7 col-sm-6">
                  <div className="banner-image">
                    <Image width="650" height="450" alt="img" src={data.acf.banner_image.url}></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* BANNER ENDS */}
          {/* BOTIQUE STARTS */}
          <div className="wordpress-solution">
            <div className="container">
              <div className="title-section-service">
                <h1>A Boutique <span>WordPress Agency Sydney</span></h1>
              </div>
              <div className="wp-solution-section">
                <div className="row">
                  {/* <img src="" alt=""/> */}
                  {/* <div className="wp-soln-title">
                            <h3> <a href="https://www.wpcreative.com.au/wordpress-development-retainers/">WordPress
                                    Retainers</a></h3>
                        </div>
                        <div className="wp-soln-detail">
                            <p> Get a dedicated WordPress development team to build, maintain, improve and optimise your
                                WordPress website on a regular basis. We offer flexible monthly WordPress development
                                retainer plans based on your business needs.</p>
                        </div> */}


                        {data.acf.a_boutique_wordpress_agency_sydney.features.map(book => (
                          <div key={book.title} className="">
                            <div className="col-sm-6 col-md-3">
                              <div className="wp-solution-items">
                              <div className="wp-soln-icons">
                                <Image width="100" height="100" alt="img" src={book.image.url}></Image>
                              </div>
                                <div className="wp-soln-title">
                                  <h3> <a href="#">  {book.title} </a></h3>
                                </div>
                                <div className="wp-soln-detail">
                                  <p> {book.content} </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}


                </div>
              </div>
            </div>
          </div>
          {/* BOUTIQUE ENDS */}
        </div>
      ))}

    </div>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://frontity.test/wp-json/wp/v2/pages?slug="wp-creative"');
    const datas = res.data;
    return { datas };
  } catch (error) {
    return { error };
  }
};

export default Home;
